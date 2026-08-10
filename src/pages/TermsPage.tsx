import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import "@/pages/pages.css";

export default function TermsPage() {
  return (
    <main>
      <Seo
        title="Terms & Conditions"
        description="Terms & Conditions for RidgeRise Media publishers and buyers using our pay-per-call platform."
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern use of the RidgeRise Media website and network. Final legal language should be reviewed by counsel before production launch."
      />
      <section className="inner-section">
        <div className="prose">
          <h2>Platform use</h2>
          <p>
            Publishers and buyers agree to use RidgeRise Media for lawful,
            compliant pay-per-call campaigns and to follow TCPA, DNC, and
            vertical-specific requirements.
          </p>
          <h2>Accounts &amp; campaigns</h2>
          <p>
            Access may be limited or suspended for quality, compliance, or
            payment issues. Campaign terms, payouts, and filters are confirmed
            before traffic goes live.
          </p>
          <h2>Questions</h2>
          <p>
            Reach our team via the <Link to="/contact">contact page</Link> for
            partnership or terms questions.
          </p>
        </div>
      </section>
    </main>
  );
}
