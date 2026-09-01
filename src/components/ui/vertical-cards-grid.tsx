import { Link, useNavigate } from "react-router-dom";
import {
  SwipeableCardStack,
  type SwipeableCard,
} from "@/components/ui/tinder-like-swipe";
import "./vertical-cards-grid.css";

/** Figma card set for “One Platform. Every High-Intent Vertical.” */
export const verticalCardItems: SwipeableCard[] = [
  {
    id: "auto-insurance",
    name: "Auto Insurance",
    to: "/verticals/auto-insurance",
    image: "/assets/vertical-cards/auto-insurance.webp",
    background: "#d7e584",
  },
  {
    id: "home-services",
    name: "Home Services",
    to: "/verticals",
    image: "/assets/vertical-cards/home-services.webp",
    background: "#ffebf1",
  },
  {
    id: "medical-insurance",
    name: "Medical Insurance",
    to: "/verticals/medicare-advantage",
    image: "/assets/vertical-cards/medical-insurance.webp",
    background: "#aaa0ec",
  },
  {
    id: "final-expense",
    name: "Final Expense",
    to: "/verticals/final-expense",
    image: "/assets/vertical-cards/final-expense.webp",
    background: "#7aecc8",
  },
  {
    id: "health-insurance",
    name: "Health Insurance",
    to: "/verticals/health-insurance",
    image: "/assets/vertical-cards/health-insurance.webp",
    background: "#f1a8ec",
  },
  {
    id: "life-insurance",
    name: "Life Insurance",
    to: "/verticals/life-insurance",
    image: "/assets/vertical-cards/life-insurance.webp",
    background: "#5eccdb",
  },
  {
    id: "home-security",
    name: "Home Security",
    to: "/verticals/home-security",
    image: "/assets/vertical-cards/home-security.webp",
    background: "#eb807b",
  },
];

type VerticalCardsGridProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export default function VerticalCardsGrid({
  title = "One Platform. Every High-Intent Vertical.",
  description = "Insurance is our specialty, but we buy media across performance-driven industries. Swipe the stack to browse.",
  ctaLabel = "Explore All Verticals",
  ctaTo = "/verticals",
}: VerticalCardsGridProps) {
  const navigate = useNavigate();

  return (
    <section className="vcg" aria-labelledby="vcg-heading">
      <span className="rocket-marker rocket-marker--c" data-rocket-marker />
      <span className="rocket-marker rocket-marker--end" data-rocket-marker />

      <header className="vcg__intro">
        <h2 id="vcg-heading" className="section-title section-title--md">
          {title}
        </h2>
        <p className="section-sub section-sub--sm">{description}</p>
      </header>

      <div className="vcg__stage">
        <div className="vcg__swipe">
          <SwipeableCardStack
            cards={verticalCardItems}
            borderRadius={16}
            onAccess={(card) => navigate(card.to)}
          />
        </div>

        <p className="vcg__hint" aria-hidden="true">
          Drag left or right to browse
        </p>
      </div>

      <div className="vcg__outro">
        <Link to={ctaTo} className="btn btn--purple">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
