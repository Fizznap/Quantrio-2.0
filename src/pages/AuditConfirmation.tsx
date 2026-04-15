import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";

const AuditConfirmation = () => {
  useEffect(() => {
    trackEvent("audit_confirmation_view");
  }, []);

  return (
    <Layout>
      <div className="bg-canvas min-h-screen py-20 pb-32 flex flex-col items-center">
        <div className="container max-w-3xl text-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors self-start">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="bg-card border border-black/[0.05] shadow-sm rounded-2xl p-8 sm:p-12">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-extrabold mb-4">You're All Set!</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We are currently reviewing your automation opportunities based on the details you provided.
            </p>

            <div className="bg-canvas/50 border border-primary-foreground/10 rounded-xl p-8 mt-8">
              <h2 className="text-xl font-bold mb-2">Next Step: Claim Your Free Strategy Call</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Choose a convenient time below to go over your personalized AI automation report.
              </p>
              
              <div className="bg-canvas border border-dashed border-primary-foreground/20 rounded-lg w-full flex items-center justify-center min-h-[400px]">
                {/* Embed Calendly widget here */}
                {/* <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_LINK" style={{ minWidth: 320, height: 700 }} /> */}
                <div className="text-center p-8">
                  <p className="text-primary-foreground/70 mb-2">Integration placeholder for Calendly / Tidycal.</p>
                  <p className="text-xs text-primary-foreground/50">Replace this block with your booking widget embed code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuditConfirmation;
