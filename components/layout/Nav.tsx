"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 320); // hide on scroll-down, reveal on up
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-colors duration-[var(--dur-base)] ${
          scrolled
            ? "border-b border-ink-12 bg-sand/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[112rem] items-center justify-between px-[var(--spacing-gutter)] py-5">
          <Logo />

          <ul className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link t-eyebrow text-ink-70 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/growth-assessment"
            data-cursor="hover"
            className="t-eyebrow rounded-full border border-ink-30 px-5 py-2.5 text-ink transition-colors duration-[var(--dur-base)] hover:bg-ink hover:text-sand"
          >
            Solicita diagnóstico
          </Link>
        </nav>
      </div>
    </header>
  );
}
