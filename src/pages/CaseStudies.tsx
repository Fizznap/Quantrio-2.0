import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Timer, Calendar, TrendingUp, ArrowRight } from "lucide-react";

const studies = [
  { icon: BarChart3, title: "Local Salon — 3x More Enquiries", metric: "3x", desc: "By implementing an AI chatbot and WhatsApp automation, a salon tripled their monthly enquiries within 60 days.", tags: ["AI Chatbot", "WhatsApp"] },
  { icon: Timer, title: "Dental Clinic — 80% Faster Response", metric: "80%", desc: "A dental clinic reduced their average response time from 3 hours to under 30 seconds using our missed call text-back and chatbot system.", tags: ["Missed Call", "Chatbot"] },
  { icon: Calendar, title: "Gym — 2x More Bookings", metric: "2x", desc: "Automated follow-up sequences and a lead generation website helped a local gym double their monthly trial bookings.", tags: ["Follow-ups", "Website"] },
  { icon: TrendingUp, title: "Real Estate — 150% More Leads", metric: "150%", desc: "A real estate agent captured 150% more leads through a combination of a high-converting website and CRM automation.", tags: ["CRM", "Lead Gen"] },
];

const CaseStudiesPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="Case Studies" subtitle="Real results from real businesses using Quantrio's AI automation." />
      </div>
    </section>
    <section className="py-16 bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {studies.map((s) => (
          <div key={s.title} className="bg-canvas rounded-xl p-8">
            <s.icon className="h-8 w-8 text-primary mb-3" />
            <div className="text-3xl font-extrabold text-primary mb-1">{s.metric}</div>
            <h3 className="font-bold text-lg mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {s.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="py-16 bg-primary text-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Want Results Like These?</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/book">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default CaseStudiesPage;
