/**
 * Client-side rate limiter for Free Audit form submissions.
 *
 * Stores submission timestamps in localStorage and enforces:
 *   - Max 5 submissions per browser session per 1-hour rolling window.
 *
 * NOTE: This is the first layer of protection. The Supabase Edge Function
 * enforces the same limit server-side using the real client IP address.
 */

const STORAGE_KEY = "quantrio_audit_rate_limit";
const MAX_SUBMISSIONS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds

interface RateLimitStore {
  timestamps: number[];
}

/** Load and clean up expired timestamps from localStorage. */
function loadStore(): RateLimitStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { timestamps: [] };

    const store: RateLimitStore = JSON.parse(raw);
    const now = Date.now();

    // Purge timestamps outside the rolling window
    store.timestamps = store.timestamps.filter((ts) => now - ts < WINDOW_MS);
    return store;
  } catch {
    // localStorage unavailable or corrupt — allow the request through
    return { timestamps: [] };
  }
}

/** Persist the store back to localStorage. */
function saveStore(store: RateLimitStore): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Fail silently if localStorage is full or unavailable
  }
}

/**
 * Check whether a new submission is allowed.
 * Does NOT record the submission — call `recordSubmission()` after a
 * successful Supabase insert to avoid counting failed attempts.
 */
export function checkRateLimit(): {
  allowed: boolean;
  remaining: number;
  resetsAt: Date | null;
} {
  const store = loadStore();
  const remaining = MAX_SUBMISSIONS - store.timestamps.length;
  const allowed = remaining > 0;

  // When does the oldest submission fall out of the window?
  const resetsAt =
    store.timestamps.length > 0
      ? new Date(Math.min(...store.timestamps) + WINDOW_MS)
      : null;

  return { allowed, remaining: Math.max(0, remaining), resetsAt };
}

/**
 * Record a successful submission.
 * Call this ONLY after the server confirms the submission succeeded.
 */
export function recordSubmission(): void {
  const store = loadStore();
  store.timestamps.push(Date.now());
  saveStore(store);
}

/**
 * Returns a human-readable countdown string for the reset time.
 * e.g. "42 minutes"
 */
export function getResetCountdown(resetsAt: Date): string {
  const diffMs = resetsAt.getTime() - Date.now();
  const diffMins = Math.ceil(diffMs / 60000);

  if (diffMins <= 1) return "less than a minute";
  if (diffMins < 60) return `${diffMins} minutes`;
  return "1 hour";
}
