"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";
import { EASE, DUR } from "@/lib/motion";

const STATEMENTS = [
  {
    n: "01",
    lead: "Las agencias entregan piezas. Nosotros entregamos ",
    accent: "un sistema que se sostiene solo.",
  },
  {
    n: "02",
    lead: "Antes de hablar de diseño, hablamos de tu negocio. ",
    accent: "El resto son consecuencias.",
  },
  {
    n: "03",
    lead: "Que te encuentren dejó de ser suerte. ",
    accent: "Hoy es arquitectura.",
  },
];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.03 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

export default function WhyLevante() {
  return (
    <section
      id="por-que"
      className="border-t border-ink-12 py-[12vh] md:py-[14vh]"
    >
      <Container>
        <SectionMark vol="Por qué Levante" index="06 / 08" />

        <div className="mt-[6vh]">
          {STATEMENTS.map((s) => (
            <motion.div
              key={s.n}
              variants={group}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="grid grid-cols-1 items-start gap-6 border-t border-ink-12 py-[10vh] md:grid-cols-12 md:gap-8"
            >
              <motion.span
                variants={item}
                className="t-eyebrow text-muted-soft md:col-span-2"
              >
                {s.n} — 03
              </motion.span>
              <motion.p
                variants={item}
                className="t-statement max-w-[22ch] text-ink md:col-span-10"
              >
                {s.lead}
                <span className="italic text-muted">{s.accent}</span>
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
