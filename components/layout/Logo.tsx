"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Brand logo. Uses /public/logo.png once present; gracefully falls back
 * to the serif wordmark if the file is missing (e.g. before upload).
 * The mount check catches a 404 that fires before React hydration.
 */
export default function Logo({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — inicio`}
      className={`inline-flex items-center ${className}`}
      data-cursor="hover"
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/logo-mark.png"
          alt={SITE.name}
          className="h-8 w-auto md:h-9"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-display text-[1.65rem] leading-none text-ink">
          Levante
          <span className="align-super text-[0.5em] text-muted">®</span>
        </span>
      )}
    </Link>
  );
}
