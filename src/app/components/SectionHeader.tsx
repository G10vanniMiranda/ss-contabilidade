"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = "center", className = "" }: SectionHeaderProps) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col ${alignment} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
