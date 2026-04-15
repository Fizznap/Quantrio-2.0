import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare, Phone, Globe, PhoneOff, Mic, Settings, Star, RefreshCw, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot for Website",
    problem: "Businesses lose leads when they cannot reply instantly.",
    solution: "AI chatbot responds 24/7 and captures customer details.",
    benefits: ["Instant replies", "More leads captured", "Better customer experience"],
    cta: "Book Consultation"
  },
  {
    icon: Phone,
    title: "WhatsApp Automation",
    problem: "Businesses manually reply to repetitive questions.",
    solution: "Automated WhatsApp responses and follow-ups.",
    benefits: ["Faster communication", "Less manual work", "Higher conversion rate"],
    cta: "Book Consultation"
  },
  {
    icon: Globe,
    title: "Lead Generation Websites",
    problem: "Many business websites do not convert visitors into enquiries.",
    solution: "Conversion-focused website designed for lead capture.",
    benefits: ["More enquiries", "Higher conversion rate", "Better online presence"],
    cta: "Book Consultation"
  },
  {
    icon: Mic,
    title: "AI Voice Receptionist",
    problem: "Missed calls result in lost customers.",
    solution: "AI answers calls and collects customer details.",
    benefits: ["No missed leads", "Professional communication", "24/7 availability"],
    cta: "Book Consultation"
  },
  {
    icon: Settings,
    title: "CRM Automation",
    problem: "Leads are not tracked properly.",
    solution: "Automated CRM pipeline.",
    benefits: ["Organized leads", "Better follow-ups", "Improved sales tracking"],
    cta: "Book Consultation"
  },
  {
    icon: Star,
    title: "Review Automation",
    problem: "Customers forget to leave reviews.",
    solution: "Automated review request system.",
    benefits: ["More Google reviews", "Better reputation", "Higher trust"],
    cta: "Book Consultation"
  },
  {
    icon: RefreshCw,
    title: "Follow-up Automation",
    problem: "Businesses forget to follow up with potential customers.",
    solution: "Automated reminder sequences.",
    benefits: ["Higher booking rate", "Improved customer engagement"],
    cta: "Book Consultation"
  }
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
          <div key={s.title} className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mt-2">
              <s.icon className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1 bg-canvas p-8 rounded-2xl shadow-sm border border-black/[0.05]">
              <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-destructive mb-1">Problem</h4>
                  <p className="text-muted-foreground text-sm">{s.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Solution</h4>
                  <p className="text-muted-foreground text-sm">{s.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button asChild>
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
