"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";

const TEXT =
  "Creemos que el crecimiento nunca es una sola cosa. Se construye conectándolo todo — estrategia, marca, estructura y visibilidad — en un único sistema que se multiplica.";

const words = TEXT.split(" ");

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });

  return (
    <section
      id="manifiesto"
      ref={ref}
      className="border-t border-ink-12 py-[16vh]"
    >
      <Container>
        <SectionMark vol="Manifiesto" index="02 / 08" className="mb-[10vh]" />
        <p className="t-statement flex max-w-[26ch] flex-wrap text-ink">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </Container>
    </section>
  );
}
