"use client";

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface GradientSectionProps extends PropsWithChildren {
    className?: string;
    lightColorClassName?: string; // e.g., "bg-blue-500/10"
    variant?: "base" | "dark" | "gradient"; // background style
    withDividerTop?: boolean;
    withDividerBottom?: boolean;
}

export default function GradientSection({
    children,
    className = "",
    lightColorClassName = "bg-blue-500/10",
    variant = "gradient",
    withDividerTop = false,
    withDividerBottom = false,
}: GradientSectionProps) {
    const baseBg = "bg-[#2A2A2A]";
    const darkBg = "bg-[#1E1E1E]";
    const gradientBg = "bg-gradient-to-br from-[#2A2A2A] via-[#1E1E1E] to-[#0A0A0A]";

    const variantClass = variant === "base" ? baseBg : variant === "dark" ? darkBg : gradientBg;

    return (
        <section className={`relative w-full ${variantClass} overflow-hidden ${className}`}>
            {withDividerTop && (
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent absolute top-0 left-0" />
            )}

            {children}

            {withDividerBottom && (
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent absolute bottom-0 left-0" />
            )}

            {/* Efeito de luz IA flutuante somente no gradiente */}
            {variant === "gradient" && (
                <motion.div
                    className={`pointer-events-none absolute -top-32 right-10 w-[400px] h-[400px] ${lightColorClassName} blur-[180px] rounded-full`}
                    animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            )}
        </section>
    );
}
