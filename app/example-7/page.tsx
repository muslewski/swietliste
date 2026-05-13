"use client";
/* eslint-disable @next/next/no-img-element */
import { motion, type Variants } from "motion/react";
import { viewportOnce } from "@/lib/motion";
import { MotionAccordionItem } from "@/lib/motion-faq";
import { CountUp, parseStatValue } from "@/lib/count-up";
import {
  brand,
  aboutBlocks,
  featuredStories,
  services,
  heroImages,
  testimonials,
  stats,
  processSteps,
  faq,
  deliverables,
  pressBadges,
} from "@/lib/content";

// Brutalism = no easing softness. Hard tween, mechanical snap.
const snapListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const snapInV: Variants = {
  hidden: { opacity: 0, x: -16, y: -16 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.18, ease: "linear" } },
};
const stampV: Variants = {
  hidden: { opacity: 0, scale: 1.4, rotate: -8 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.18, ease: "linear" } },
};

/**
 * Example 7 — Neo-Brutalism Playful (v3 — responsive pass)
 * Mobile fixes: overflow-x-hidden on main, smaller display type, scaled-down
 * hard-offset shadows and rotations under sm:, padding tuned for 375px.
 */
const ACCENT = "#FF6B6B";
const YELLOW = "#FFD93D";

// Responsive shadow utilities — small on mobile, fuller on desktop
const SHADOW_SM = "shadow-[3px_3px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]";
const SHADOW_MD = "shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000]";
const SHADOW_LG = "shadow-[5px_5px_0_0_#000] sm:shadow-[10px_10px_0_0_#000]";

