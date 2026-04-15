import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare, Phone, Globe, PhoneOff, Mic, Settings, Star, RefreshCw, ArrowRight,
} from "lucide-react";

const services = [
  { icon: MessageSquare, title: "AI Chatbot for Website", desc: "Engage every visitor with a smart chatbot that answers questions, qualifies leads, and books appointments — all without human intervention. Works 24/7 so you never miss an opportunity.", cta: "Get a Chatbot" },
  { icon: Phone, title: "WhatsApp Automation", desc: "Auto-respond to messages on WhatsApp, send follow-ups, share offers, and keep customers engaged through the platform they already use every day.", cta: "Automate WhatsApp" },
  { icon: Globe, title: "Lead Generation Websites", desc: "We design high-converting, mobile-first websites that turn visitors into enquiries. Optimized for local SEO to attract nearby customers.", cta: "Get a Website" },
  { icon: PhoneOff, title: "Missed Call Text Back", desc: "When you can't answer the phone, our system instantly texts the caller back. Recover lost leads automatically.", cta: "Stop Missing Calls" },
  { icon: Mic, title: "AI Voice Receptionist", desc: "An intelligent voice system that answers calls, provides information, qualifies enquiries, and routes them to the right person.", cta: "Get AI Receptionist" },
  { icon: Settings, title: "CRM Automation", desc: "Automate your sales pipeline — from lead capture to follow-ups — so every prospect is nurtured and nothing slips through the cracks.", cta: "Automate Your CRM" },
  { icon: Star, title: "Review Automation", desc: "Automatically ask happy customers for reviews on Google. Build social proof and climb local search rankings effortlessly.", cta: "Get More Reviews" },
  { icon: RefreshCw, title: "Follow-up Automation", desc: "Automated email and SMS sequences that keep your prospects warm and engaged until they're ready to buy or book.", cta: "Automate Follow-ups" },
];

const ServicesPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="Our Services" subtitle="Comprehensive AI automation solutions to help your business grow on autopilot." />
      </div>
    </section>
    <section className="py-16 bg-card">
      <div className="container space-y-12">
        {services.map((s, i) => (
          <div key={s.title} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <s.icon className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-4 max-w-xl">{s.desc}</p>
              <Button asChild size="sm">
                <Link to="/book">{s.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
