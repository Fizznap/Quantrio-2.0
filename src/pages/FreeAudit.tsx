import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackEvent } from "@/lib/analytics";
import { checkRateLimit, recordSubmission, getResetCountdown } from "@/lib/rateLimiter";
import { useToast } from "@/hooks/use-toast";

const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-audit`;

const FreeAudit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState<{ resetsAt: Date } | null>(() => {
    // Check on mount so the form is blocked immediately if limit already hit
    const { allowed, resetsAt } = checkRateLimit();
    return allowed ? null : { resetsAt: resetsAt! };
  });
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    website: "",
    phone: "",
    email: "",
    businessType: "",
    automationGoals: "",
    contactMethods: [] as string[],
  });

  const contactOptions = ["WhatsApp", "Website", "Instagram", "Phone calls", "Facebook"];
  const businessTypes = ["Salon", "Clinic", "Dentist", "Gym", "Spa", "Real estate", "Coaching", "Other"];

  const toggleContactMethod = (method: string) => {
    setFormData((prev) => ({
      ...prev,
      contactMethods: prev.contactMethods.includes(method)
        ? prev.contactMethods.filter((m) => m !== method)
        : [...prev.contactMethods, method],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── Client-side rate limit check ─────────────────────────────────────
    const { allowed, resetsAt } = checkRateLimit();
    if (!allowed) {
      setRateLimited({ resetsAt: resetsAt! });
      trackEvent("audit_rate_limited");
      return;
    }

    setLoading(true);
    trackEvent("audit_form_submit", { businessType: formData.businessType });

    const formattedMessage = `
Business Type: ${formData.businessType}
Website: ${formData.website || "N/A"}
Contact Methods: ${formData.contactMethods.join(", ") || "None selected"}

What to automate:
${formData.automationGoals}
    `.trim();

    // ── Call Edge Function (enforces server-side IP rate limit) ───────────
    let responseOk = false;
    let serverRateLimited = false;
    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          business_name: formData.businessName.trim() || null,
          phone: formData.phone.trim() || null,
          message: formattedMessage,
        }),
      });

      if (res.status === 429) {
        serverRateLimited = true;
      } else if (res.ok) {
        responseOk = true;
      }
    } catch (err) {
      console.error("[Quantrio] Edge Function unreachable:", err);
      // Edge Function unavailable — do not fail silently in production,
      // but for resilience we surface a generic error.
    }

    setLoading(false);

    if (serverRateLimited) {
      const resetDate = new Date(Date.now() + 3600 * 1000);
      setRateLimited({ resetsAt: resetDate });
      trackEvent("audit_rate_limited");
      return;
    }

    if (!responseOk) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      return;
    }

    // ── Record in client-side limiter only on success ─────────────────────
    recordSubmission();
    toast({ title: "Audit Requested Successfully" });
    navigate("/audit-confirmation");
  };

  return (
    <Layout>
      <div className="bg-canvas min-h-screen py-20 pb-32">
        <div className="container max-w-2xl">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="bg-card border border-black/[0.05] shadow-sm rounded-2xl p-8 sm:p-12 text-left">
            <h1 className="text-3xl font-extrabold mb-3">Get Your Free AI Audit</h1>
            <p className="text-muted-foreground mb-8">
              Tell us a bit about your business, and we'll identify where you can save time and capture more leads using AI automation.
            </p>

            {/* Rate limit warning banner */}
            {rateLimited && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/40 dark:bg-amber-900/20">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                    Too many requests. Please try again later.
                  </p>
                  <p className="mt-1 text-xs text-amber-700/80 dark:text-amber-400/80">
                    You can submit again in {getResetCountdown(rateLimited.resetsAt)}.
                    Need urgent help?{" "}
                    <a href="mailto:hello@quantrio.in" className="underline underline-offset-2">
                      Email us directly.
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name <span className="text-destructive">*</span></label>
                  <Input required placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-canvas" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email <span className="text-destructive">*</span></label>
                  <Input required type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-canvas" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Name <span className="text-destructive">*</span></label>
                  <Input required placeholder="Company Name" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} className="bg-canvas" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone / WhatsApp <span className="text-destructive">*</span></label>
                  <Input required placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-canvas" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Website <span className="text-muted-foreground font-normal">(Optional)</span></label>
                  <Input placeholder="https://yourwebsite.com" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} className="bg-canvas" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Type <span className="text-destructive">*</span></label>
                  <Select required onValueChange={(val) => setFormData({...formData, businessType: val})}>
                    <SelectTrigger className="bg-canvas">
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-sm font-medium">Where do customers contact you? <span className="text-muted-foreground font-normal">(Optional)</span></label>
                <div className="flex flex-wrap gap-2">
                  {contactOptions.map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleContactMethod(option)}
                      className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                        formData.contactMethods.includes(option)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-canvas border-input hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium">What do you want to automate? <span className="text-destructive">*</span></label>
                <Textarea 
                  required 
                  placeholder="e.g. customer enquiries, lead follow-ups, appointment booking, whatsapp replies, missed calls" 
                  value={formData.automationGoals} 
                  onChange={(e) => setFormData({...formData, automationGoals: e.target.value})} 
                  className="bg-canvas min-h-[100px]" 
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-4"
                disabled={loading || !!rateLimited}
              >
                {loading ? "Submitting..." : rateLimited ? "Limit Reached" : "Get Free Audit Report"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreeAudit;
