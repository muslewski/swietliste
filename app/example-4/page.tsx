"use client";
/* eslint-disable @next/next/no-img-element */
import { motion, type Variants } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";
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

const ACCENT = "#7A2E2E";

// Massive type reveals via clip-path mask (bottom → top)
const maskRevealV: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.1, ease: ease.outSmooth },
  },
};
const dotPopV: Variants = {
  hidden: { opacity: 0, scale: 0, y: -10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.9, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};
const slideUpV: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.outSmooth } },
};
const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Example4Page() {
  return (
    <main className="min-h-dvh bg-white font-sans text-neutral-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-8">
          <div className="font-mono text-xs uppercase tracking-[0.4em]">Świetliste</div>
          <a href={`tel:${brand.phoneDigits}`} className="text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-neutral-900">
            {brand.phone}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-44 sm:px-12 sm:pt-56">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400"
        >
          Wedding photography · est. 2010
        </motion.p>
        <h1 className="mt-10 font-display font-black tracking-[-0.04em] leading-[0.85] text-neutral-900"
            style={{ fontSize: "clamp(4rem, 18vw, 22rem)" }}>
          <motion.span
            initial="hidden" animate="show" variants={maskRevealV}
            className="inline-block"
          >
            Emocje
          </motion.span>
          <motion.span
            initial="hidden" animate="show" variants={dotPopV}
            className="inline-block"
            style={{ color: ACCENT }}
          >
            .
          </motion.span>
        </h1>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-2xl leading-snug text-neutral-700">
              Fotografujemy dzień, w którym wszystko ma znaczenie —
              <span className="text-neutral-900"> światło, gest, drobiazg.</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={`mailto:${brand.email}`}
                 className="rounded-none border border-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
                Zapytaj o termin
              </a>
              <a href="#historie" className="text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-neutral-900">
                Zobacz historie →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="mt-32 sm:mt-44">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img src={heroImages[0]} alt="Świetliste sesja" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="mx-auto flex max-w-[1500px] items-baseline justify-between px-8 pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          <span>001 · Bożenkowo</span>
          <span style={{ color: ACCENT }}>—</span>
          <span>2019 · slow wedding</span>
        </div>
      </section>

      {/* STATS — massive numerals */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Świetliste w liczbach
          </p>
          <motion.ul
            variants={listV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2"
          >
            {stats.map((s) => (
              <motion.li key={s.label} variants={slideUpV} className="border-t border-neutral-200 pt-6">
                <p className="font-display tracking-[-0.04em] text-neutral-900"
                   style={{ fontSize: "clamp(4rem, 12vw, 12rem)", lineHeight: 0.9 }}>
                  {s.value.replace("+", "")}
                  <span style={{ color: ACCENT }}>{s.value.includes("+") ? "+" : "."}</span>
                </p>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-xl text-neutral-700">{s.label}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">{s.note}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-t border-neutral-200 px-6 py-44 sm:px-12">
        <blockquote className="mx-auto max-w-[1200px] font-display italic text-neutral-900"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)", lineHeight: 1 }}>
          „Światło buduje
          <br />
          nastrój<span style={{ color: ACCENT }}>,</span>
          <br />
          oddaje głębię"
        </blockquote>
      </section>

      {/* Stories list */}
      <section id="historie" className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <div className="mb-20 flex items-baseline justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">Historie</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">06 prac</p>
          </div>
          <ul className="divide-y divide-neutral-200">
            {featuredStories.map((s, i) => (
              <li key={s.slug}>
                <a href="#" className="group relative grid grid-cols-12 items-center gap-6 py-12 transition">
                  <span className="col-span-1 font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="col-span-12 font-display tracking-tight text-neutral-900 sm:col-span-6"
                      style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}>
                    {s.couple}
                  </h3>
                  <div className="col-span-12 sm:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">{s.style}</p>
                    <p className="mt-2 text-sm text-neutral-600">{s.venue}</p>
                  </div>
                  <div className="col-span-12 hidden aspect-square w-full overflow-hidden sm:col-span-2 sm:block">
                    <img src={s.image} alt={s.title} className="size-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <h2 className="font-display font-black tracking-[-0.04em] text-neutral-900"
              style={{ fontSize: "clamp(3rem, 10vw, 12rem)", lineHeight: 0.85 }}>
            Cztery<br />etapy<span style={{ color: ACCENT }}>.</span>
          </h2>
          <ol className="mt-16 grid grid-cols-1 divide-y divide-neutral-200 border-t border-neutral-200 md:grid-cols-2 md:divide-y-0 md:[&>li:nth-child(-n+2)]:border-b md:[&>li:nth-child(-n+2)]:border-neutral-200 md:[&>li:nth-child(odd)]:border-r md:[&>li:nth-child(odd)]:border-neutral-200">
            {processSteps.map((p) => (
              <li key={p.step} className="p-10">
                <p className="font-display tracking-[-0.04em] text-neutral-300"
                   style={{ fontSize: "clamp(5rem, 10vw, 10rem)", lineHeight: 0.85 }}>
                  {p.step}
                </p>
                <h3 className="mt-6 font-display text-3xl tracking-tight">{p.title}</h3>
                <p className="mt-3 max-w-md text-neutral-600">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS — single huge pull quotes scrolling */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Listy do nas
          </p>
          <ul className="mt-12 space-y-32">
            {testimonials.slice(0, 3).map((t, i) => (
              <li key={t.author} className={i % 2 === 1 ? "md:pl-20" : ""}>
                <p className="font-display italic text-neutral-900"
                   style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1.05 }}>
                  <span style={{ color: ACCENT }}>„</span>
                  {t.quote}
                  <span style={{ color: ACCENT }}>"</span>
                </p>
                <div className="mt-8 flex items-center gap-5 border-t border-neutral-200 pt-5">
                  <div className="size-14 overflow-hidden rounded-full">
                    <img src={t.image} alt="" className="size-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-xl">{t.author}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">{t.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 py-32 md:grid-cols-2 sm:px-12">
          <p className="font-display tracking-tight text-neutral-900"
             style={{ fontSize: "clamp(2rem, 4vw, 4rem)", lineHeight: 1.05 }}>
            Co robimy<span style={{ color: ACCENT }}>?</span>
          </p>
          <div className="space-y-8 text-xl leading-relaxed text-neutral-700">
            <p>{aboutBlocks[1].body}</p>
            <p>{aboutBlocks[2].body}</p>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">{brand.pricing.label}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <p className="mb-16 font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">Oferta</p>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {services.map((sv, i) => (
              <li key={sv.slug}>
                <div className="border-b border-neutral-200 py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display tracking-tight text-neutral-900"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                      {sv.title}
                    </h3>
                    <span className="font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2 max-w-md text-sm text-neutral-500">{sv.hint}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Deliverables list */}
          <div className="mt-16 grid gap-8 border-t border-neutral-200 pt-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">Co dostajecie</p>
              <ul className="mt-6 space-y-4">
                {deliverables.map((d) => (
                  <li key={d.title} className="border-b border-neutral-100 pb-3">
                    <h4 className="font-display text-xl">{d.title}</h4>
                    <p className="text-sm text-neutral-500">{d.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">Pakiet od</p>
              <p className="mt-4 font-display font-black tracking-[-0.04em] text-neutral-900"
                 style={{ fontSize: "clamp(4rem, 10vw, 10rem)", lineHeight: 0.85 }}>
                2699<span style={{ color: ACCENT }} className="text-4xl"> zł</span>
              </p>
              <p className="mt-4 text-neutral-600">Wycena indywidualna — bo każda historia jest inna.</p>
              <a href={`mailto:${brand.email}`}
                 className="mt-6 inline-block border border-neutral-900 px-7 py-3 text-xs uppercase tracking-[0.25em] hover:bg-neutral-900 hover:text-white">
                Pełny cennik →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — questions as oversized type */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-12">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">FAQ</p>
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faq.map((f, i) => (
              <li key={f.q}>
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-6 py-10">
                      <h3 className="font-display tracking-tight text-neutral-900"
                          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", lineHeight: 1.05 }}>
                        <span className="font-mono text-sm text-neutral-300">{String(i + 1).padStart(2, "0")}.</span>{" "}
                        {f.q}
                      </h3>
                      <span aria-hidden className={`text-4xl transition duration-300 ${isOpen ? "rotate-45" : ""}`} style={{ color: ACCENT }}>+</span>
                    </div>
                  )}
                >
                  <p className="max-w-2xl pb-10 text-xl text-neutral-700">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-12">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">polecani przez</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 font-display text-2xl tracking-tight text-neutral-700">
            {pressBadges.map((p) => <li key={p.label}>{p.label}.</li>)}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1500px] px-6 py-44 sm:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">Sprawdź wolny termin</p>
          <h2 className="mt-8 font-display font-black tracking-[-0.04em] text-neutral-900"
              style={{ fontSize: "clamp(4rem, 14vw, 16rem)", lineHeight: 0.85 }}>
            Napisz<span style={{ color: ACCENT }}>.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <a href={`tel:${brand.phoneDigits}`} className="block">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Telefon</p>
              <p className="mt-2 text-xl text-neutral-900">{brand.phone}</p>
            </a>
            <a href={`mailto:${brand.email}`} className="block">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">E-mail</p>
              <p className="mt-2 text-xl text-neutral-900">{brand.email}</p>
            </a>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Studio</p>
              <p className="mt-2 text-xl text-neutral-900">{brand.address.line1}<br />{brand.address.line2}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-8 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-tight">Świetliste<span style={{ color: ACCENT }}>.</span></p>
            <p className="mt-2 text-sm text-neutral-500">Fotografujemy emocje. Od 2010.</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Kontakt</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a href={`tel:${brand.phoneDigits}`} className="hover:text-neutral-900">{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`} className="hover:text-neutral-900">{brand.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Studio</p>
            <p className="mt-3 text-sm">{brand.address.line1}<br />{brand.address.line2}</p>
          </div>
          <p className="col-span-full border-t border-neutral-200 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            © {new Date().getFullYear()} Świetliste
          </p>
        </div>
      </footer>
    </main>
  );
}
