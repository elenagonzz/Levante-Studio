"use client";

import { ReactNode } from "react";
import MagneticButton from "@/components/motion/MagneticButton";

/**
 * The house CTA. Quiet, architectural. A pill with an ink fill that
 * wipes in on hover. Never aggressive.
 */
export default function CTA({
  children,
  href = "/growth-assessment",
  variant = "solid",
  external = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 t-eyebrow transition-colors duration-[var(--dur-base)]";

  const skin =
    variant === "solid"
      ? "bg-ink text-sand"
      : "border border-ink-30 text-ink hover:text-sand";

  return (
    <MagneticButton
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${skin} ${className}`}
    >
      {variant === "ghost" && (
        <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-ink transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
      )}
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
        →
      </span>
    </MagneticButton>
  );
}
