import Layout from "@/components/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container max-w-3xl prose prose-sm">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <p className="text-muted-foreground mb-4">When you fill out a form on our website, we collect your name, email address, phone number, and business name. We use this information solely to respond to your enquiry and provide our services.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">We use the information you provide to contact you regarding our AI automation services, send relevant updates, and improve our offerings. We do not sell your information to third parties.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Data Security</h2>
        <p className="text-muted-foreground mb-4">We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>
        <p className="text-muted-foreground">If you have questions about this privacy policy, contact us at hello@quantrio.in.</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
