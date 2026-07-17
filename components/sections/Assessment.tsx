"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark, RunningMark } from "@/components/layout/SectionMark";
import { EASE, DUR } from "@/lib/motion";

const ITEMS = [
  "Velocidad de carga",
  "Experiencia móvil",
  "Llamadas a la acción",
  "SEO local",
  "Google Business Profile",
  "Formularios",
  "Señales de confianza",
  "Flujo de conversión",
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

export default function Assessment() {
  return (
    <section
      id="diagnostico"
      className="border-t border-ink-12 py-[12vh] md:py-[14vh]"
    >
      <Container>
        <SectionMark vol="Diagnóstico" index="07 / 08" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: DUR.slow, ease: EASE.outExpo }}
          className="t-display mt-[10vh] mb-[12vh] max-w-[14ch] text-ink"
        >
          Qué <span className="italic text-muted">analizamos.</span>
        </motion.h2>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="border-b border-ink-12"
        >
          {ITEMS.map((item, i) => {
            const last = i === ITEMS.length - 1;
            return (
              <motion.li
                key={item}
                variants={row}
                style={{
                  paddingLeft: `calc(${i} * clamp(0.75rem, 2.6vw, 2.75rem))`,
                }}
                className="group flex items-center border-t border-ink-12 py-6 md:py-7"
              >
                <span
                  className={`t-serif inline-block transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 ${
                    last ? "italic text-muted" : "text-ink"
                  }`}
                >
                  {item}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>

        <RunningMark index="07 / 08" className="mt-[10vh]" />
      </Container>
    </section>
  );
}
