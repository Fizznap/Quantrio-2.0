import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";

const BookPage = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <SectionHeading
          title="Book Your Free Consultation"
          subtitle="Choose a convenient time and we will show how AI can automate your business."
          light
        />
        
        <div className="bg-canvas/5 border border-primary-foreground/10 rounded-xl p-8 mb-12 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          {/* This is where the Calendly inline embed widget will go. Example: */}
          {/* <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_LINK" style={{ minWidth: 320, height: 700 }} /> */}
          
          <div className="text-center p-8 border-2 border-dashed border-primary-foreground/20 rounded-lg w-full">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">Book a Time</h3>
            <p className="text-primary-foreground/70 mb-6">Integration placeholder for Calendly / Tidycal.</p>
            <p className="text-sm text-primary-foreground/50">Replace this block with your booking widget embed code.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto border-t border-primary-foreground/10 pt-12">
          <SectionHeading title="Or send us a message" subtitle="" light />
          <ConsultationForm variant="dark" />
        </div>
      </div>
    </section>
  </Layout>
);

export default BookPage;
