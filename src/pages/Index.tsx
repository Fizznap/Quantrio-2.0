import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import Layout from "@/components/Layout";
import {
  MessageSquare, Phone, Globe, PhoneOff, Mic, Settings, Star, RefreshCw,
  ArrowRight, Zap, Clock, Bot, CalendarCheck, Minimize2, TrendingUp,
  Scissors, Stethoscope, Dumbbell, Sparkles, Heart, Building, GraduationCap,
  BarChart3, Timer, Calendar, MapPin, Mail, PhoneCall,
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
  { num: "01", title: "We Build Your Website", desc: "A high-converting, mobile-optimized site tailored to your business." },
  { num: "02", title: "We Connect AI Tools", desc: "Chatbots, automation, and CRM integrated seamlessly." },
  { num: "03", title: "You Get More Leads", desc: "Watch bookings, calls, and enquiries grow on autopilot." },
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
  { icon: Scissors, label: "Salon" },
  { icon: Stethoscope, label: "Dental Clinic" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Sparkles, label: "Spa" },
  { icon: Heart, label: "Clinic" },
  { icon: Building, label: "Real Estate" },
  { icon: GraduationCap, label: "Coaching Classes" },
];

const caseStudies = [
  { icon: BarChart3, metric: "3x", label: "More Enquiries", desc: "A local salon tripled their online enquiries within 60 days." },
  { icon: Timer, metric: "80%", label: "Faster Response", desc: "A dental clinic reduced response time from hours to seconds." },
  { icon: Calendar, metric: "2x", label: "More Appointments", desc: "A gym doubled their monthly bookings using AI follow-ups." },
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
          AI Automation That Brings You{" "}
          <span className="text-primary">More Customers</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We help businesses in Mira Bhayandar generate more leads, calls, and bookings using AI-powered systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/book">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-card" id="services">
      <div className="container">
        <SectionHeading title="Our Services" subtitle="End-to-end AI automation solutions tailored for local businesses." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-canvas rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <Link to="/services" className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="How It Works" subtitle="Three simple steps to transform your business." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                {s.num}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Why Choose Quantrio?" subtitle="Real results for your business." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center p-6 rounded-xl bg-canvas">
              <b.icon className="h-8 w-8 text-primary mb-3" />
              <span className="font-medium text-sm">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="Industries We Serve" subtitle="AI automation tailored for your industry." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((i) => (
            <div key={i.label} className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow">
              <i.icon className="h-10 w-10 text-primary mb-3" />
              <span className="font-medium">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Results That Speak" subtitle="See the impact AI automation has on businesses like yours." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((c) => (
            <div key={c.label} className="bg-canvas rounded-xl p-8 text-center">
              <c.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-primary mb-1">{c.metric}</div>
              <div className="font-semibold mb-2">{c.label}</div>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Consultation CTA */}
    <section className="py-20 bg-primary" id="book">
      <div className="container text-center">
        <SectionHeading
          title="Ready to Automate Your Business?"
          subtitle="Fill in the form and we'll get back to you within 24 hours."
          light
        />
        <ConsultationForm variant="dark" />
      </div>
    </section>

    {/* Contact */}
    <section className="py-20 bg-canvas" id="contact">
      <div className="container">
        <SectionHeading title="Get In Touch" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-medium">Location</span>
            <p className="text-sm text-muted-foreground">Mira Bhayandar, Maharashtra, India</p>
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
      </div>
    </section>
  </Layout>
);

export default Index;
