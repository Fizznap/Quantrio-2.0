import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import { MapPin, Mail, PhoneCall } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="Contact Us" subtitle="Have a question? We'd love to hear from you." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-medium">Location</span>
            <p className="text-sm text-muted-foreground">Based in Mira Bhayandar, Maharashtra, India<br/>Serving worldwide</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            <span className="font-medium">Email</span>
            <p className="text-sm text-muted-foreground">hello@quantrio.com</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PhoneCall className="h-6 w-6 text-primary" />
            <span className="font-medium">Phone</span>
            <p className="text-sm text-muted-foreground">+91 98XXX XXXXX</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-card">
      <div className="container max-w-2xl">
        <h3 className="text-2xl font-bold text-center mb-8">Send Us a Message</h3>
        <ConsultationForm variant="light" />
      </div>
    </section>

  </Layout>
);

export default ContactPage;
