"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";
import { EASE, DUR } from "@/lib/motion";

const STAGES = [
  {
    n: "01",
    title: "Auditoría",
    desc: "Miramos todo: web, visibilidad, datos y competencia. Un diagnóstico honesto del punto de partida.",
  },
  {
    n: "02",
    title: "Estrategia",
    desc: "Convertimos los hallazgos en un plan con prioridades claras y una hipótesis de crecimiento.",
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Ejecutamos el sistema: marca, web, contenido y automatizaciones que trabajan juntas.",
  },
  {
    n: "04",
    title: "Medición",
    desc: "Instrumentamos y observamos. Lo que no se mide no se puede mejorar.",
  },
  {
    n: "05",
    title: "Escala",
    desc: "Doblamos lo que funciona y descartamos lo que no. El sistema se compone mes a mes.",
  },
];

function Panel({ stage }: { stage: (typeof STAGES)[number] }) {
  return (
    <article className="w-[80vw] shrink-0 sm:w-[56vw] lg:w-[42vw]">
      <div className="flex items-baseline gap-5">
        <span className="t-eyebrow text-muted-soft">{stage.n}</span>
        <span className="h-px flex-1 bg-ink-12" />
      </div>
      <h3 className="t-statement mt-8 text-ink">{stage.title}</h3>
      <p className="t-lead mt-6 max-w-[36ch] text-ink-70">{stage.desc}</p>
    </article>
  );
}

export default function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      const desktop = mq.matches;
      setIsDesktop(desktop);
      if (desktop && trackRef.current) {
        setDistance(trackRef.current.scrollWidth - window.innerWidth);
      } else {
        setDistance(0);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => `${-distance * v}px`);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(
      STAGES.length - 1,
      Math.max(0, Math.floor(v * STAGES.length)),
    );
    setActive(i);
  });

  return (
    <section
      id="proceso"
      ref={wrapRef}
      className="relative border-t border-ink-12"
      style={isDesktop ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      {/* ---------- Desktop: pinned horizontal scroll ---------- */}
      <div className="hidden h-[100svh] flex-col md:sticky md:top-0 md:flex md:overflow-hidden">
        <Container className="pt-28 md:pt-32">
          <SectionMark vol="Proceso" index="05 / 08" />
          <p className="t-lead mt-8 max-w-[34ch] text-ink-70">
            Cinco fases, un mismo método. De la primera lectura a la escala.
          </p>
        </Container>

        <div className="flex flex-1 items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-[9vw] pl-[var(--spacing-gutter)] pr-[24vw] will-change-transform"
          >
            {STAGES.map((s) => (
              <Panel key={s.n} stage={s} />
            ))}
          </motion.div>
        </div>

        <Container className="pb-10 md:pb-14">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="t-eyebrow text-ink">
              Fase {STAGES[active].n} —{" "}
              <span className="text-muted">{STAGES[active].title}</span>
            </span>
            <span className="t-eyebrow text-muted-soft">
              {STAGES[active].n} / 05
            </span>
          </div>
          <div className="relative h-px w-full bg-ink-12">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 origin-left bg-ink"
            />
          </div>
        </Container>
      </div>

      {/* ---------- Mobile: vertical stack ---------- */}
      <div className="md:hidden">
        <Container className="py-[12vh]">
          <SectionMark vol="Proceso" index="05 / 08" />
          <p className="t-lead mt-8 mb-[8vh] max-w-[30ch] text-ink-70">
            Cinco fases, un mismo método. De la primera lectura a la escala.
          </p>
          <ul>
            {STAGES.map((s) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: DUR.slow, ease: EASE.outExpo }}
                className="border-t border-ink-12 py-10"
              >
                <div className="flex items-baseline gap-5">
                  <span className="t-eyebrow text-muted-soft">{s.n}</span>
                  <span className="h-px flex-1 bg-ink-12" />
                </div>
                <h3 className="t-statement mt-6 text-ink">{s.title}</h3>
                <p className="t-lead mt-4 max-w-[36ch] text-ink-70">{s.desc}</p>
              </motion.li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
