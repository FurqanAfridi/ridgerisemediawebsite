import * as React from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { Check, X } from "lucide-react";
import "./tinder-like-swipe.css";

export type SwipeableCard = {
  id: string;
  background: string;
  image: string;
  name: string;
  to: string;
};

type SwipeableCardStackProps = {
  cards: SwipeableCard[];
  borderRadius?: number;
  showInnerShadows?: boolean;
  greenShadowColor?: string;
  redShadowColor?: string;
  onAccess?: (card: SwipeableCard) => void;
};

/**
 * Tinder-style swipe stack. Uses `motion` (already in the project) —
 * no Tailwind/shadcn required.
 */
export function SwipeableCardStack({
  cards: cardsProp,
  borderRadius = 16,
  showInnerShadows = true,
  greenShadowColor = "rgba(45, 150, 45, 0.55)",
  redShadowColor = "rgba(224, 83, 83, 0.55)",
  onAccess,
}: SwipeableCardStackProps) {
  const [cards, setCards] = React.useState<SwipeableCard[]>([...cardsProp]);
  const [dragDirections, setDragDirections] = React.useState<
    Record<string, "left" | "right" | null>
  >({});
  const swipeThreshold = 100;

  React.useEffect(() => {
    setCards([...cardsProp]);
    setDragDirections({});
  }, [cardsProp]);

  React.useEffect(() => {
    if (cardsProp.length > 0 && cards.length === 0) {
      const timer = window.setTimeout(() => {
        setCards([...cardsProp]);
        setDragDirections({});
      }, 900);
      return () => window.clearTimeout(timer);
    }
  }, [cards.length, cardsProp]);

  const handleDrag = (info: PanInfo, id: string) => {
    setDragDirections((prev) => ({
      ...prev,
      [id]: info.offset.x > 0 ? "right" : "left",
    }));
  };

  const handleDragEnd = (info: PanInfo, id: string) => {
    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? "right" : "left";
      setDragDirections((prev) => ({ ...prev, [id]: direction }));
      window.setTimeout(() => {
        setCards((prev) => prev.filter((card) => card.id !== id));
      }, 280);
    } else {
      setDragDirections((prev) => ({ ...prev, [id]: null }));
    }
  };

  return (
    <div className="swipe-stack">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTopCard = index === cards.length - 1;
          const direction = dragDirections[card.id];

          return (
            <motion.article
              key={card.id}
              className="swipe-stack__card"
              drag={isTopCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDrag={(_, info) => handleDrag(info, card.id)}
              onDragEnd={(_, info) => handleDragEnd(info, card.id)}
              custom={{ direction }}
              initial={{ scale: 0.94, y: 18, opacity: 0 }}
              animate={{
                scale: isTopCard ? 1 : 0.94 - (cards.length - 1 - index) * 0.02,
                y: isTopCard ? 0 : -14 - (cards.length - 1 - index) * 6,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit="exit"
              variants={{
                exit: (custom: { direction?: "left" | "right" | null }) => ({
                  x: (custom?.direction || "left") === "right" ? 340 : -340,
                  rotate: (custom?.direction || "left") === "right" ? 18 : -18,
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeIn" },
                }),
              }}
              style={{
                zIndex: index + 1,
                borderRadius,
                backgroundColor: card.background,
                cursor: isTopCard ? "grab" : "default",
              }}
              whileTap={isTopCard ? { cursor: "grabbing" } : undefined}
            >
              <div className="swipe-stack__media">
                <img
                  className="swipe-stack__img"
                  src={card.image}
                  alt=""
                  draggable={false}
                />
              </div>

              <div className="swipe-stack__body">
                <h3 className="swipe-stack__name">{card.name}</h3>
                <button
                  type="button"
                  className="swipe-stack__cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAccess?.(card);
                  }}
                >
                  Get Access
                </button>
              </div>

              {isTopCard && showInnerShadows ? (
                <div
                  className="swipe-stack__tint"
                  style={{
                    borderRadius,
                    boxShadow:
                      direction === "right"
                        ? `inset 0px -90px 70px ${greenShadowColor}`
                        : direction === "left"
                          ? `inset 0px -90px 70px ${redShadowColor}`
                          : "none",
                  }}
                  aria-hidden="true"
                />
              ) : null}

              {isTopCard && direction ? (
                <div
                  className={`swipe-stack__badge swipe-stack__badge--${direction}`}
                  aria-hidden="true"
                >
                  {direction === "right" ? (
                    <Check size={36} strokeWidth={2.5} />
                  ) : (
                    <X size={36} strokeWidth={2.5} />
                  )}
                </div>
              ) : null}
            </motion.article>
          );
        })}
      </AnimatePresence>

      {cards.length === 0 ? (
        <p className="swipe-stack__empty">Stack reset…</p>
      ) : null}
    </div>
  );
}
