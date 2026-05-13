"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Smoothly counts from 0 to `to` once the element enters the viewport.
// SSR renders the target value (so no "0+" flash on first paint or for
// no-JS / search-engine views). On the client, if the element is above
// the fold the animation starts right away; if it's below, it waits for
// the user to scroll to it.
// Honors prefers-reduced-motion: just leaves the value at the target.
export function CountUp({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  // Initial state IS the target — SSR + hydration both render the right number,
  // so users with JS disabled (or before hydration) never see "0".
  const [n, setN] = useState(to);

  useEffect(() => {
    if (reduce) {
      setN(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const runAnimation = () => {
      setN(0);
      // Defer to next frame so the React commit for setN(0) flushes
      // before the animation's first onUpdate, keeping the count monotonic.
      const raf = requestAnimationFrame(() => {
        const controls = animate(0, to, {
          duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setN(Math.round(v)),
        });
        cleanup = () => controls.stop();
      });
      let cleanup: (() => void) | null = () => cancelAnimationFrame(raf);
      return () => cleanup?.();
    };

    // If already in viewport at mount → animate immediately.
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      return runAnimation();
    }

    // Otherwise wait until user scrolls element into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          runAnimation();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

// Parses a stat string like "300+" or "1 dzień" into { num, suffix }.
export function parseStatValue(raw: string): { num: number; suffix: string } {
  const match = /^(\d+)(.*)$/.exec(raw.trim());
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}
