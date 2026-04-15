import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackEvent } from "@/lib/analytics";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const FreeAudit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    trackEvent("audit_form_submit", formData);
    
    const formattedMessage = `
Business Type: ${formData.businessType}
Website: ${formData.website || "N/A"}
Contact Methods: ${formData.contactMethods.join(", ") || "None selected"}

What to automate:
${formData.automationGoals}
    `.trim();

    const { error } = await supabase.from("consultation_submissions").insert({
      name: formData.name.trim(),
      business_name: formData.businessName.trim() || null,
      phone: formData.phone.trim() || null,
      email: formData.email.trim(),
      message: formattedMessage,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } else {
      toast({ title: "Audit Requested Successfully" });
      navigate("/audit-confirmation");
    }
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

              <Button type="submit" size="lg" className="w-full mt-4" disabled={loading}>
                {loading ? "Submitting..." : "Get Free Audit Report"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreeAudit;
