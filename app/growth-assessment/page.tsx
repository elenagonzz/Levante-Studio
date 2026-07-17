import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CTA from "@/components/ui/CTA";
import { SectionMark } from "@/components/layout/SectionMark";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diagnóstico de Crecimiento",
  description:
    "Una lectura precisa de cómo tu negocio se encuentra, se cree y se elige — y del sistema que lo cambiaría.",
  alternates: { canonical: "/growth-assessment" },
};

export default function GrowthAssessment() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center py-40">
      <Container>
        <SectionMark vol="Diagnóstico" index="03 / 08" className="mb-[10vh]" />
        <h1 className="t-display max-w-[16ch] text-ink">
          Una lectura de tu{" "}
          <span className="italic text-muted">visibilidad.</span>
        </h1>
        <p className="t-lead mt-10 max-w-[48ch] text-ink-70">
          Esta página está tomando forma. Contendrá el diagnóstico completo —
          web, SEO, GEO, Google Business, visibilidad en IA, automatización y
          una hoja de ruta.
        </p>
        <div className="mt-12">
          <CTA href={CONTACT.whatsapp.href} external>
            Solicita el tuyo
          </CTA>
        </div>
      </Container>
    </section>
  );
}