export default function Example7Page() {
  return (
    <main className="min-h-dvh overflow-x-hidden font-grotesk text-black" style={{ background: "#FFFDF5" }}>
      <header className="border-b-4 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="text-base font-black uppercase tracking-tight sm:text-lg">Świetliste*</div>
          <a
            href={`tel:${brand.phoneDigits}`}
            className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider hover:underline sm:text-xs"
          >
            {brand.phone}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={snapListV}
            className="grid items-center gap-8 sm:gap-10 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <motion.span
                variants={stampV}
                className={`inline-block -rotate-1 border-4 border-black px-2 py-1 text-[10px] font-black uppercase tracking-wider sm:px-3 sm:text-xs ${SHADOW_SM}`}
                style={{ background: YELLOW }}
              >
                ★ Fotografujemy emocje — od 2010
              </motion.span>
              <motion.h1
                variants={snapInV}
                className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:mt-6 sm:text-6xl md:text-7xl lg:text-[112px]"
              >
                Wasz ślub.
                <br />
                <span className="inline-block px-2 py-1 leading-[0.9]" style={{ background: ACCENT }}>
                  Bez
                </span>{" "}
                pozowania.
              </motion.h1>
              <motion.p variants={snapInV} className="mt-6 max-w-xl text-base font-medium sm:mt-8 sm:text-lg">
                Reporterska fotografia ślubna z Osielska. Czuła, prawdziwa,
                opowiedziana światłem i drobiazgami. Bez sztywnych pozowanek.
              </motion.p>
              <motion.div
                variants={snapInV}
                className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
              >
                <a
                  href={`mailto:${brand.email}`}
                  className={`inline-block border-4 border-black bg-black px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:px-7 sm:py-4 sm:text-sm shadow-[3px_3px_0_0_${ACCENT}] sm:shadow-[6px_6px_0_0_${ACCENT}]`}
                  style={{ boxShadow: "3px 3px 0 0 " + ACCENT }}
                >
                  Sprawdź termin →
                </a>
                <a
                  href="#historie"
                  className={`inline-block border-4 border-black bg-white px-5 py-3 text-xs font-black uppercase tracking-wider transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:px-7 sm:py-4 sm:text-sm ${SHADOW_SM}`}
                >
                  Zobacz pracę
                </a>
              </motion.div>
            </div>

            <motion.div variants={stampV} className="md:col-span-5">
              <div className={`relative rotate-1 border-4 border-black bg-white sm:rotate-2 ${SHADOW_LG}`}>
                <img src={heroImages[0]} alt="Świetliste sesja" className="aspect-[4/5] w-full object-cover" />
                <div
                  className="absolute -bottom-2 -right-2 border-4 border-black px-2 py-1 text-[10px] font-black uppercase text-black sm:-bottom-3 sm:-right-3 sm:px-3 sm:text-xs"
                  style={{ background: YELLOW }}
                >
                  PLATE 001
                </div>
                <div
                  className={`absolute -left-2 top-4 -rotate-6 border-4 border-black px-2 py-1 text-[10px] font-black uppercase sm:-left-4 sm:top-6 sm:px-3 sm:py-2 sm:text-xs ${SHADOW_SM}`}
                  style={{ background: YELLOW }}
                >
                  ★★★★★ 5.0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-b-4 border-black" style={{ background: ACCENT }}>
        <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap py-3 text-lg font-black uppercase tracking-tight text-white sm:py-4 sm:text-2xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-6 sm:px-8">
              ★ Reportaże ślubne ★ Sesje narzeczeńskie ★ Plenery ślubne ★ Fotoksiążki ★ Albumy z pergaminem ★
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* STATS — bold blocks */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {stats.map((s, i) => {
              const { num, suffix } = parseStatValue(s.value);
              return (
                <li
                  key={s.label}
                  className={`border-4 border-black p-4 transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:p-5 ${SHADOW_SM}`}
                  style={{
                    background: i % 2 === 0 ? YELLOW : ACCENT,
                    transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                  }}
                >
                  <p className="text-3xl font-black tracking-tight sm:text-5xl">
                    <CountUp to={num} suffix={suffix} duration={1.6} />
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-wider sm:text-xs">{s.label}</p>
                  <p className="mt-1 text-[10px] font-bold sm:text-[11px]">{s.note}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">Dlaczego my?</h2>
          <ul className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {aboutBlocks.map((b, i) => (
              <li
                key={b.heading}
                className={`border-4 border-black p-5 transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:p-6 ${SHADOW_MD}`}
                style={{ background: [YELLOW, "#FFFFFF", ACCENT][i] }}
              >
                <p className="text-xs font-black uppercase tracking-wider">0{i + 1} ·</p>
                <h3 className="mt-3 text-xl font-black uppercase leading-tight tracking-tight sm:text-2xl">
                  {b.heading}
                </h3>
                <p className="mt-3 text-sm font-medium leading-snug sm:mt-4 sm:text-base">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS — numbered tickets */}
      <section className="border-b-4 border-black" style={{ background: "#F0EBE0" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
              Jak<br />pracujemy?
            </h2>
            <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-wider sm:text-xs">04 etapy ↓</p>
          </div>
          <ol className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <li
                key={p.step}
                className={`border-4 border-black bg-white transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${SHADOW_MD}`}
                style={{ transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}
              >
                <div
                  className="border-b-4 border-black px-4 py-2 sm:px-5"
                  style={{ background: i % 2 === 0 ? ACCENT : YELLOW }}
                >
                  <p className="text-xs font-black uppercase tracking-wider">ETAP {p.step}</p>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-xl font-black uppercase leading-tight sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories */}
      <section id="historie" className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">Prace</h2>
            <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-wider sm:text-xs">
              06 historii ↓
            </p>
          </div>
          <motion.ul
            variants={snapListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={snapInV}>
                <article
                  className={`border-4 border-black bg-white transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${SHADOW_MD}`}
                  style={{ transform: i % 3 === 1 ? "rotate(0.5deg)" : "rotate(-0.5deg)" }}
                >
                  <div className="border-b-4 border-black">
                    <img src={s.image} alt={s.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-wider" style={{ color: ACCENT }}>
                        {s.style}
                      </p>
                      <p className="text-xs font-bold">#{String(i + 1).padStart(2, "0")}</p>
                    </div>
                    <h3 className="mt-2 text-xl font-black uppercase leading-tight sm:text-2xl">{s.couple}</h3>
                    <p className="mt-2 text-sm font-medium">{s.blurb}</p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-stone-500 sm:text-xs">
                      ↳ {s.venue}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* TESTIMONIALS — sticky note cards rotated */}
      <section className="border-b-4 border-black" style={{ background: ACCENT }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Co mówią pary?
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <li
                key={t.author}
                className={`border-4 border-black p-5 transition hover:rotate-0 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:p-6 ${SHADOW_MD}`}
                style={{
                  background: [YELLOW, "#FFFFFF", YELLOW, "#FFFFFF", YELLOW, "#FFFFFF"][i],
                  // Smaller rotations on mobile to prevent edge clipping
                  transform: `rotate(${[1, -1, 0.5, -0.5, 1, -1][i]}deg)`,
                }}
              >
                <p className="text-base font-black leading-snug sm:text-xl">„{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3 border-t-2 border-black pt-3 sm:mt-5 sm:pt-4">
                  <div className="size-9 shrink-0 overflow-hidden border-2 border-black sm:size-10">
                    <img src={t.image} alt="" className="size-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-black uppercase sm:text-sm">— {t.author}</p>
                    <p className="truncate text-[10px] font-bold uppercase tracking-wider">{t.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MID CTA BANNER */}
      <section className="border-b-4 border-black bg-black">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-wider" style={{ color: YELLOW }}>
                ★ promo ślubny ★
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-5xl">
                Pakiet{" "}
                <span style={{ background: ACCENT, color: "#000" }} className="inline-block px-2">
                  od 2699 zł
                </span>
                .<br className="md:hidden" /> Zarezerwujcie!
              </p>
            </div>
            <a
              href={`mailto:${brand.email}`}
              className={`whitespace-nowrap border-4 border-white bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:px-8 sm:py-4 sm:text-sm shadow-[3px_3px_0_0_${ACCENT}] sm:shadow-[6px_6px_0_0_${ACCENT}]`}
              style={{ boxShadow: "3px 3px 0 0 " + ACCENT }}
            >
              Napisz →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b-4 border-black" style={{ background: YELLOW }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">Oferta. Czyli co?</h2>
          <p className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">{brand.pricing.label.toUpperCase()}</p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 md:grid-cols-2">
            {services.map((sv, i) => (
              <li
                key={sv.slug}
                className={`flex items-start justify-between gap-3 border-4 border-black bg-white p-4 transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:gap-4 sm:p-5 ${SHADOW_SM}`}
              >
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-wider" style={{ color: ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-black uppercase leading-tight sm:text-xl">{sv.title}</h3>
                  <p className="mt-1 text-sm font-medium">{sv.hint}</p>
                </div>
                <span className="shrink-0 text-2xl font-black">→</span>
              </li>
            ))}
          </ul>

          {/* Deliverables */}
          <div className={`mt-10 border-4 border-black bg-white p-5 sm:mt-12 sm:p-6 ${SHADOW_MD}`}>
            <p className="text-xs font-black uppercase tracking-wider">CO DOSTAJECIE</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {deliverables.map((d) => (
                <li key={d.title} className="border-2 border-black p-3">
                  <h4 className="text-sm font-black uppercase leading-tight sm:text-base">{d.title}</h4>
                  <p className="mt-1 text-xs font-medium">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — toggle color blocks */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">FAQ. Pytania.</h2>
          <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
            {faq.map((f, i) => (
              <li
                key={f.q}
                className={`border-4 border-black ${SHADOW_SM}`}
                style={{ background: [YELLOW, ACCENT, YELLOW, ACCENT, "#FFFFFF"][i] }}
              >
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-3 p-4 sm:gap-4 sm:p-5">
                      <h3 className="text-base font-black uppercase leading-tight sm:text-xl md:text-2xl">
                        Q{String(i + 1).padStart(2, "0")} — {f.q}
                      </h3>
                      <span
                        aria-hidden
                        className={`shrink-0 text-2xl font-black transition duration-300 sm:text-3xl ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </div>
                  )}
                >
                  <p className="border-t-2 border-black p-4 text-sm font-medium leading-relaxed sm:p-5">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="text-center text-xs font-black uppercase tracking-wider">★ POLECANI PRZEZ ★</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-black uppercase sm:gap-x-8 sm:text-base">
            {pressBadges.map((p, i) => (
              <li
                key={p.label}
                className="border-2 border-black px-3 py-1"
                style={{ background: i % 2 === 0 ? YELLOW : ACCENT }}
              >
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            Napisz.
            <br />
            <span style={{ background: ACCENT }} className="inline-block px-2 leading-[0.9] text-black sm:px-3">
              Już dziś.
            </span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3">
            {[
              { label: "TEL", value: brand.phone, href: `tel:${brand.phoneDigits}`, bg: YELLOW },
              { label: "MAIL", value: brand.email, href: `mailto:${brand.email}`, bg: "#FFFFFF" },
              { label: "GDZIE", value: brand.address.line2, href: brand.social.maps, bg: ACCENT },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="block border-4 border-white p-4 text-left text-black transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none shadow-[3px_3px_0_0_#fff] sm:shadow-[6px_6px_0_0_#fff]"
                style={{ background: c.bg }}
              >
                <p className="text-xs font-black uppercase tracking-wider">{c.label}</p>
                <p className="mt-1 break-words text-sm font-bold sm:text-base">{c.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs font-bold uppercase tracking-wider text-stone-400 sm:mt-12">
            * = Świetliste, fotografujemy emocje, est. 2010
          </p>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-[10px] font-black uppercase tracking-wider sm:gap-3 sm:px-6 sm:py-6 sm:text-xs md:flex-row">
          <span>© {new Date().getFullYear()} Świetliste*</span>
          <span style={{ color: ACCENT }}>★ fotografujemy emocje ★</span>
          <span>est. 2010 · Osielsko</span>
        </div>
      </footer>
    </main>
  );
}
