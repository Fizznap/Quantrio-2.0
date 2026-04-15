import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  variant?: "light" | "dark";
}

const ConsultationForm = ({ variant = "dark" }: ConsultationFormProps) => {
  const isOnBlue = variant === "dark";
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", business_name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("consultation_submissions").insert({
      name: form.name.trim(),
      business_name: form.business_name.trim() || null,
      phone: form.phone.trim() || null,
      email: form.email.trim(),
      message: form.message.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", business_name: "", phone: "", email: "", message: "" });
    }
  };

  const inputClass = isOnBlue
    ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
    : "";

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} />
      <Input name="business_name" placeholder="Business Name" value={form.business_name} onChange={handleChange} className={inputClass} />
      <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={inputClass} />
      <Input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
      <Textarea name="message" placeholder="What do you want to automate?" value={form.message} onChange={handleChange} className={`sm:col-span-2 ${inputClass}`} rows={4} />
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={loading} className={`w-full ${isOnBlue ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}>
          {loading ? "Submitting..." : "Book Free Consultation"}
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
