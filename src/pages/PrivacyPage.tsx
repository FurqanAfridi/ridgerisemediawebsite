import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import "@/pages/pages.css";

export default function PrivacyPage() {
  return (
    <main>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for RidgeRise Media — how we collect, use, and protect information across our pay-per-call platform."
        path="/privacy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page outlines how RidgeRise Media handles information for publishers, buyers, and site visitors. Full policy copy can be finalized with counsel."
      />
      <section className="inner-section">
        <div className="prose">
          <h2>Overview</h2>
          <p>
            RidgeRise Media operates a pay-per-call network. We collect account,
            campaign, and contact details needed to match publishers and buyers,
            route live calls, and provide support.
          </p>
          <h2>Information we use</h2>
          <p>
            Business contact information, campaign preferences, call tracking
            metadata, and communications you send through our forms or email.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about privacy can be sent through our{" "}
            <Link to="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
