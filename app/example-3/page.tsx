"use client";
/* eslint-disable @next/next/no-img-element */
import { motion, type Variants } from "motion/react";
import { appleSpring, viewportOnce } from "@/lib/motion";
import { MotionAccordionItem } from "@/lib/motion-faq";
import { CountUp, parseStatValue } from "@/lib/count-up";
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

const SHADOW = "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]";

// Apple bento: tiles snap with a soft spring from scale 0.96
const bentoListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const bentoTileV: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: appleSpring },
};
const apiTextV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Example3Page() {
  return (
    <main className="min-h-dvh bg-[#F5F5F7] font-sans text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-[#F5F5F7]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#historie" className="hidden text-sm text-neutral-500 hover:text-neutral-900 sm:block">Historie</a>
            <div className="text-base font-semibold tracking-tight">Świetliste</div>
            <a href="#oferta" className="hidden text-sm text-neutral-500 hover:text-neutral-900 sm:block">Oferta</a>
          </div>
          <a href={`mailto:${brand.email}`}
             className="whitespace-nowrap rounded-full bg-neutral-900 px-3 py-2 text-[11px] font-medium text-white transition hover:bg-neutral-700 sm:px-4 sm:text-xs">
            Zapytaj o termin
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={bentoListV}
          className="mb-8 max-w-3xl sm:mb-12"
        >
          <motion.p variants={apiTextV} className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Fotografujemy emocje — od 2010
          </motion.p>
          <motion.h1 variants={apiTextV} className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
            Wasz dzień,
            <br />
            <span className="text-neutral-400">opowiedziany kadrami.</span>
          </motion.h1>
          <motion.p variants={apiTextV} className="mt-5 text-base text-neutral-600 sm:mt-6 sm:text-lg">
            Artystyczna fotografia ślubna z Osielska. Reporterski styl, piękne
            naturalne światło, papierowe wspomnienia — albumy i fotoksiążki —
            do których wracacie po latach.
          </motion.p>
        </motion.div>

        {/* BENTO GRID — hero */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={bentoListV}
          className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-4 md:gap-5"
        >
          {/* Hero image — 2x2 */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img src={heroImages[0]} alt="Sesja rustykalna boho" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 sm:text-xs">Reportaż</p>
              <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight sm:mt-2 sm:text-3xl md:text-4xl">
                Slow weddings.
                <br />
                Surowe, bliskie, prawdziwe.
              </h2>
            </div>
          </div>

          {/* Manifesto tile */}
          <div className={`col-span-2 row-span-1 flex flex-col justify-between rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Manifest</p>
            <p className="text-base font-semibold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-3xl">
              „Nie chcemy rejestrować rzeczywistości — utrwalamy{" "}
              <span className="text-neutral-400">smak i kolor chwil.</span>"
            </p>
          </div>

          {/* Pricing tile (dark) */}
          <div className={`col-span-1 row-span-1 flex flex-col justify-between rounded-2xl bg-neutral-900 p-4 text-white sm:rounded-3xl sm:p-5 ${SHADOW}`}>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 sm:text-xs">Pakiety od</p>
            <p className="text-3xl font-semibold tracking-tight sm:text-5xl">
              <CountUp to={2699} duration={2.0} />
              <span className="text-base opacity-70 sm:text-2xl"> zł</span>
            </p>
          </div>

          {/* Count tile */}
          <div className={`col-span-1 row-span-1 flex flex-col justify-between rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-5 ${SHADOW}`}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Zrealizowanych</p>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <CountUp to={300} suffix="+" duration={1.8} />
            </p>
            <p className="text-[10px] text-neutral-500 sm:text-xs">historii miłosnych</p>
          </div>

          {/* Engagement */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img src={categoryImages.engagement} alt="Sesje narzeczeńskie" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
            <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs">01 · Sesje narzeczeńskie</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <h3 className="text-lg font-semibold leading-tight tracking-tight sm:text-2xl">Naturalna, pełna swobody sesja przed ślubem.</h3>
            </div>
          </div>

          {/* Outdoor */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img src={categoryImages.outdoor} alt="Sesje plenerowe" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
            <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs">02 · Plenery</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <h3 className="text-lg font-semibold leading-tight tracking-tight sm:text-2xl">Niezwykłe miejsca, piękne światło.</h3>
            </div>
          </div>

          {/* Products tile */}
          <div className={`col-span-2 row-span-1 flex items-center justify-between gap-3 rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Produkty drukowane</p>
              <p className="mt-1 truncate text-base font-semibold tracking-tight sm:whitespace-normal sm:text-xl">
                Albumy · Fotoksiążki · Prezentacje HD
              </p>
            </div>
            <span aria-hidden className="shrink-0 text-xl text-neutral-300 sm:text-2xl">→</span>
          </div>

          {/* Contact tile */}
          <div className={`col-span-2 row-span-1 flex items-center justify-between gap-3 rounded-2xl bg-amber-50 p-4 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-700 sm:text-xs">Sprawdź wolny termin</p>
              <a href={`tel:${brand.phoneDigits}`}
                 className="mt-1 block whitespace-nowrap text-base font-semibold tracking-tight text-amber-900 sm:text-xl">
                {brand.phone}
              </a>
            </div>
            <a href={`mailto:${brand.email}`}
               className="shrink-0 rounded-full bg-amber-900 px-4 py-2 text-[11px] font-medium text-amber-50 transition hover:bg-amber-800 sm:px-5 sm:py-2.5 sm:text-xs">
              Napisz →
            </a>
          </div>
        </motion.div>
      </section>

      {/* STATS bento */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <motion.ul
          variants={bentoListV}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5"
        >
          {stats.map((s) => {
            const { num, suffix } = parseStatValue(s.value);
            return (
              <motion.li
                key={s.label}
                variants={bentoTileV}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 ${SHADOW}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">{s.note}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl md:text-5xl">
                  <CountUp to={num} suffix={suffix} duration={1.6} />
                </p>
                <p className="mt-1 text-xs text-neutral-600 sm:mt-2 sm:text-sm">{s.label}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>

      {/* Stories */}
      <section id="historie" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Historie</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">Każda para — inna opowieść</h2>
          </div>
        </div>
        <motion.ul
          variants={bentoListV}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {featuredStories.map((s) => (
            <motion.li
              key={s.slug}
              variants={bentoTileV}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <article className={`group overflow-hidden rounded-2xl bg-white sm:rounded-3xl ${SHADOW}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">{s.style} · {s.venue}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">{s.couple}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{s.blurb}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* PROCESS bento */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Jak pracujemy</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">Cztery etapy, jedna historia</h2>
        </div>
        <ul className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <li key={p.step} className={`flex flex-col justify-between gap-6 rounded-2xl p-5 sm:gap-8 sm:rounded-3xl sm:p-6 ${SHADOW} ${
              i === 0 ? "bg-amber-50" : i === 3 ? "bg-neutral-900 text-white" : "bg-white"
            }`}>
              <p className={`text-4xl font-semibold leading-none sm:text-5xl ${i === 3 ? "text-amber-200" : "text-neutral-300"}`}>{p.step}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{p.title}</h3>
                <p className={`mt-2 text-sm ${i === 3 ? "text-neutral-400" : "text-neutral-600"}`}>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIALS bento */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Co mówią pary</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">Listy do nas</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {/* Featured large testimonial */}
          <article className="flex flex-col justify-between gap-5 rounded-2xl bg-neutral-900 p-5 text-white sm:row-span-2 sm:rounded-3xl sm:p-7 sm:col-span-2 lg:col-span-2">
            <svg viewBox="0 0 36 36" className="size-8 fill-amber-200 sm:size-10">
              <path d="M13 8c-4 2-7 6-7 12v8h10V18H10c0-3 2-5 4-6l-1-4zm15 0c-4 2-7 6-7 12v8h10V18H25c0-3 2-5 4-6l-1-4z" />
            </svg>
            <p className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl md:text-3xl">
              „{testimonials[0].quote}"
            </p>
            <div className="flex items-center gap-3 border-t border-white/10 pt-4 sm:pt-5">
              <div className="size-10 shrink-0 overflow-hidden rounded-full sm:size-12">
                <img src={testimonials[0].image} alt="" className="size-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold sm:text-base">{testimonials[0].author}</p>
                <p className="truncate text-xs text-neutral-400">{testimonials[0].detail}</p>
              </div>
            </div>
          </article>
          {testimonials.slice(1, 5).map((t) => (
            <article key={t.author} className={`flex flex-col justify-between rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-5 ${SHADOW}`}>
              <p className="text-sm leading-relaxed text-neutral-700">„{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-3">
                <div className="size-8 shrink-0 overflow-hidden rounded-full">
                  <img src={t.image} alt="" className="size-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">{t.author}</p>
                  <p className="truncate text-[10px] uppercase tracking-[0.15em] text-neutral-500">{t.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES + DELIVERABLES */}
      <section id="oferta" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Oferta</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">To, co możemy razem stworzyć</h2>
        </div>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.5fr_1fr]">
          <ul className={`grid grid-cols-1 gap-4 rounded-2xl bg-white p-5 sm:grid-cols-2 sm:rounded-3xl sm:p-7 ${SHADOW}`}>
            {services.map((sv, i) => (
              <li key={sv.slug} className="border-b border-neutral-100 pb-4 last:border-b-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold tracking-tight sm:text-lg">{sv.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{sv.hint}</p>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div className={`rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Co dostajecie</p>
              <ul className="mt-4 space-y-3">
                {deliverables.map((d) => (
                  <li key={d.title} className="flex items-start gap-3 border-b border-neutral-100 pb-3 last:border-b-0">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-neutral-900" />
                    <div>
                      <p className="text-sm font-semibold">{d.title}</p>
                      <p className="text-xs text-neutral-500">{d.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl bg-amber-50 p-5 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-700 sm:text-xs">Pakiet ślubny od</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-amber-900 sm:text-5xl">
                <CountUp to={2699} suffix=" zł" duration={2.0} />
              </p>
              <p className="mt-2 text-xs text-amber-900/70 sm:text-sm">Wycena indywidualna.</p>
              <a href={`mailto:${brand.email}`}
                 className="mt-4 inline-block rounded-full bg-amber-900 px-5 py-2.5 text-[11px] font-medium text-amber-50 transition hover:bg-amber-800 sm:text-xs">
                Pełny cennik →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={`rounded-2xl bg-white p-6 sm:rounded-3xl sm:p-8 md:p-12 ${SHADOW}`}>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            {aboutBlocks.map((b) => (
              <div key={b.heading}>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{b.heading}</h3>
                <p className="mt-3 text-sm text-neutral-600 sm:text-base">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ bento */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">Pytania, które dostajemy</h2>
        </div>
        <ul className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl ${SHADOW} md:grid-cols-2`}>
          {faq.map((f) => (
            <li key={f.q} className="bg-white">
              <MotionAccordionItem
                trigger={({ isOpen }) => (
                  <div className="flex items-baseline justify-between gap-3 p-5 sm:gap-4 sm:p-6">
                    <h3 className="text-sm font-semibold tracking-tight sm:text-base">{f.q}</h3>
                    <span aria-hidden className={`shrink-0 text-xl text-neutral-300 transition duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </div>
                )}
              >
                <p className="px-5 pb-5 text-sm text-neutral-600 sm:px-6 sm:pb-6">{f.a}</p>
              </MotionAccordionItem>
            </li>
          ))}
        </ul>
      </section>

      {/* PRESS row */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={`rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-6 ${SHADOW}`}>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">polecani przez</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-700 sm:gap-x-10 sm:gap-y-3">
            {pressBadges.map((p) => <li key={p.label}>{p.label}</li>)}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-10">
        <div className={`grid gap-8 rounded-2xl bg-neutral-900 p-6 text-neutral-300 sm:gap-10 sm:rounded-3xl sm:p-8 md:grid-cols-4 md:p-12 ${SHADOW}`}>
          <div className="md:col-span-2">
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Świetliste</p>
            <p className="mt-2 text-sm">{brand.tagline}. Fotografia ślubna z Osielska, od 2010 r.</p>
            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-amber-200 sm:mt-6 sm:text-xs">
              Pakiety od 2699 zł · cała Polska
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={`tel:${brand.phoneDigits}`} className="hover:text-white">{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`} className="break-all hover:text-white">{brand.email}</a></li>
              <li><a href={brand.social.facebook} className="hover:text-white" target="_blank" rel="noreferrer">/swietliste · Facebook</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">Studio</p>
            <p className="mt-3 text-sm">
              {brand.address.line1}
              <br />
              {brand.address.line2}
              <br />
              {brand.address.near}
            </p>
          </div>
          <p className="col-span-full border-t border-white/10 pt-5 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 sm:pt-6 sm:text-xs">
            © {new Date().getFullYear()} Świetliste — Fotografujemy emocje
          </p>
        </div>
      </footer>
    </main>
  );
}
