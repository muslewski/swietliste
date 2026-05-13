"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";

/**
 * Headless accordion item with smooth height animation.
 *
 * Each example's FAQ has its own visual identity, so this component handles
 * just the state + animation primitives and lets the caller decide what the
 * trigger and content look like via render props / children.
 *
 * - Semantically a <button> trigger (keyboard/SR friendly out of the box)
 * - `aria-expanded` + `aria-controls` linked to the content panel
 * - Height animation uses motion's "auto" support, with overflow:hidden so
 *   the content clips cleanly while collapsing
 * - Opacity transition is delayed slightly so it doesn't fight the height
 */
export function MotionAccordionItem({
  trigger,
  children,
  initialOpen = false,
}: {
  trigger: (state: { isOpen: boolean }) => ReactNode;
  children: ReactNode;
  initialOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="block w-full cursor-pointer text-left"
      >
        {trigger({ isOpen })}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
