import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import System from "@/components/sections/System";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyLevante from "@/components/sections/WhyLevante";
import Assessment from "@/components/sections/Assessment";
import FinalCTA from "@/components/sections/FinalCTA";
import { SITE, CONTACT } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  slogan: SITE.tagline,
  sameAs: SITE.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.whatsapp.number,
    contactType: "sales",
    areaServed: "ES",
    availableLanguage: ["Spanish"],
  },
  knowsAbout: [
    "Estrategia de marca",
    "Diseño web",
    "SEO",
    "Generative Engine Optimization",
    "Visibilidad en IA",
    "Automatización",
    "Optimización de conversión",
    "Estrategia de crecimiento",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Manifesto />
      <System />
      <Services />
      <Process />
      <WhyLevante />
      <Assessment />
      <FinalCTA />
    </>
  );
}
