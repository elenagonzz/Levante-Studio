"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";
import { EASE, DUR } from "@/lib/motion";

const SERVICES = [
  {
    n: "01",
    lead: "Estrategia",
    accent: "de marca.",
    desc: "Definimos qué eres, para quién y por qué te eligen. La base sobre la que se sostiene todo lo demás.",
    caps: ["Posicionamiento", "Narrativa", "Identidad", "Tono de voz"],
  },
  {
    n: "02",
    lead: "Experiencia",
    accent: "digital.",
    desc: "Diseño y desarrollo de la web como producto: rápida, clara y pensada para convertir sin fricción.",
    caps: ["Diseño", "Desarrollo", "UX / UI", "Rendimiento"],
  },
  {
    n: "03",
    lead: "Posicionamiento",
    accent: "SEO.",
    desc: "Que te encuentren quienes ya te buscan. Arquitectura, contenido y autoridad al servicio de la intención.",
    caps: ["SEO técnico", "Contenido", "SEO local", "Autoridad"],
  },
  {
    n: "04",
    lead: "Visibilidad",
    accent: "en IA.",
    desc: "Optimización para motores generativos (GEO). Aparecer cuando la respuesta la da una IA, no solo un buscador.",
    caps: ["GEO", "Datos estructurados", "Fuentes citables", "Presencia en LLMs"],
  },
  {
    n: "05",
    lead: "Automatización",
    accent: "de procesos.",
    desc: "Conectamos herramientas y procesos para que el trabajo repetitivo ocurra solo. Menos fricción, más foco.",
    caps: ["Flujos de trabajo", "CRM", "Integraciones", "IA aplicada"],
  },
  {
    n: "06",
    lead: "Consultoría",
    accent: "de crecimiento.",
    desc: "Acompañamiento continuo: medimos, priorizamos y decidimos juntos qué mueve el negocio cada mes.",
    caps: ["Analítica", "Roadmap", "Experimentos", "Decisiones"],
  },
];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="border-t border-ink-12 py-[12vh] md:py-[14vh]"
    >
      <Container>
        <SectionMark vol="Servicios" index="04 / 08" />

        <p className="t-lead mt-[8vh] mb-[2vh] max-w-[38ch] text-ink-70">
          Seis disciplinas que rara vez conviven bajo un mismo techo. Aquí
          trabajan como una.
        </p>

        {SERVICES.map((s) => (
          <motion.article
            key={s.n}
            variants={group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group grid min-h-[72svh] grid-cols-1 items-center gap-10 border-t border-ink-12 py-[8vh] md:grid-cols-12"
          >
            {/* Meta + capabilities */}
            <motion.div variants={item} className="md:col-span-4">
              <span className="t-eyebrow text-muted-soft">{s.n} — 06</span>
              <ul className="mt-8 space-y-3 border-t border-ink-12 pt-6">
                {s.caps.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-ink-70">
                    <span className="h-px w-4 bg-ink-30" />
                    <span className="text-[0.95rem] tracking-tight">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Title + description */}
            <motion.div variants={item} className="md:col-span-8">
              <h3 className="t-display text-ink">
                {s.lead}{" "}
                <span className="italic text-muted">{s.accent}</span>
              </h3>
              <p className="t-lead mt-8 max-w-[46ch] text-ink-70">{s.desc}</p>
            </motion.div>
          </motion.article>
        ))}
      </Container>
    </section>
  );
}
