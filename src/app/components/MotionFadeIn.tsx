"use client";

import { ComponentProps, PropsWithChildren } from "react";
import { motion } from "motion/react";

type MotionFadeInProps = PropsWithChildren<
  {
    delay?: number;
    className?: string;
  } & Omit<ComponentProps<typeof motion.div>, "initial" | "whileInView" | "transition">
>;

export default function MotionFadeIn({ children, delay = 0, className = "", ...rest }: MotionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
