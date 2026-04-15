import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import {
  MessageSquare, Phone, Globe, PhoneOff, Mic, Settings, Star, RefreshCw,
  ArrowRight, Zap, Clock, Bot, CalendarCheck, Minimize2, TrendingUp,
  Scissors, Stethoscope, Dumbbell, Sparkles, Heart, Building, GraduationCap,
  BarChart3, Timer, Calendar, MapPin, Mail, PhoneCall, Utensils, CheckCircle2
} from "lucide-react";

const services = [
  { icon: MessageSquare, title: "AI Chatbot", desc: "Engage visitors 24/7 with intelligent website chatbots that convert browsers into leads." },
  { icon: Phone, title: "WhatsApp Automation", desc: "Auto-respond to WhatsApp messages and nurture leads without lifting a finger." },
  { icon: Globe, title: "Lead Generation Websites", desc: "High-converting landing pages designed to capture enquiries and drive action." },
  { icon: PhoneOff, title: "Missed Call Text Back", desc: "Never lose a lead — auto-text customers who call when you're unavailable." },
  { icon: Mic, title: "AI Voice Receptionist", desc: "An AI-powered phone system that answers, qualifies, and routes calls for you." },
  { icon: Settings, title: "CRM Automation", desc: "Automate your sales pipeline so no lead falls through the cracks." },
  { icon: Star, title: "Review Automation", desc: "Collect more 5-star reviews on autopilot and boost your online reputation." },
  { icon: RefreshCw, title: "Follow-up Automation", desc: "Automated email & SMS follow-ups that keep prospects engaged until they convert." },
];

const steps = [
  { num: "01", title: "We understand your business workflow", desc: "We map out your manual processes and identify exact automation opportunities." },
  { num: "02", title: "We implement AI automation systems", desc: "We deploy chatbots, CRM workflows, and WhatsApp automation seamlessly." },
  { num: "03", title: "You receive more enquiries and bookings automatically", desc: "Watch leads and customer engagement grow on autopilot 24/7." },
];

const benefits = [
  { icon: Zap, label: "More Leads" },
  { icon: Clock, label: "Faster Replies" },
  { icon: Bot, label: "24/7 Automation" },
  { icon: CalendarCheck, label: "More Bookings" },
  { icon: Minimize2, label: "Less Manual Work" },
  { icon: TrendingUp, label: "Higher Conversions" },
];

const industries = [
  { icon: Scissors, label: "Salons" },
  { icon: Heart, label: "Clinics" },
  { icon: Stethoscope, label: "Dentists" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: Sparkles, label: "Spas" },
  { icon: Building, label: "Real estate agents" },
  { icon: GraduationCap, label: "Coaching institutes" },
  { icon: MapPin, label: "Local service businesses" },
];

const caseStudies = [
  { 
    title: "Automation Demo Scenario", 
    tagline: "Local clinic enquiry automation simulation", 
    problem: "Customers asked repetitive questions about services and availability.",
    solution: "AI chatbot configured to respond instantly and capture enquiry details.",
    result: ["Faster response time", "Structured lead capture", "Reduced manual workload"]
  }
];

const whoHelps = [
  { label: "Local service businesses", icon: MapPin },
  { label: "Businesses receiving frequent customer enquiries", icon: MessageSquare },
  { label: "Businesses missing calls or messages", icon: PhoneOff },
  { label: "Businesses wanting more bookings", icon: Calendar },
  { label: "Businesses wanting automation but not technical complexity", icon: Bot },
];

