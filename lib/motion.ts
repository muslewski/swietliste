/**
 * Reusable motion utilities.
 *
 * Most variants live inline in each example page so that each style "owns"
 * its motion language. The exports here are only the genuinely shared
 * primitives: easing curves and `viewport` defaults.
 */
import type { Variants, Transition } from "motion/react";

/** Easing curves — pick the one that matches the design language. */
export const ease = {
  /** Gentle deceleration (out-expo-ish). General-purpose, elegant. */
  outSmooth: [0.16, 1, 0.3, 1] as const,
  /** Brisk out-cubic. Snappier than outSmooth. */
  outCubic: [0.33, 1, 0.68, 1] as const,
  /** Hard linear-out for brutalist mechanical snap. */
  hardOut: [0.4, 0, 0.6, 1] as const,
  /** Slow luxury — Hermès runway. */
  luxury: [0.22, 1, 0.36, 1] as const,
};

/** Apple-ish spring used for bento tiles. */
export const appleSpring: Transition = {
  type: "spring",
  damping: 22,
  stiffness: 160,
  mass: 0.6,
};

/** Default viewport config — trigger early, never re-animate. */
export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

/** Generic vertical fade-up stagger (parent). */
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Generic fade-up item (child of stagger). */
export const fadeUp = (distance = 24, duration = 0.7): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration, ease: ease.outSmooth } },
});
