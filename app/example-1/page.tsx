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
  categoryImages,
  testimonials,
  stats,
  processSteps,
  faq,
  pressBadges,
  deliverables,
} from "@/lib/content";

// Editorial motion: slow, elegant, romantic. Like turning pages of an invitation.
const heroStaggerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};
const heroItemV: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.outSmooth } },
};
// Ornament "draws in" via clip-path
const ornamentV: Variants = {
  hidden: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
  show: {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    transition: { duration: 1.1, ease: ease.outSmooth },
  },
};
const cardListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardV: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: ease.outSmooth } },
};

/**
 * Example 1 — Classic Editorial Romance (v2)
 * Soft cream paper, romantic script accents, ornamental dividers,
 * slow vertical rhythm. Reads like a wedding invitation crossed with a magazine.
 */

const CREAM = "#FBF6EF";
const PAPER = "#F1E9DC";
const INK = "#3A2E22";
const GOLD = "#C09556";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <motion.div
      variants={ornamentV}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex items-center justify-center gap-4 text-stone-400 ${className}`}
    >
      <span className="h-px w-12 bg-current sm:w-24" />
      <svg aria-hidden viewBox="0 0 24 24" className="size-3 fill-current">
        <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
      </svg>
      <span className="h-px w-12 bg-current sm:w-24" />
    </motion.div>
  );
}

function Monogram() {
  return (
    <svg viewBox="0 0 120 120" className="size-20" aria-hidden>
      <circle cx="60" cy="60" r="58" fill="none" stroke={GOLD} strokeWidth="0.6" />
      <circle cx="60" cy="60" r="48" fill="none" stroke={GOLD} strokeWidth="0.4" strokeDasharray="2 4" />
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-cormorant-garamond), serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="44"
        fill={INK}
      >
        Ś
      </text>
    </svg>
  );
}

export default function Example1Page() {
  return (
    <main style={{ background: CREAM, color: INK }} className="font-serif-soft">
      {/* Top bar */}
      <header className="border-b border-stone-300/60">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            est. 2010 · Osielsko · Bydgoszcz
          </span>
        </div>
      </header>

      {/* HERO — invitation card */}
      <section className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroStaggerV}
          className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center sm:pt-28"
        >
          <motion.p variants={heroItemV} className="font-script text-3xl sm:text-4xl text-amber-900/80">
            {brand.tagline}
          </motion.p>
          <motion.div variants={ornamentV} className="my-6 flex items-center justify-center gap-4 text-stone-400">
            <span className="h-px w-12 bg-current sm:w-24" />
            <svg aria-hidden viewBox="0 0 24 24" className="size-3 fill-current">
              <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
            </svg>
            <span className="h-px w-12 bg-current sm:w-24" />
          </motion.div>
          <motion.h1 variants={heroItemV} className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-[104px]">
            Świetliste
          </motion.h1>
          <motion.p variants={heroItemV} className="mt-6 mx-auto max-w-2xl text-lg italic text-stone-600 sm:text-xl">
            Artystyczna fotografia ślubna w reporterskim stylu — pełna pięknego
            światła i emocji. Z Osielska na cały kraj.
          </motion.p>
          <motion.div variants={heroItemV} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${brand.email}`}
              className="rounded-full bg-stone-900 px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] text-amber-50 transition hover:bg-amber-900"
            >
              Zarezerwuj termin
            </a>
            <a
              href="#historie"
              className="rounded-full border border-stone-400 px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] text-stone-700 transition hover:border-stone-700 hover:text-stone-900"
            >
              Zobacz historie miłosne
            </a>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md">
            <img
              src={heroImages[0]}
              alt="Świetliste – rustykalna sesja ślubna"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent p-6 text-amber-50">
              <p className="font-script text-2xl">on a quiet morning…</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Plate 001 · Bożenkowo · 2019
              </p>
            </div>
          </div>
          {/* Stats strip under hero */}
          <ul className="mt-10 grid grid-cols-2 gap-4 border-y border-stone-300/60 py-6 text-center md:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label}>
                <p className="font-display text-3xl text-amber-900/90 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
          — Manifest —
        </p>
        <h2 className="mt-6 font-display text-3xl leading-snug sm:text-4xl">
          Nie chcemy rejestrować rzeczywistości —{" "}
          <em className="text-amber-900/90">utrwalamy smak i kolor chwil.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
          {aboutBlocks[0].body}
        </p>
        <Ornament className="mt-10" />
      </section>

      {/* PROCESS — "How we work" — 4-step elegant ribbon */}
      <section className="bg-white/60 py-24" style={{ background: PAPER + "55" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="font-script text-2xl text-amber-900/80">jak pracujemy</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Cztery etapy, jedna historia
            </h2>
          </div>
          <motion.ol
            variants={cardListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((p) => (
              <motion.li key={p.step} variants={cardV} className="text-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-stone-400 bg-white">
                  <span className="font-display text-2xl italic text-amber-900/80">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Featured stories */}
      <section id="historie" className="bg-stone-100/70 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col items-center gap-3 text-center">
            <p className="font-script text-2xl text-amber-900/80">
              wybrane historie
            </p>
            <h2 className="font-display text-4xl sm:text-5xl">
              Każda para — inna opowieść
            </h2>
            <p className="max-w-xl text-stone-600">
              Sześć reportaży, w których światło, gesty i drobiazgi zatrzymane w
              kadrze opowiadają więcej niż słowa.
            </p>
          </div>
          <motion.ul
            variants={cardListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={cardV} className={i % 2 === 1 ? "md:mt-16" : ""}>
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 size-full object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">
                    <span>{String(i + 1).padStart(2, "0")} · {s.style}</span>
                    <span>{s.venue}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">
                    <span className="font-script text-3xl text-amber-900/80">
                      {s.couple}
                    </span>
                    <br />
                    {s.title}
                  </h3>
                  <p className="mt-3 text-stone-600">{s.blurb}</p>
                </article>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-14 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-stone-400 px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] text-stone-700 transition hover:border-stone-700 hover:text-stone-900"
            >
              Cała galeria reportaży <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BANNER — invitation-style */}
      <section className="relative overflow-hidden">
        <img
          src={categoryImages.outdoor}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: CREAM + "DD" }} />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <Monogram />
          <p className="mt-6 font-script text-3xl text-amber-900/80">
            zapraszamy serdecznie
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Pakiety ślubne
            <br />
            <em className="italic">już od {brand.pricing.fromPLN} zł</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-stone-600">
            Wycena indywidualna — bo każda historia jest inna. Przy filiżance
            herbaty pokażemy Wam albumy, których nie zobaczycie nigdzie indziej.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-10 inline-block rounded-full bg-stone-900 px-9 py-4 font-sans text-sm uppercase tracking-[0.2em] text-amber-50 transition hover:bg-amber-900"
          >
            Spytaj o wolny termin
          </a>
        </div>
      </section>

      {/* SERVICES + DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
              Oferta
            </p>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              Co możemy razem stworzyć
            </h2>
            <p className="mt-6 text-lg text-stone-600">
              Wybierz, co najlepiej opowie Waszą historię. Każdy element możemy
              dopasować do Was — od subtelnej sesji narzeczeńskiej po wyklejany
              album, do którego wracacie po latach.
            </p>
            <p className="mt-10 font-script text-2xl text-amber-900/80">
              {brand.pricing.label}
            </p>
          </div>
          <ul className="divide-y divide-stone-300/60 border-y border-stone-300/60">
            {services.map((sv) => (
              <li
                key={sv.slug}
                className="flex items-start justify-between gap-6 py-5"
              >
                <div>
                  <h3 className="font-display text-2xl">{sv.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{sv.hint}</p>
                </div>
                <span className="font-mono text-xs text-stone-400">→</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            Co dostajecie
          </p>
          <h3 className="mt-4 font-display text-3xl">Papierowe wspomnienia</h3>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {deliverables.map((d) => (
              <li
                key={d.title}
                className="rounded-md border border-stone-300/70 bg-white/70 p-5"
              >
                <h4 className="font-display text-xl">{d.title}</h4>
                <p className="mt-1 text-xs text-stone-600">{d.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS — quote cards */}
      <section className="bg-stone-100/70 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="font-script text-2xl text-amber-900/80">listy od par</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Co mówią ci, których ślub fotografowaliśmy
            </h2>
          </div>
          <motion.ul
            variants={cardListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.slice(0, 3).map((t) => (
              <motion.li key={t.author} variants={cardV} className="rounded-md bg-white/80 p-7 shadow-[0_1px_2px_rgba(60,40,20,0.04)]">
                <svg viewBox="0 0 36 36" className="size-8 fill-amber-900/30">
                  <path d="M13 8c-4 2-7 6-7 12v8h10V18H10c0-3 2-5 4-6l-1-4zm15 0c-4 2-7 6-7 12v8h10V18H25c0-3 2-5 4-6l-1-4z" />
                </svg>
                <p className="mt-4 text-lg italic leading-relaxed text-stone-700">
                  „{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-stone-200 pt-4">
                  <div className="size-10 overflow-hidden rounded-full">
                    <img src={t.image} alt="" className="size-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-lg">{t.author}</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* FAQ — elegant Q&A */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            Najczęściej pytane
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Zanim do nas napiszecie
          </h2>
        </div>
        <ul className="divide-y divide-stone-300/60 border-y border-stone-300/60">
          {faq.map((f, i) => (
            <li key={f.q}>
              <MotionAccordionItem
                trigger={({ isOpen }) => (
                  <div className="flex items-baseline justify-between gap-6 py-6">
                    <h3 className="font-display text-2xl">
                      <span className="font-mono text-xs text-amber-900/60">
                        {String(i + 1).padStart(2, "0")} ·{" "}
                      </span>
                      {f.q}
                    </h3>
                    <span
                      aria-hidden
                      className={`font-display text-3xl text-stone-400 transition duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </div>
                )}
              >
                <p className="max-w-2xl pb-6 text-stone-600">{f.a}</p>
              </MotionAccordionItem>
            </li>
          ))}
        </ul>
      </section>

      {/* PRESS / partner row */}
      <section className="border-y border-stone-300/60 bg-white/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            polecani przez
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {pressBadges.map((p) => (
              <li
                key={p.label}
                className="font-display text-lg italic text-stone-700"
              >
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT / closing invitation */}
      <section className="relative overflow-hidden text-amber-50" style={{ background: "#3A2418" }}>
        <img
          src={featuredStories[2].image}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-2">
          <div>
            <p className="font-script text-3xl text-amber-200">do zobaczenia</p>
            <h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              Spytajcie o
              <br />
              <em>wolny termin</em>
            </h2>
            <p className="mt-6 max-w-md text-amber-100/80">
              W mailu podajcie datę, miejsce ślubu i wesela oraz telefon
              kontaktowy. Zwykle odpowiadamy w ciągu jednego dnia.
            </p>
            <div className="mt-10 space-y-3">
              <a
                href={`tel:${brand.phoneDigits}`}
                className="block font-display text-3xl tracking-tight hover:text-amber-200"
              >
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="block font-display text-xl italic text-amber-100 hover:text-amber-50"
              >
                {brand.email}
              </a>
            </div>
          </div>

          {/* Contact card */}
          <form className="rounded-md bg-amber-50/[0.07] p-8 backdrop-blur-sm" aria-label="Zapytanie o wolny termin">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-200">
              krótki formularz
            </p>
            <h3 className="mt-3 font-display text-2xl">Napiszcie nam więcej</h3>
            <div className="mt-6 grid gap-4">
              <label className="block text-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
                  Imiona
                </span>
                <input
                  type="text"
                  className="mt-1 block w-full border-b border-amber-100/40 bg-transparent py-2 placeholder-amber-100/40 focus:border-amber-100 focus:outline-none"
                  placeholder="Anna & Marcin"
                />
              </label>
              <label className="block text-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
                  Data ślubu
                </span>
                <input
                  type="text"
                  className="mt-1 block w-full border-b border-amber-100/40 bg-transparent py-2 placeholder-amber-100/40 focus:border-amber-100 focus:outline-none"
                  placeholder="14 czerwca 2026"
                />
              </label>
              <label className="block text-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
                  Miejsce
                </span>
                <input
                  type="text"
                  className="mt-1 block w-full border-b border-amber-100/40 bg-transparent py-2 placeholder-amber-100/40 focus:border-amber-100 focus:outline-none"
                  placeholder="Dwór, kościół, plener…"
                />
              </label>
              <label className="block text-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
                  E-mail
                </span>
                <input
                  type="email"
                  className="mt-1 block w-full border-b border-amber-100/40 bg-transparent py-2 placeholder-amber-100/40 focus:border-amber-100 focus:outline-none"
                  placeholder="kontakt@…"
                />
              </label>
              <button
                type="button"
                className="mt-4 rounded-full bg-amber-100 px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] text-stone-900 transition hover:bg-white"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER — magazine back cover */}
      <footer style={{ background: "#2A1B12" }} className="text-amber-50/85">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-10 border-b border-amber-50/15 pb-12 md:grid-cols-4">
            <div className="col-span-2">
              <Monogram />
              <p className="mt-5 font-script text-3xl text-amber-200">
                {brand.tagline}
              </p>
              <p className="mt-3 max-w-sm text-sm text-amber-100/70">
                Artystyczna fotografia ślubna z Osielska. Reporterski styl,
                piękne światło, papierowe wspomnienia. Działamy od 2010 r.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-200/70">
                Pracownia
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {services.slice(0, 5).map((sv) => (
                  <li key={sv.slug}>
                    <a href="#" className="hover:text-amber-200">
                      {sv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-200/70">
                Kontakt
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href={`tel:${brand.phoneDigits}`} className="hover:text-amber-200">
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${brand.email}`} className="hover:text-amber-200">
                    {brand.email}
                  </a>
                </li>
                <li>
                  <a href={brand.social.maps} className="hover:text-amber-200" target="_blank" rel="noreferrer">
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                  </a>
                </li>
                <li>
                  <a href={brand.social.facebook} className="hover:text-amber-200" target="_blank" rel="noreferrer">
                    /swietliste · Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-amber-100/50 md:flex-row md:text-left">
            <span>© {new Date().getFullYear()} Świetliste</span>
            <span className="font-script text-base normal-case tracking-normal text-amber-200/80">
              z miłości do światła
            </span>
            <span>est. 2010 · {brand.address.line2}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
