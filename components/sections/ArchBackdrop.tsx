"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A soft architectural backdrop — a single Mediterranean arch drawn in
 * hairlines, parallaxing gently on scroll. Kept very faint so the
 * editorial typography leads. No gradients.
 */
export default function ArchBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yArch = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.svg
        style={{ y: yArch, opacity }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMax meet"
        className="absolute bottom-0 left-1/2 h-[82%] w-auto -translate-x-1/2 text-ink-12"
      >
        <path
          d="M150 600 V250 a250 250 0 0 1 500 0 V600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </motion.svg>
    </div>
  );
}
