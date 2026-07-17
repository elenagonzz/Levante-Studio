"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { SectionMark } from "@/components/layout/SectionMark";
import CTA from "@/components/ui/CTA";
import { CONTACT } from "@/lib/site";
import { EASE, DUR } from "@/lib/motion";

const contacts = [CONTACT.whatsapp, CONTACT.instagram];

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="border-t border-ink-12 py-[18vh] md:py-[22vh]"
    >
      <Container>
        <SectionMark vol="Contacto" index="08 / 08" />

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: DUR.slow, ease: EASE.outExpo }}
          className="t-hero mt-[10vh] max-w-[16ch] text-ink"
        >
          Construyamos algo que{" "}
          <span className="italic text-muted">merezca ser encontrado.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: DUR.slow, ease: EASE.outExpo, delay: 0.12 }}
          className="mt-[9vh] flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
        >
          <CTA href={CONTACT.whatsapp.href} external>
            Solicita tu diagnóstico
          </CTA>

          <ul className="flex flex-col gap-4 md:items-end">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group inline-flex items-baseline gap-3 text-ink-70 transition-colors hover:text-ink"
                >
                  <span className="t-eyebrow text-muted-soft">{c.label}</span>
                  <span className="nav-link t-body">{c.display}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
