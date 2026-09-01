import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Target,
  Phone,
  Scale,
  House,
  Landmark,
  GraduationCap,
  Car,
} from "lucide-react";
import "./glassmorphism-trust-hero.css";

const VERTICALS = [
  { name: "Insurance", icon: Shield },
  { name: "Legal", icon: Scale },
  { name: "Home Services", icon: House },
  { name: "Finance", icon: Landmark },
  { name: "Education", icon: GraduationCap },
  { name: "Pay Per Call", icon: Phone },
  { name: "Auto", icon: Car },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="why-trust__stat">
      <span className="why-trust__stat-value">{value}</span>
      <span className="why-trust__stat-label">{label}</span>
    </div>
  );
}

export default function GlassmorphismTrustHero() {
  const loop = [...VERTICALS, ...VERTICALS, ...VERTICALS];

  return (
    <section className="why-trust" id="why" aria-labelledby="why-heading">
      <div className="why-trust__inner">
        <div className="why-trust__grid">
          <div className="why-trust__left">
            <div className="why-trust__fade why-trust__fade--1">
              <div className="why-trust__badge">
                Why work with us
                <Shield className="why-trust__badge-icon" size={14} />
              </div>
            </div>

            <h2 id="why-heading" className="why-trust__title why-trust__fade why-trust__fade--2">
              Built for buyers who need
              <br />
              <span className="why-trust__title-accent">the conversion to count</span>
            </h2>

            <p className="why-trust__sub why-trust__fade why-trust__fade--3">
              Quality monitoring, call-level tracking, filter control, and vertical depth.
              Those four things decide whether pay-per-call, CPL, and CPC campaigns scale or stall.
            </p>

            <div className="why-trust__ctas why-trust__fade why-trust__fade--4">
              <Link to="/contact?role=buyer" className="btn btn--purple why-trust__btn">
                Start a test campaign
                <ArrowRight size={16} />
              </Link>
              <Link to="/verticals" className="btn btn--mint why-trust__btn">
                Get vertical pricing
              </Link>
            </div>
          </div>

          <div className="why-trust__right">
            <div className="why-trust__card why-trust__fade why-trust__fade--5">
              <div className="why-trust__card-glow" aria-hidden="true" />
              <div className="why-trust__card-body">
                <div className="why-trust__lead">
                  <div className="why-trust__lead-icon">
                    <Target size={22} />
                  </div>
                  <div>
                    <div className="why-trust__lead-value">CPL + CPC</div>
                    <div className="why-trust__lead-label">Buying models on every campaign</div>
                  </div>
                </div>

                <div className="why-trust__meters">
                  <div className="why-trust__meter">
                    <div className="why-trust__meter-row">
                      <span>Geo, hours, exclusivity</span>
                      <span>Set in the brief</span>
                    </div>
                    <div className="why-trust__bar">
                      <span className="why-trust__bar-fill why-trust__bar-fill--wide" />
                    </div>
                  </div>
                  <div className="why-trust__meter">
                    <div className="why-trust__meter-row">
                      <span>Source-level monitoring</span>
                      <span>Cut when it slips</span>
                    </div>
                    <div className="why-trust__bar">
                      <span className="why-trust__bar-fill why-trust__bar-fill--mid" />
                    </div>
                  </div>
                </div>

                <div className="why-trust__rule" />

                <div className="why-trust__mini">
                  <StatItem value="Hybrid" label="Supply" />
                  <span className="why-trust__mini-div" />
                  <StatItem value="Tracked" label="Calls" />
                  <span className="why-trust__mini-div" />
                  <StatItem value="Verified" label="Conversions" />
                </div>

                <div className="why-trust__pills">
                  <span className="why-trust__pill">
                    <span className="why-trust__live">
                      <span className="why-trust__live-ping" />
                      <span className="why-trust__live-dot" />
                    </span>
                    Live demand
                  </span>
                  <span className="why-trust__pill">
                    <Shield size={12} />
                    TCPA-aware
                  </span>
                </div>
              </div>
            </div>

            <div className="why-trust__card why-trust__card--marquee why-trust__fade why-trust__fade--5">
              <h3 className="why-trust__marquee-title">Verticals with live buyer demand</h3>
              <div className="why-trust__marquee-mask">
                <div className="why-trust__marquee-track">
                  {loop.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={`${item.name}-${i}`} className="why-trust__brand">
                        <Icon size={22} />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
