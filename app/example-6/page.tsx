"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";
import { MotionAccordionItem } from "@/lib/motion-faq";
import {
  brand,
  aboutBlocks,
  featuredStories,
  services,
  heroImages,
  categoryImages,
  testimonials,
  stats,
  processSteps,
  faq,
  deliverables,
  pressBadges,
} from "@/lib/content";

// Glass bloom: cards start blurred and slightly scaled, settle into place
const bloomListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const bloomV: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: ease.outSmooth },
  },
};
const heroTextV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.outSmooth } },
};

/**
 * Example 6 — Glassmorphism Romance (v2)
 * More sophisticated than v1: layered frosted glass surfaces, refined
 * peach/lavender/rose palette, editorial typography hierarchy,
 * full testimonial cards, process timeline, deliverables grid, FAQ accordion.
 * Less "pink wedding cake," more "Aman x Aesop."
 */
export default function Example6Page() {
  return (
    <main
      className="relative min-h-dvh overflow-hidden font-jost text-stone-800"
      style={{
        background:
          "linear-gradient(135deg, #F5EBE0 0%, #EDD7CE 22%, #E8C8C7 45%, #D9C6DC 70%, #C6CFE3 100%)",
      }}
    >
      {/* Animated soft blobs (sophisticated palette, drifting infinitely) */}
      <motion.div aria-hidden
        animate={{ x: [0, 60, -40, 0], y: [0, 40, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 size-[600px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #F2B8B5 0%, transparent 70%)" }}
      />
      <motion.div aria-hidden
        animate={{ x: [0, -50, 30, 0], y: [0, 30, -30, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 right-0 size-[700px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A8D4 0%, transparent 70%)" }}
      />
      <motion.div aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-1/4 left-1/4 size-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #B4C8E0 0%, transparent 70%)" }}
      />
      <motion.div aria-hidden
        animate={{ x: [0, -30, 50, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-32 right-1/4 size-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8D4B4 0%, transparent 70%)" }}
      />

      {/* Floating glass nav */}
      <header className="sticky top-4 z-40 mx-auto mt-4 max-w-4xl px-4">
        <nav className="flex items-center justify-between rounded-full border border-white/50 bg-white/30 px-6 py-3 shadow-[0_8px_32px_rgba(180,140,160,0.15)] backdrop-blur-2xl">
          <Link href="/" className="text-xs uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900">
            ←
          </Link>
          <div className="flex items-center gap-6">
            <a href="#historie" className="hidden text-xs uppercase tracking-[0.2em] text-stone-700 hover:text-stone-900 sm:block">historie</a>
            <div className="font-serif text-base italic tracking-wide text-stone-800">Świetliste</div>
            <a href="#oferta" className="hidden text-xs uppercase tracking-[0.2em] text-stone-700 hover:text-stone-900 sm:block">oferta</a>
          </div>
          <a href={`mailto:${brand.email}`}
             className="rounded-full bg-stone-900 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-stone-50 transition hover:bg-stone-700">
            Zapytaj
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24">
        <motion.div
          initial="hidden" animate="show" variants={bloomListV}
          className="grid items-end gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <motion.p variants={heroTextV} className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
              ★ Fotografia ślubna · maison since 2010
            </motion.p>
            <motion.h1 variants={heroTextV} className="mt-8 font-serif text-6xl leading-[1.02] tracking-tight text-stone-900 sm:text-7xl md:text-[112px]">
              Wasza{" "}
              <em className="bg-gradient-to-br from-rose-700 via-rose-500 to-purple-500 bg-clip-text font-light italic text-transparent">
                historia
              </em>
              ,
              <br />
              zatrzymana w świetle.
            </motion.h1>
            <motion.p variants={heroTextV} className="mt-8 max-w-lg text-lg text-stone-700">
              Czuły, reporterski styl bez pozowania. Operujemy światłem,
              dyskrecją i emocjami — dla par, które chcą zostać sobą.
            </motion.p>
            <motion.div variants={heroTextV} className="mt-10 flex flex-wrap items-center gap-3">
              <a href={`mailto:${brand.email}`}
                 className="group inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm text-white shadow-lg transition hover:bg-stone-700">
                Sprawdź wolny termin
                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#historie"
                 className="rounded-full border border-stone-400/60 bg-white/40 px-7 py-3.5 text-sm text-stone-700 backdrop-blur-md transition hover:bg-white/70">
                Zobacz historie
              </a>
            </motion.div>
          </div>

          {/* Hero image stack — glass framed */}
          <motion.div variants={bloomV} className="relative md:col-span-5">
            <div className="overflow-hidden rounded-[2.5rem] border-2 border-white/60 shadow-[0_30px_90px_rgba(120,80,100,0.2)]">
              <img src={heroImages[0]} alt="Świetliste sesja" className="aspect-[3/4] w-full object-cover" />
            </div>
            {/* Floating glass spec card */}
            <div className="absolute -left-6 bottom-12 hidden w-56 rounded-2xl border border-white/60 bg-white/50 p-5 shadow-[0_8px_32px_rgba(180,140,160,0.18)] backdrop-blur-2xl sm:block">
              <p className="font-jost text-[10px] uppercase tracking-[0.3em] text-rose-900/70">★★★★★</p>
              <p className="mt-2 font-serif text-sm italic leading-relaxed text-stone-800">
                „Zdjęcia tak prawdziwe, że oglądamy je co rok 23 lipca."
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Magda & Kuba — Bożenkowo
              </p>
            </div>
            {/* Floating pricing pill */}
            <div className="absolute -right-4 -top-4 rotate-3 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 shadow-[0_8px_32px_rgba(180,140,160,0.18)] backdrop-blur-2xl">
              <p className="font-jost text-[10px] uppercase tracking-[0.3em] text-rose-900/70">
                pakiety od
              </p>
              <p className="font-serif text-2xl text-stone-900">
                2699<span className="text-sm text-stone-500"> zł</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats glass strip */}
        <div className="mt-16 rounded-3xl border border-white/50 bg-white/30 p-6 shadow-[0_8px_32px_rgba(180,140,160,0.12)] backdrop-blur-2xl">
          <ul className="grid grid-cols-2 divide-x divide-stone-300/40 md:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="px-4 text-center">
                <p className="font-serif text-3xl italic text-stone-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About — glass triptych */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
            — maison philosophy —
          </p>
          <h2 className="mt-3 font-serif text-5xl italic text-stone-900">
            Trzy obietnice
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {aboutBlocks.map((b, i) => (
            <li key={b.heading}
                className="rounded-3xl border border-white/50 bg-white/35 p-7 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl transition hover:bg-white/50">
              <p className="font-jost text-xs uppercase tracking-[0.3em] text-rose-700/80">
                N° 0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl italic text-stone-900">
                {b.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{b.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS — glass timeline */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.12)] backdrop-blur-2xl sm:p-12">
          <div className="mb-12 flex flex-col items-baseline justify-between gap-3 sm:flex-row">
            <div>
              <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
                — jak pracujemy —
              </p>
              <h2 className="mt-2 font-serif text-4xl italic text-stone-900 sm:text-5xl">
                Cztery etapy
              </h2>
            </div>
            <p className="max-w-sm text-sm text-stone-600">
              Od pierwszego maila aż po wręczenie albumu — wiecie, czego się
              spodziewać i czego nie musicie się obawiać.
            </p>
          </div>
          <ol className="relative grid gap-8 md:grid-cols-4">
            <div aria-hidden className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-transparent via-rose-300/60 to-transparent md:block" />
            {processSteps.map((p) => (
              <li key={p.step} className="relative">
                <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border border-white/60 bg-white/70 font-serif text-lg italic text-rose-700 shadow-md backdrop-blur-xl">
                  {p.step}
                </div>
                <h3 className="mt-5 text-center font-serif text-xl italic text-stone-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-stone-700">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STORIES */}
      <section id="historie" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
            — wybrane historie —
          </p>
          <h2 className="mt-3 font-serif text-5xl italic text-stone-900">
            Każda para — inna opowieść
          </h2>
        </div>
        <motion.ul
          variants={bloomListV}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredStories.map((s) => (
            <motion.li key={s.slug} variants={bloomV}>
              <article className="group overflow-hidden rounded-3xl border border-white/50 bg-white/30 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/45">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-700 backdrop-blur-md">
                    {s.style}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl italic text-stone-900">{s.couple}</h3>
                  <p className="mt-1 text-sm italic text-stone-500">{s.title}</p>
                  <p className="mt-3 line-clamp-2 text-sm text-stone-700">{s.blurb}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-stone-500">
                    ↳ {s.venue}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* TESTIMONIALS — large floating glass quotes */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
            — co mówią pary —
          </p>
          <h2 className="mt-3 font-serif text-5xl italic text-stone-900">
            Listy do nas
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <li key={t.author}
                className={`rounded-3xl border border-white/50 bg-white/35 p-7 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl ${
                  i % 2 === 1 ? "md:translate-y-6" : ""
                }`}>
              <div className="flex items-center gap-2 text-rose-700">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" className="size-3.5 fill-current">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.6-6.2 4.6 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-stone-800">
                „{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-stone-300/40 pt-4">
                <div className="size-10 overflow-hidden rounded-full border-2 border-white/70">
                  <img src={t.image} alt="" className="size-full object-cover" />
                </div>
                <div>
                  <p className="font-serif italic text-stone-900">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                    {t.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* OFFER — services + deliverables side-by-side glass */}
      <section id="oferta" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl sm:p-10">
            <p className="font-jost text-xs uppercase tracking-[0.3em] text-rose-700/80">
              N° 01 · usługi
            </p>
            <h2 className="mt-3 font-serif text-4xl italic text-stone-900">
              Co możemy zaoferować
            </h2>
            <ul className="mt-8 space-y-5">
              {services.map((sv) => (
                <li key={sv.slug} className="flex items-start justify-between gap-4 border-b border-stone-300/40 pb-4">
                  <div>
                    <h3 className="font-serif text-xl italic text-stone-900">{sv.title}</h3>
                    <p className="mt-1 text-sm text-stone-600">{sv.hint}</p>
                  </div>
                  <span className="text-rose-600">→</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-white/50 bg-white/35 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl">
              <p className="font-jost text-xs uppercase tracking-[0.3em] text-rose-700/80">
                N° 02 · co dostajecie
              </p>
              <h3 className="mt-3 font-serif text-3xl italic text-stone-900">
                Papierowe wspomnienia
              </h3>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <li key={d.title} className="rounded-2xl bg-white/40 p-4 backdrop-blur-md">
                    <h4 className="font-serif text-base italic text-stone-900">{d.title}</h4>
                    <p className="mt-1 text-[11px] text-stone-600">{d.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-rose-300/40 bg-gradient-to-br from-rose-200/50 via-pink-200/40 to-purple-200/40 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.18)] backdrop-blur-2xl">
              <p className="font-jost text-xs uppercase tracking-[0.3em] text-rose-900">
                ★ pakiety ślubne
              </p>
              <p className="mt-2 font-serif text-6xl italic text-stone-900">
                od 2699 zł
              </p>
              <p className="mt-3 text-sm text-stone-700">
                Wycena indywidualna, bez ukrytych kosztów. Pakiety dopasowane do
                długości dnia, miejsca i Waszych potrzeb.
              </p>
              <a href={`mailto:${brand.email}`}
                 className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm text-white shadow-md transition hover:bg-stone-700">
                Poproś o pełny cennik →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — glass accordion */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.1)] backdrop-blur-2xl sm:p-12">
          <div className="mb-10 text-center">
            <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
              — pytania —
            </p>
            <h2 className="mt-3 font-serif text-4xl italic text-stone-900">
              Zanim do nas napiszecie
            </h2>
          </div>
          <ul className="divide-y divide-stone-300/40">
            {faq.map((f, i) => (
              <li key={f.q}>
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-4 py-5">
                      <h3 className="font-serif text-xl italic text-stone-900">
                        <span className="font-jost text-xs not-italic uppercase tracking-[0.2em] text-rose-700/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {"  "}
                        {f.q}
                      </h3>
                      <span aria-hidden className={`font-serif text-2xl text-rose-700/60 transition duration-300 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  )}
                >
                  <p className="pb-5 text-stone-700">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS strip */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-full border border-white/50 bg-white/30 px-8 py-4 backdrop-blur-2xl">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {pressBadges.map((p) => (
              <li key={p.label} className="font-serif text-sm italic text-stone-700">
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — closing banner with form */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-white/50 via-rose-100/40 to-purple-100/40 shadow-[0_20px_80px_rgba(180,140,160,0.2)] backdrop-blur-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/5] md:aspect-auto">
              <img src={categoryImages.engagement} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-rose-900/30" />
            </div>
            <div className="p-8 sm:p-12">
              <p className="font-jost text-xs uppercase tracking-[0.4em] text-rose-900/70">
                — do zobaczenia —
              </p>
              <h2 className="mt-4 font-serif text-5xl italic text-stone-900">
                Spytajcie o termin
              </h2>
              <p className="mt-4 text-stone-700">
                Odpowiadamy zwykle w ciągu jednego dnia. W mailu podajcie datę,
                miejsce ślubu i wesela oraz telefon.
              </p>
              <form className="mt-8 space-y-4" aria-label="Zapytanie o termin">
                <input type="text" placeholder="Imiona pary"
                       className="block w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-3 text-sm placeholder-stone-500 backdrop-blur-md focus:border-rose-400 focus:outline-none" />
                <input type="text" placeholder="Data ślubu"
                       className="block w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-3 text-sm placeholder-stone-500 backdrop-blur-md focus:border-rose-400 focus:outline-none" />
                <input type="email" placeholder="E-mail"
                       className="block w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-3 text-sm placeholder-stone-500 backdrop-blur-md focus:border-rose-400 focus:outline-none" />
                <button type="button"
                        className="w-full rounded-full bg-stone-900 px-6 py-3.5 text-sm text-white shadow-lg transition hover:bg-stone-700">
                  Wyślij zapytanie →
                </button>
              </form>
              <p className="mt-6 text-center text-xs text-stone-500">
                lub zadzwoń:{" "}
                <a href={`tel:${brand.phoneDigits}`} className="text-rose-700 underline">
                  {brand.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — glass */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-white/40 bg-white/25 p-8 shadow-[0_8px_32px_rgba(180,140,160,0.08)] backdrop-blur-2xl sm:p-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-serif text-3xl italic text-stone-900">Świetliste</p>
              <p className="mt-2 text-sm text-stone-700">
                {brand.tagline}. Artystyczna fotografia ślubna z Osielska,
                od 2010 r.
              </p>
            </div>
            <div>
              <p className="font-jost text-[10px] uppercase tracking-[0.3em] text-rose-900/70">
                Kontakt
              </p>
              <ul className="mt-3 space-y-1 text-sm text-stone-700">
                <li><a href={`tel:${brand.phoneDigits}`} className="hover:text-stone-900">{brand.phone}</a></li>
                <li><a href={`mailto:${brand.email}`} className="hover:text-stone-900">{brand.email}</a></li>
              </ul>
            </div>
            <div>
              <p className="font-jost text-[10px] uppercase tracking-[0.3em] text-rose-900/70">
                Studio
              </p>
              <p className="mt-3 text-sm text-stone-700">
                {brand.address.line1}
                <br />
                {brand.address.line2}
                <br />
                {brand.address.near}
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-stone-300/40 pt-5 text-xs uppercase tracking-[0.2em] text-stone-500">
            <span>© {new Date().getFullYear()} Świetliste</span>
            <span className="font-serif italic normal-case tracking-normal">est. 2010</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
