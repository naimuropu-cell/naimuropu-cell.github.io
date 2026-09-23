import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  ...props
}: MotionRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 28 };
      case "down":
        return { opacity: 0, y: -28 };
      case "left":
        return { opacity: 0, x: -28 };
      case "right":
        return { opacity: 0, x: 28 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};
