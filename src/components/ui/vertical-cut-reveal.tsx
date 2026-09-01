import { useReducedMotion, motion } from "motion/react";

type VerticalCutRevealProps = {
  children: string;
  splitBy?: "words" | "characters";
  staggerDuration?: number;
  staggerFrom?: "first" | "last";
  transition?: {
    type?: "spring" | "tween";
    stiffness?: number;
    damping?: number;
    delay?: number;
  };
  containerClassName?: string;
};

export function VerticalCutReveal({
  children,
  splitBy = "words",
  staggerDuration = 0.08,
  staggerFrom = "first",
  transition,
  containerClassName,
}: VerticalCutRevealProps) {
  const reduce = useReducedMotion();
  const units =
    splitBy === "characters" ? Array.from(children) : children.split(" ");

  if (reduce) {
    return <span className={containerClassName}>{children}</span>;
  }

  const count = units.length;

  return (
    <span className={containerClassName} aria-label={children}>
      {units.map((unit, index) => {
        const order = staggerFrom === "last" ? count - 1 - index : index;
        return (
          <span key={`${unit}-${index}`} className="vcr-word" aria-hidden="true">
            <motion.span
              className="vcr-word__inner"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                type: transition?.type ?? "spring",
                stiffness: transition?.stiffness ?? 250,
                damping: transition?.damping ?? 30,
                delay: (transition?.delay ?? 0.12) + order * staggerDuration,
              }}
            >
              {unit}
              {splitBy === "words" && index < units.length - 1 ? "\u00A0" : null}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
