/**
 * Motion language for Levante Studio Co.
 * Everything expensive, nothing exaggerated. 200–600ms.
 */

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutQuart: [0.76, 0, 0.24, 1] as const,
  outQuint: [0.22, 1, 0.36, 1] as const,
};

export const DUR = {
  fast: 0.24,
  base: 0.4,
  slow: 0.6,
};

/** Soft fade + rise — the house entrance. */
export const fadeRise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

/** Stagger container for editorial groups. */
export const stagger = (delayChildren = 0, staggerChildren = 0.08) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

/** Line-mask reveal used for typographic entrances. */
export const lineReveal = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: DUR.slow, ease: EASE.outExpo },
  },
};

export const viewportOnce = { once: true, amount: 0.35 } as const;
