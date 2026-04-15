import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";

const BookPage = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <SectionHeading
          title="Book Your Free Consultation"
          subtitle="Tell us about your business and we'll show you how AI automation can help you grow."
          light
        />
        <ConsultationForm variant="dark" />
      </div>
    </section>
  </Layout>
);

export default BookPage;
