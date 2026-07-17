"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  MotionValue,
} from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";
import { EASE, DUR } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Estrategia",
    desc: "Antes de construir, entendemos el negocio: dónde crece, qué lo frena y qué decisión mueve la aguja.",
  },
  {
    n: "02",
    title: "Marca",
    desc: "Una identidad que se reconoce y se recuerda, coherente en cada punto de contacto.",
  },
  {
    n: "03",
    title: "Web",
    desc: "La estructura donde todo ocurre. Rápida, clara y pensada para convertir.",
  },
  {
    n: "04",
    title: "SEO",
    desc: "Que te encuentren quienes ya te buscan. Contenido y técnica al servicio de la intención.",
  },
  {
    n: "05",
    title: "Visibilidad en IA",
    desc: "Aparecer también cuando la respuesta la da una máquina. Optimización para motores generativos.",
  },
  {
    n: "06",
    title: "Automatización",
    desc: "El trabajo repetitivo, resuelto. Menos fricción y más tiempo para lo que importa.",
  },
  {
    n: "07",
    title: "Analítica",
    desc: "Medir lo que decide. Datos que se leen como decisiones, no como informes.",
  },
  {
    n: "08",
    title: "Crecimiento",
    desc: "Todo lo anterior, conectado, se compone. Un sistema que mejora cada mes.",
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // The dot fills once the progress line reaches this step.
  const at = index / (total - 1);
  const opacity = useTransform(progress, [at - 0.04, at], [0.25, 1]);
  const scale = useTransform(progress, [at - 0.04, at], [1, 1.35]);

  return (
    <motion.li
      variants={row}
      className="group relative border-b border-ink-12 py-9 pl-10 last:border-b-0 md:pl-16 md:py-11"
    >
      <motion.span
        style={{ opacity, scale }}
        className="absolute left-0 top-[3.15rem] h-2 w-2 -translate-x-1/2 rounded-full bg-ink md:top-[3.6rem]"
      />
      <div className="flex items-baseline gap-4">
        <span className="t-eyebrow text-muted-soft">{step.n}</span>
        <span className="h-px flex-1 bg-ink-12 opacity-0 transition-opacity duration-[var(--dur-base)] group-hover:opacity-100" />
      </div>
      <h3 className="t-serif mt-3 text-ink transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
        {step.title}
      </h3>
      <p className="t-body mt-3 max-w-[42ch] text-ink-70">{step.desc}</p>
    </motion.li>
  );
}

export default function System() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.6", "end 0.7"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="sistema"
      className="border-t border-ink-12 py-[12vh] md:py-[14vh]"
    >
      <Container>
        <SectionMark vol="El Sistema" index="03 / 08" />

        <div className="mt-[10vh] grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Sticky intro */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: DUR.slow, ease: EASE.outExpo }}
                className="t-statement max-w-[12ch] text-ink"
              >
                Ocho piezas,{" "}
                <span className="italic text-muted">un solo sistema.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: DUR.slow,
                  ease: EASE.outExpo,
                  delay: 0.1,
                }}
                className="t-body mt-8 max-w-[38ch] text-ink-70"
              >
                El crecimiento no llega por hacer una cosa muy bien, sino por
                conectarlas todas. Este es el orden en que lo construimos.
              </motion.p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
            <div ref={trackRef} className="relative">
              {/* Track + animated progress fill */}
              <div className="absolute left-0 top-0 h-full w-px bg-ink-12" />
              <motion.div
                style={{ scaleY }}
                className="absolute left-0 top-0 h-full w-px origin-top bg-ink"
              />

              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {STEPS.map((step, i) => (
                  <Step
                    key={step.n}
                    step={step}
                    index={i}
                    total={STEPS.length}
                    progress={scrollYProgress}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
