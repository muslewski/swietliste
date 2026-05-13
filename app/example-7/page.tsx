"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { viewportOnce } from "@/lib/motion";
import { MotionAccordionItem } from "@/lib/motion-faq";
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
 * Example 7 — Neo-Brutalism Playful (v2)
 * Cream paper, thick black borders, hard offset shadows, Space Grotesk.
 * Added: stats blocks with shadows, testimonials as rotated sticky-note cards,
 * process as numbered tickets, FAQ as toggleable color blocks, mid CTA banner.
 */
const ACCENT = "#FF6B6B";
const YELLOW = "#FFD93D";
const VIOLET = "#A78BFA";
const MINT = "#9FE2BF";

export default function Example7Page() {
  return (
    <main className="min-h-dvh font-grotesk text-black" style={{ background: "#FFFDF5" }}>
      <header className="border-b-4 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xs font-bold uppercase tracking-wider hover:underline">← examples</Link>
          <div className="text-lg font-black uppercase tracking-tight">Świetliste*</div>
          <a href={`tel:${brand.phoneDigits}`} className="text-xs font-bold uppercase tracking-wider hover:underline">{brand.phone}</a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial="hidden" animate="show" variants={snapListV}
            className="grid items-center gap-10 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <motion.span variants={stampV}
                className="inline-block -rotate-1 border-4 border-black px-3 py-1 text-xs font-black uppercase tracking-wider"
                style={{ background: YELLOW, boxShadow: "6px 6px 0 0 #000" }}
              >
                ★ Fotografujemy emocje — od 2010
              </motion.span>
              <motion.h1 variants={snapInV} className="mt-6 text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-[112px]">
                Wasz ślub.
                <br />
                <span className="inline-block px-2 py-1 leading-[0.9]" style={{ background: ACCENT }}>Bez</span>{" "}
                pozowania.
              </motion.h1>
              <motion.p variants={snapInV} className="mt-8 max-w-xl text-lg font-medium">
                Reporterska fotografia ślubna z Osielska. Czuła, prawdziwa,
                opowiedziana światłem i drobiazgami. Bez sztywnych pozowanek.
              </motion.p>
              <motion.div variants={snapInV} className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${brand.email}`}
                   className="inline-block border-4 border-black bg-black px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                   style={{ boxShadow: "6px 6px 0 0 " + ACCENT }}>
                  Sprawdź termin →
                </a>
                <a href="#historie"
                   className="inline-block border-4 border-black bg-white px-7 py-4 text-sm font-black uppercase tracking-wider transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                   style={{ boxShadow: "6px 6px 0 0 #000" }}>
                  Zobacz pracę
                </a>
              </motion.div>
            </div>

            <motion.div variants={stampV} className="md:col-span-5">
              <div className="relative rotate-2 border-4 border-black bg-white" style={{ boxShadow: "10px 10px 0 0 #000" }}>
                <img src={heroImages[0]} alt="Świetliste sesja" className="aspect-[4/5] w-full object-cover" />
                <div className="absolute -bottom-3 -right-3 border-4 border-black bg-black px-3 py-1 text-xs font-black uppercase text-white"
                     style={{ background: VIOLET }}>
                  PLATE 001
                </div>
                <div className="absolute -left-4 top-6 -rotate-6 border-4 border-black px-3 py-2 text-xs font-black uppercase"
                     style={{ background: YELLOW, boxShadow: "4px 4px 0 0 #000" }}>
                  ★★★★★ 5.0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-b-4 border-black overflow-hidden" style={{ background: ACCENT }}>
        <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap py-4 text-2xl font-black uppercase tracking-tight text-white">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8">
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
        <div className="mx-auto max-w-7xl px-6 py-12">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <li key={s.label}
                  className="border-4 border-black p-5 transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  style={{
                    background: [YELLOW, MINT, VIOLET, ACCENT][i],
                    boxShadow: "6px 6px 0 0 #000",
                    transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                  }}>
                <p className="text-5xl font-black tracking-tight">{s.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-wider">{s.label}</p>
                <p className="mt-1 text-[11px] font-bold">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl">Dlaczego my?</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutBlocks.map((b, i) => (
              <li key={b.heading}
                  className="border-4 border-black p-6 transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                  style={{ background: [YELLOW, "#FFFFFF", VIOLET][i], boxShadow: "8px 8px 0 0 #000" }}>
                <p className="text-xs font-black uppercase tracking-wider">0{i + 1} ·</p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight">{b.heading}</h3>
                <p className="mt-4 text-base font-medium leading-snug">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS — numbered tickets */}
      <section className="border-b-4 border-black" style={{ background: "#F0EBE0" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl">Jak<br />pracujemy?</h2>
            <p className="text-xs font-black uppercase tracking-wider">04 etapy ↓</p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <li key={p.step}
                  className="border-4 border-black bg-white transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                  style={{ boxShadow: "8px 8px 0 0 #000", transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}>
                <div className="border-b-4 border-black px-5 py-2" style={{ background: [ACCENT, YELLOW, VIOLET, MINT][i] }}>
                  <p className="text-xs font-black uppercase tracking-wider">ETAP {p.step}</p>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black uppercase leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories */}
      <section id="historie" className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl">Prace</h2>
            <p className="text-xs font-black uppercase tracking-wider">06 historii ↓</p>
          </div>
          <motion.ul
            variants={snapListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={snapInV}>
                <article className="border-4 border-black bg-white transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                         style={{ boxShadow: "8px 8px 0 0 #000", transform: i % 3 === 1 ? "rotate(1deg)" : "rotate(-1deg)" }}>
                  <div className="border-b-4 border-black">
                    <img src={s.image} alt={s.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-wider" style={{ color: ACCENT }}>{s.style}</p>
                      <p className="text-xs font-bold">#{String(i + 1).padStart(2, "0")}</p>
                    </div>
                    <h3 className="mt-2 text-2xl font-black uppercase leading-tight">{s.couple}</h3>
                    <p className="mt-2 text-sm font-medium">{s.blurb}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-stone-500">↳ {s.venue}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* TESTIMONIALS — sticky note cards rotated */}
      <section className="border-b-4 border-black" style={{ background: VIOLET }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-6xl">
            Co mówią pary?
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <li key={t.author}
                  className="border-4 border-black p-6 transition hover:rotate-0 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  style={{
                    background: [YELLOW, MINT, "#FFFFFF", ACCENT, YELLOW, MINT][i],
                    boxShadow: "8px 8px 0 0 #000",
                    transform: `rotate(${[2, -2, 1, -1, 2, -2][i]}deg)`,
                  }}>
                <p className="text-xl font-black leading-snug">„{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3 border-t-2 border-black pt-4">
                  <div className="size-10 overflow-hidden border-2 border-black">
                    <img src={t.image} alt="" className="size-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase">— {t.author}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider">{t.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MID CTA BANNER */}
      <section className="border-b-4 border-black bg-black">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-xs font-black uppercase tracking-wider" style={{ color: YELLOW }}>★ promo ślubny ★</p>
              <p className="mt-2 text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                Pakiet <span style={{ background: ACCENT, color: "#000" }} className="inline-block px-2">od 2699 zł</span>.
                <br className="md:hidden" /> Zarezerwujcie!
              </p>
            </div>
            <a href={`mailto:${brand.email}`}
               className="border-4 border-white bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
               style={{ boxShadow: "6px 6px 0 0 " + ACCENT }}>
              Napisz →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b-4 border-black" style={{ background: YELLOW }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl">Oferta. Czyli co?</h2>
          <p className="mt-4 text-lg font-bold">{brand.pricing.label.toUpperCase()}</p>
          <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map((sv, i) => (
              <li key={sv.slug}
                  className="flex items-start justify-between gap-4 border-4 border-black bg-white p-5 transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  style={{ boxShadow: "6px 6px 0 0 #000" }}>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-black uppercase leading-tight">{sv.title}</h3>
                  <p className="mt-1 text-sm font-medium">{sv.hint}</p>
                </div>
                <span className="text-2xl font-black">→</span>
              </li>
            ))}
          </ul>

          {/* Deliverables */}
          <div className="mt-12 border-4 border-black bg-white p-6" style={{ boxShadow: "8px 8px 0 0 #000" }}>
            <p className="text-xs font-black uppercase tracking-wider">CO DOSTAJECIE</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {deliverables.map((d) => (
                <li key={d.title} className="border-2 border-black p-3">
                  <h4 className="text-base font-black uppercase">{d.title}</h4>
                  <p className="mt-1 text-xs font-medium">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — toggle color blocks */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl">FAQ. Pytania.</h2>
          <ul className="mt-10 grid gap-4">
            {faq.map((f, i) => (
              <li key={f.q}
                  className="border-4 border-black"
                  style={{ background: [YELLOW, MINT, ACCENT, VIOLET, "#FFFFFF"][i], boxShadow: "6px 6px 0 0 #000" }}>
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-4 p-5">
                      <h3 className="text-xl font-black uppercase leading-tight md:text-2xl">
                        Q{String(i + 1).padStart(2, "0")} — {f.q}
                      </h3>
                      <span aria-hidden className={`text-3xl font-black transition duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </div>
                  )}
                >
                  <p className="border-t-2 border-black p-5 text-sm font-medium leading-relaxed">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-center text-xs font-black uppercase tracking-wider">★ POLECANI PRZEZ ★</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-base font-black uppercase">
            {pressBadges.map((p, i) => (
              <li key={p.label}
                  className="border-2 border-black px-3 py-1"
                  style={{ background: [YELLOW, MINT, VIOLET, ACCENT][i] }}>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-6xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
            Napisz.
            <br />
            <span style={{ background: ACCENT }} className="inline-block px-3 leading-[0.9] text-black">Już dziś.</span>
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { label: "TEL", value: brand.phone, href: `tel:${brand.phoneDigits}`, bg: YELLOW },
              { label: "MAIL", value: brand.email, href: `mailto:${brand.email}`, bg: VIOLET },
              { label: "GDZIE", value: brand.address.line2, href: brand.social.maps, bg: ACCENT },
            ].map((c) => (
              <a key={c.label} href={c.href}
                 className="block border-4 border-white p-4 text-left text-black transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                 style={{ background: c.bg, boxShadow: "6px 6px 0 0 #fff" }}>
                <p className="text-xs font-black uppercase tracking-wider">{c.label}</p>
                <p className="mt-1 text-base font-bold">{c.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-12 text-xs font-bold uppercase tracking-wider text-stone-400">
            * = Świetliste, fotografujemy emocje, est. 2010
          </p>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs font-black uppercase tracking-wider md:flex-row">
          <span>© {new Date().getFullYear()} Świetliste*</span>
          <span style={{ color: ACCENT }}>★ fotografujemy emocje ★</span>
          <span>est. 2010 · Osielsko</span>
        </div>
      </footer>
    </main>
  );
}
