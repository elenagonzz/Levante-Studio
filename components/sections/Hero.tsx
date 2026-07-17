"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import CTA from "@/components/ui/CTA";
import ArchBackdrop from "./ArchBackdrop";
import { EASE, DUR } from "@/lib/motion";

const headline = [
  { text: "No creamos webs.", italic: false, muted: false },
  { text: "Creamos sistemas de", italic: false, muted: false },
  { text: "crecimiento digital.", italic: true, muted: true },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-[8vh] pt-40">
      <ArchBackdrop />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.slow, ease: EASE.outExpo, delay: 0.15 }}
          className="mb-10 flex items-baseline justify-between"
        >
          <span className="t-eyebrow flex items-center gap-3 text-muted">
            <span className="inline-block h-px w-10 bg-muted-soft" />
            Sistemas de Crecimiento Digital
          </span>
          <span className="t-eyebrow hidden text-muted-soft sm:inline">
            MMXXVI
          </span>
        </motion.div>

        <h1 className="t-hero max-w-[18ch] text-ink">
          {headline.map((line, i) => (
            <span key={i} className="reveal-mask">
              <motion.span
                className={`block ${line.italic ? "italic" : ""} ${
                  line.muted ? "text-muted" : ""
                }`}
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: DUR.slow,
                  ease: EASE.outExpo,
                  delay: 0.3 + i * 0.09,
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.slow, ease: EASE.outExpo, delay: 0.85 }}
          className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="t-lead max-w-[44ch] text-ink-70">
            No vendemos webs, SEO ni publicidad. Diseñamos el sistema completo
            que hace que un negocio sea más fácil de encontrar, de creer y de
            elegir.
          </p>
          <CTA href="/growth-assessment">Solicita tu diagnóstico</CTA>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DUR.slow, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="t-eyebrow flex flex-col items-center gap-3 text-muted-soft">
          Desliza
          <span className="scroll-cue h-10 w-px bg-muted-soft" />
        </span>
      </motion.div>
    </section>
  );
}
