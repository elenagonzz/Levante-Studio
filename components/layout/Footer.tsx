import Link from "next/link";
import Container from "./Container";
import { SITE, ROUTES, CONTACT } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-12 bg-linen">
      <Container className="py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="t-eyebrow text-muted">Levante Studio Co.</p>
            <p className="t-statement mt-6">Hablemos.</p>
            <p className="t-body mt-6 max-w-[34ch] text-ink-70">
              Sistemas de crecimiento digital para negocios con ambición.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Mapa del sitio">
            <p className="t-eyebrow text-muted-soft">Índice</p>
            <ul className="mt-6 space-y-3">
              {ROUTES.map((r) => (
                <li key={r.path}>
                  <Link
                    href={r.path}
                    className="t-body text-ink-70 transition-colors hover:text-ink"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="t-eyebrow text-muted-soft">Contacto</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body text-ink-70 transition-colors hover:text-ink"
                >
                  WhatsApp — {CONTACT.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body text-ink-70 transition-colors hover:text-ink"
                >
                  Instagram — {CONTACT.instagram.display}
                </a>
              </li>
              <li className="t-body text-ink-70">Mediterráneo · En remoto</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-ink-12 pt-8 text-muted-soft md:flex-row">
          <p className="t-eyebrow">
            © {year} {SITE.name}
          </p>
          <p className="t-eyebrow">Sistemas de Crecimiento Digital</p>
        </div>
      </Container>
    </footer>
  );
}