const faqs = [
  { question: "What businesses can use AI automation?", answer: "Any service-based business that communicates with customers regularly can benefit." },
  { question: "Do I need technical knowledge?", answer: "No. We handle the complete setup." },
  { question: "How long does setup take?", answer: "Most systems are ready within 3–7 days." },
  { question: "Will AI replace staff?", answer: "No. AI assists staff by handling repetitive tasks." },
  { question: "Can AI reply to customers automatically?", answer: "Yes, AI can answer common questions instantly." },
  { question: "Is AI suitable for small businesses?", answer: "Yes, automation helps small businesses compete with larger companies." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-canvas py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container relative text-center max-w-3xl">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            Get More Leads and Customers Using{" "}
            <span className="text-primary">AI Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help businesses increase enquiries, bookings, and customer engagement using AI chatbots, WhatsApp automation, and smart workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="text-base px-8" onClick={() => trackEvent("audit_cta_click", { location: "hero" })}>
              <Link to="/free-audit">Get Free AI Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8" onClick={() => trackEvent("secondary_cta_click", { location: "hero" })}>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No technical knowledge required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Setup in days, not months</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Works for small businesses</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Who This Is For */}
    <section className="py-20 bg-card">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Who Quantrio Helps" subtitle="If your business receives regular customer enquiries but struggles to respond instantly, AI automation can significantly improve conversion rates." />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whoHelps.map((w, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-canvas rounded-xl p-6 text-center border border-black/[0.05] h-full flex flex-col items-center justify-center min-h-[140px]">
                <w.icon className="h-6 w-6 text-primary mb-3" />
                <span className="font-semibold text-sm leading-tight">{w.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-card" id="services">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Our Services" subtitle="End-to-end AI automation solutions tailored for local businesses." />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="bg-canvas rounded-xl p-6 hover:shadow-lg transition-shadow group h-full">
                <s.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                <Link to="/services" className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 bg-canvas">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="How It Works" subtitle="Three simple steps to transform your business." />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  {s.num}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Why Choose Quantrio?" subtitle="Real results for your business." />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-canvas">
                <b.icon className="h-8 w-8 text-primary mb-3" />
                <span className="font-medium text-sm">{b.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 bg-canvas">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Industries We Serve" subtitle="AI automation tailored for your industry." />
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow">
                <ind.icon className="h-10 w-10 text-primary mb-3" />
                <span className="font-medium">{ind.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-20 bg-card">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Results That Speak" subtitle="See the impact AI automation has on businesses like yours." />
        </ScrollReveal>
        <div className="max-w-4xl mx-auto">
          {caseStudies.map((c, i) => (
            <ScrollReveal key={i} delay={150}>
              <div className="bg-canvas rounded-xl p-8 border border-black/[0.05]">
                <div className="flex items-center gap-2 text-primary font-medium mb-2 text-sm uppercase tracking-wider">
                  <Star className="w-4 h-4" /> {c.tagline}
                </div>
                <h3 className="text-2xl font-bold mb-6">{c.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-destructive mb-1">Problem</h4>
                      <p className="text-muted-foreground text-sm">{c.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Solution</h4>
                      <p className="text-muted-foreground text-sm">{c.solution}</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Result</h4>
                    <ul className="space-y-3">
                      {c.result.map(res => (
                        <li key={res} className="flex items-start text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Sample implementation scenario</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Primary Offer */}
    <section className="py-20 bg-primary/5 text-center">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <SectionHeading title="Start With a Free AI Automation Audit" subtitle="Discover where your business can save time and capture more leads using AI automation. We analyze how customers contact your business and identify automation opportunities." />
          
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            <div className="bg-canvas p-4 rounded-lg flex items-start gap-3 shadow-sm border border-black/[0.05]">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium pt-1">Identify repetitive tasks</span>
            </div>
            <div className="bg-canvas p-4 rounded-lg flex items-start gap-3 shadow-sm border border-black/[0.05]">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium pt-1">Find missed lead opportunities</span>
            </div>
            <div className="bg-canvas p-4 rounded-lg flex items-start gap-3 shadow-sm border border-black/[0.05]">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium pt-1">Recommend AI automation tools</span>
            </div>
            <div className="bg-canvas p-4 rounded-lg flex items-start gap-3 shadow-sm border border-black/[0.05]">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium pt-1">Estimate efficiency improvements</span>
            </div>
          </div>

          <Button asChild size="lg" className="text-base px-8" onClick={() => trackEvent("audit_cta_click", { location: "primary_offer" })}>
            <Link to="/free-audit">Get Free Audit</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-20 bg-canvas">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <SectionHeading title="Frequently Asked Questions" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>

    {/* Consultation CTA */}
    <section className="py-20 bg-primary text-primary-foreground" id="book">
      <div className="container text-center max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Ready to Automate Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Take the first step towards massive efficiency. Claim your free automation audit and let's find the bottlenecks restricting your growth.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-base px-8" onClick={() => trackEvent("audit_cta_click", { location: "bottom" })}>
            <Link to="/free-audit">Get Free Audit</Link>
          </Button>
          <div className="mt-8 flex items-center justify-center gap-6 opacity-80 text-sm">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Secure & reliable</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Free custom report</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Contact */}
    <section className="py-20 bg-canvas" id="contact">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Get In Touch" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-medium">Location</span>
              <p className="text-sm text-muted-foreground">Serving Worldwide</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <span className="font-medium">Email</span>
              <p className="text-sm text-muted-foreground">hello@quantrio.in</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PhoneCall className="h-6 w-6 text-primary" />
              <span className="font-medium">Phone</span>
              <p className="text-sm text-muted-foreground">+91 98XXX XXXXX</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
