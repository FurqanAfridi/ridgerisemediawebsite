import { Children, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  /** Use scroll-triggered reveal instead of mount animate */
  inView?: boolean;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const defaultContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const defaultItem: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(16px)",
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 1.15,
    },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
  inView = false,
}: AnimatedGroupProps) {
  const reduce = useReducedMotion();
  const container = variants?.container ?? defaultContainer;
  const item = variants?.item ?? defaultItem;

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      {...(inView
        ? {
            whileInView: "visible",
            viewport: { once: true, amount: 0.25, margin: "0px 0px -8% 0px" },
          }
        : { animate: "visible" })}
      variants={container}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
