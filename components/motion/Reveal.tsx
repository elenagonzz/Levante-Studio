"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, DUR, viewportOnce } from "@/lib/motion";

/** Soft fade + rise on scroll-into-view. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  as?: "div" | "span" | "section" | "li" | "p";
  delay?: number;
  y?: number;
  className?: string;
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DUR.slow, ease: EASE.outExpo, delay }}
    >
      {children}
    </M>
  );
}
