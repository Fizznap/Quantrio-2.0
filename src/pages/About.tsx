import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="About Quantrio" subtitle="We're on a mission to help local businesses thrive with AI automation." />
        <p className="text-muted-foreground leading-relaxed mb-8">
          Operating globally, Quantrio was founded with a simple belief — every business
          deserves access to the same powerful automation tools that big companies use. We specialize in building
          AI-powered systems that generate leads, automate customer communication, and increase bookings for
          salons, clinics, gyms, real estate agents, and more.
        </p>
      </div>
    </section>
    <section className="py-16 bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Target, title: "Our Mission", desc: "Make AI automation accessible and affordable for every local business." },
          { icon: Users, title: "Our Approach", desc: "We listen first, then build custom systems tailored to your business goals." },
          { icon: Lightbulb, title: "Our Vision", desc: "A future where no business loses a customer due to slow response or manual processes." },
        ].map((v) => (
          <div key={v.title} className="text-center p-6">
            <v.icon className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="py-16 bg-primary text-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Let's Grow Your Business Together</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/book">Book Free Consultation</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
