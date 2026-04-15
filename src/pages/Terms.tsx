import Layout from "@/components/Layout";

const TermsPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container max-w-3xl prose prose-sm">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Agreement to Terms</h2>
        <p className="text-muted-foreground mb-4">By accessing our website and using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Services</h2>
        <p className="text-muted-foreground mb-4">Quantrio provides AI automation services including but not limited to chatbot development, WhatsApp automation, lead generation websites, CRM automation, and related services as described on our website.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">Quantrio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-muted-foreground">For questions about these terms, contact us at hello@quantrio.in.</p>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
