/** Single source of truth for brand + SEO metadata. */

export const SITE = {
  name: "Levante Studio Co.",
  shortName: "Levante",
  tagline: "Sistemas de Crecimiento Digital",
  url: "https://levantestudio.co",
  description:
    "Levante Studio Co. diseña sistemas completos de crecimiento digital — estrategia, marca, web, SEO, visibilidad en IA y automatización — para negocios con ambición.",
  locale: "es",
  sameAs: ["https://instagram.com/levantestudio.co"] as string[],
};

const WA_MESSAGE =
  "Hola Levante, me gustaría solicitar un diagnóstico de crecimiento.";

export const CONTACT = {
  whatsapp: {
    label: "WhatsApp",
    display: "+34 601 109 667",
    number: "+34601109667",
    href: `https://wa.me/34601109667?text=${encodeURIComponent(WA_MESSAGE)}`,
  },
  instagram: {
    label: "Instagram",
    display: "@levantestudio.co",
    href: "https://instagram.com/levantestudio.co",
  },
};

export const NAV = [
  { label: "El Sistema", href: "/#sistema" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Diagnóstico", href: "/growth-assessment" },
] as const;

export const ROUTES = [
  { path: "/", label: "Inicio" },
  { path: "/growth-assessment", label: "Diagnóstico de Crecimiento" },
  { path: "/case-studies", label: "Casos" },
  { path: "/insights", label: "Ideas" },
  { path: "/about", label: "Estudio" },
  { path: "/#contacto", label: "Contacto" },
] as const;
