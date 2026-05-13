"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the app in a single MotionConfig so that:
 * - `reducedMotion="user"` honors the OS-level prefers-reduced-motion setting
 *   globally (motion library replaces durations with 0 automatically)
 * - All transitions share the same default easing curve
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
