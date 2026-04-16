import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/**
 * Supabase Edge Function: submit-audit
 *
 * Receives audit form data, enforces IP-based rate limiting (5 req/IP/hour),
 * then inserts the record into the consultation_submissions table.
 *
 * Rate limit storage: uses the `audit_rate_limits` table in Supabase.
 *
 * Deploy with:
 *   supabase functions deploy submit-audit
 */

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 3600; // 1 hour

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://quantrio.in",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // ── Extract real IP ───────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown";

  // ── Initialise Supabase Admin client (service role) ───────────────────────
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  // ── Rate limit check ──────────────────────────────────────────────────────
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_SECONDS * 1000,
  ).toISOString();

  const { count, error: countError } = await supabase
    .from("audit_rate_limits")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ip)
    .gte("created_at", windowStart);

  if (countError) {
    console.error("Rate limit check failed:", countError.message);
    // Fail open to avoid blocking legitimate users on DB errors
  } else if ((count ?? 0) >= RATE_LIMIT_MAX) {
    return new Response(
      JSON.stringify({
        error: "Too many requests. Please try again later.",
        retryAfter: RATE_LIMIT_WINDOW_SECONDS,
      }),
      {
        status: 429,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Retry-After": String(RATE_LIMIT_WINDOW_SECONDS),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  // ── Parse and validate body ───────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { name, email, business_name, phone, message } = body as {
    name?: string;
    email?: string;
    business_name?: string;
    phone?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim()) {
    return new Response(
      JSON.stringify({ error: "Name and email are required." }),
      {
        status: 422,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  // ── Insert submission ─────────────────────────────────────────────────────
  const { error: insertError } = await supabase
    .from("consultation_submissions")
    .insert({
      name: name.trim(),
      email: email.trim(),
      business_name: business_name?.trim() || null,
      phone: phone?.trim() || null,
      message: message?.trim() || null,
    });

  if (insertError) {
    console.error("Submission insert failed:", insertError.message);
    return new Response(
      JSON.stringify({ error: "Submission failed. Please try again." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  // ── Record rate limit hit ─────────────────────────────────────────────────
  await supabase.from("audit_rate_limits").insert({ ip_address: ip });

  // ── Success ───────────────────────────────────────────────────────────────
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
