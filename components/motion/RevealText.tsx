"use client";

import { motion } from "framer-motion";
import { EASE, DUR } from "@/lib/motion";

/**
 * Line-mask typographic reveal. Each line rises from behind a mask.
 * Pass an array of strings (one per visual line) for editorial control.
 */
export default function RevealText({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  once = true,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-mask">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "115%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, amount: 0.6 }}
            transition={{
              duration: DUR.slow,
              ease: EASE.outExpo,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
