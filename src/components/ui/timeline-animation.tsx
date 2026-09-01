import type { CSSProperties, ElementType, ReactNode, RefObject } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type TimelineContentProps = {
  children?: ReactNode;
  as?: ElementType;
  animationNum: number;
  customVariants: Variants;
  timelineRef: RefObject<HTMLElement | null>;
  className?: string;
  style?: CSSProperties;
};

export function TimelineContent({
  children,
  as = "div",
  animationNum,
  customVariants,
  className,
  style,
}: TimelineContentProps) {
  const reduce = useReducedMotion();
  const Component = motion.create(as);

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      className={className}
      style={style}
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -8% 0px",
      }}
    >
      {children}
    </Component>
  );
}
