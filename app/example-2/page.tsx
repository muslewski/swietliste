"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";
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

/**
 * Example 2 — Cinematic Dark (v2)
 * Deep matte black, champagne gold (#C9A961) accent, atmospheric hero,
 * drifting ambient blobs, filmic rises with gold accent landing last.
 */
const GOLD = "#C9A961";

// Filmic stagger: deliberate, with the gold-accent ":dot" landing late
const heroV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const filmRiseV: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: ease.outSmooth } },
};
const goldPopV: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.0, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};
const cardGridV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardV: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.outSmooth } },
};

export default function Example2Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0A0908] font-sans text-neutral-200">
      {/* Drifting ambient glows (infinite slow oscillation) */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96120 0%, transparent 60%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 size-[700px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #71462F22 0%, transparent 60%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 50, 20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[40%] -left-32 size-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96118 0%, transparent 60%)" }}
      />

      {/* Top bar */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-500 hover:text-neutral-200">
            ← przykłady
          </Link>
          <div className="flex items-center gap-6">
            <a href="#historie" className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400 hover:text-neutral-100 md:block">historie</a>
            <div className="flex items-center gap-3 font-display tracking-tight text-neutral-100">
              <span className="size-1.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-lg">Świetliste</span>
            </div>
            <a href="#oferta" className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400 hover:text-neutral-100 md:block">oferta</a>
          </div>
          <a href={`tel:${brand.phoneDigits}`}
             className="hidden font-mono text-[10px] uppercase tracking-[0.4em] hover:text-neutral-50 sm:block"
             style={{ color: GOLD }}>
            {brand.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={heroV}
            className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]"
          >
            <div>
              <motion.p variants={filmRiseV} className="font-mono text-[11px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
                Wedding photography · Bydgoszcz / cała Polska
              </motion.p>
              <h1 className="mt-6 font-display text-5xl leading-[1] tracking-tight text-neutral-50 sm:text-7xl md:text-[112px]">
                <motion.span variants={filmRiseV} className="block italic font-light">Fotografujemy</motion.span>
                <motion.span variants={filmRiseV} className="block">
                  emocje
                  <motion.span variants={goldPopV} className="inline-block" style={{ color: GOLD }}>.</motion.span>
                </motion.span>
              </h1>
              <motion.p variants={filmRiseV} className="mt-8 max-w-lg text-lg text-neutral-400">
                Cinematic, reporterski styl bez pozowania. Operujemy światłem
                jak filmem — utrwalamy nie wydarzenia, ale ulotność chwili.
              </motion.p>
              <motion.div variants={filmRiseV} className="mt-10 flex flex-wrap items-center gap-4">
                <a href={`mailto:${brand.email}`}
                   className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-neutral-900 transition"
                   style={{ background: GOLD }}>
                  Zapytaj o termin
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
                <a href="#historie" className="text-sm uppercase tracking-[0.18em] text-neutral-300 hover:text-neutral-50">
                  Zobacz historie
                </a>
              </motion.div>
            </div>

            <motion.div variants={filmRiseV} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
                <img src={heroImages[2]} alt="Plener ślubny" className="absolute inset-0 size-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-300">
                  <span>Frame 047 — Barcelona</span>
                  <span style={{ color: GOLD }}>2024 · 35mm</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden aspect-square w-48 overflow-hidden rounded-sm border border-white/10 sm:block">
                <img src={heroImages[4]} alt="" className="size-full object-cover" />
              </div>
              {/* Floating pricing card */}
              <div className="absolute -right-4 top-8 hidden border border-white/10 bg-black/70 p-4 backdrop-blur-md sm:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>★ pakiety od</p>
                <p className="mt-2 font-display text-3xl">2699 zł</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS strip */}
        <div className="border-y border-white/5 bg-black/30">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  {s.note}
                </p>
                <p className="mt-2 font-display text-4xl text-neutral-50">{s.value}</p>
                <p className="mt-1 text-xs text-neutral-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Press marquee */}
        <div className="border-b border-white/5 bg-black/40">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            <span style={{ color: GOLD }}>EST. 2010</span>
            {pressBadges.map((p) => (
              <span key={p.label} className="flex items-center gap-3">
                <span aria-hidden style={{ color: GOLD }}>•</span>
                <span>{p.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto split */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">
              01 · Manifest
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-neutral-50 sm:text-5xl">
              Światło buduje nastrój i&nbsp;oddaje głębię świata.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-neutral-400">
            <p>{aboutBlocks[0].body}</p>
            <p>{aboutBlocks[1].body}</p>
          </div>
        </div>
      </section>

      {/* PROCESS — 4-step on dark, gold accents */}
      <section className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">02 · Process</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
                Jak pracujemy
              </h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.step} className="bg-[#0A0908] p-7">
                <p className="font-display text-5xl leading-none" style={{ color: GOLD }}>
                  {p.step}
                </p>
                <h3 className="mt-6 font-display text-xl text-neutral-50">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories */}
      <section id="historie" className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">03 · Reportaże</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
                Historie miłosne
              </h2>
            </div>
            <a href="#" className="hidden text-sm uppercase tracking-[0.18em] text-neutral-400 hover:text-neutral-50 sm:block">
              Wszystkie reportaże →
            </a>
          </div>
          <motion.ul
            variants={cardGridV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={cardV} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
                    <img src={s.image} alt={s.title} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        {String(i + 1).padStart(2, "0")} · {s.style}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-neutral-50">{s.couple}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-neutral-500">{s.venue}</p>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* TESTIMONIALS — letterbox quote column */}
      <section className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">
            04 · Co mówią pary
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
            Listy do nas
          </h2>
          <ul className="mt-14 space-y-12">
            {testimonials.slice(0, 4).map((t, i) => (
              <li key={t.author} className="border-t border-white/10 pt-8">
                <div className="grid items-start gap-6 md:grid-cols-[auto_1fr]">
                  <div className="size-16 overflow-hidden rounded-full border" style={{ borderColor: GOLD }}>
                    <img src={t.image} alt="" className="size-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5" style={{ color: GOLD }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} viewBox="0 0 24 24" className="size-3 fill-current">
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.6-6.2 4.6 2.4-7.4L2 9.4h7.6z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-3 font-display text-2xl italic leading-relaxed text-neutral-100 sm:text-3xl">
                      „{t.quote}"
                    </p>
                    <div className="mt-4 flex items-baseline justify-between">
                      <p className="font-display text-lg text-neutral-50">— {t.author}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services list */}
      <section id="oferta" className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">05 · Oferta</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
            To, co możemy razem stworzyć
          </h2>
          <ul className="mt-12 divide-y divide-white/5 border-y border-white/10">
            {services.map((sv, i) => (
              <li key={sv.slug}>
                <a href="#" className="group flex items-center justify-between gap-6 py-6 transition hover:bg-white/[0.02]">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs" style={{ color: GOLD }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl text-neutral-100 transition group-hover:text-neutral-50 sm:text-3xl">
                      {sv.title}
                    </h3>
                  </div>
                  <span className="hidden max-w-md text-sm text-neutral-500 md:block">{sv.hint}</span>
                  <span aria-hidden className="font-mono text-xs transition group-hover:translate-x-1" style={{ color: GOLD }}>→</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Deliverables */}
          <div className="mt-16 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="border border-white/10 p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Co dostajecie
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-5">
                {deliverables.map((d) => (
                  <li key={d.title}>
                    <h4 className="font-display text-lg text-neutral-50">{d.title}</h4>
                    <p className="mt-1 text-xs text-neutral-500">{d.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between border p-7" style={{ borderColor: GOLD }}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
                  pakiety ślubne
                </p>
                <p className="mt-3 font-display text-6xl leading-none text-neutral-50">2699 zł</p>
                <p className="mt-3 text-sm text-neutral-400">cena startowa, wycena indywidualna</p>
              </div>
              <a href={`mailto:${brand.email}`}
                 className="mt-6 text-sm uppercase tracking-[0.2em] underline underline-offset-4"
                 style={{ color: GOLD }}>
                Pełny cennik →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">06 · FAQ</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
            Zanim do nas napiszecie
          </h2>
          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faq.map((f) => (
              <li key={f.q}>
                <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6">
                    <h3 className="font-display text-xl text-neutral-100 sm:text-2xl">{f.q}</h3>
                    <span aria-hidden className="font-display text-2xl transition group-open:rotate-45" style={{ color: GOLD }}>+</span>
                  </summary>
                  <p className="mt-3 text-neutral-400">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/5 py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl tracking-tight text-neutral-50 sm:text-7xl">
            Zarezerwujcie <em className="font-light" style={{ color: GOLD }}>termin</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-neutral-400">
            Odpowiadamy zwykle w ciągu jednego dnia. W mailu podajcie datę,
            miejsce ślubu i wesela oraz telefon kontaktowy.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { label: "Telefon", value: brand.phone, href: `tel:${brand.phoneDigits}` },
              { label: "E-mail", value: brand.email, href: `mailto:${brand.email}` },
              { label: "Studio", value: `${brand.address.line1}, ${brand.address.line2}`, href: brand.social.maps },
            ].map((c) => (
              <a key={c.label} href={c.href} className="bg-[#0A0908] p-6 text-left transition hover:bg-white/[0.03]">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{c.label}</p>
                <p className="mt-2 text-sm text-neutral-100">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full" style={{ background: GOLD }} />
                <span className="font-display text-2xl text-neutral-50">Świetliste</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-neutral-400">
                Cinematic wedding photography · est. 2010. Działamy z Osielska na cały kraj.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
                {brand.tagline}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">Pracownia</p>
              <ul className="mt-4 space-y-2 text-sm">
                {services.slice(0, 5).map((sv) => (
                  <li key={sv.slug}>
                    <a href="#" className="text-neutral-300 hover:text-neutral-50">{sv.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">Kontakt</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href={`tel:${brand.phoneDigits}`} className="text-neutral-300 hover:text-neutral-50">{brand.phone}</a></li>
                <li><a href={`mailto:${brand.email}`} className="text-neutral-300 hover:text-neutral-50">{brand.email}</a></li>
                <li className="text-neutral-300">{brand.address.line1}</li>
                <li className="text-neutral-300">{brand.address.line2}</li>
                <li><a href={brand.social.facebook} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-neutral-50">facebook /swietliste</a></li>
              </ul>
            </div>
          </div>
          <p className="pt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            © {new Date().getFullYear()} Świetliste — Fotografujemy emocje
          </p>
        </div>
      </footer>
    </main>
  );
}
