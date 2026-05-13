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

// Luxury runway reveal: horizontal clip-path mask, slow 1.2s ease
const couture: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: ease.luxury },
  },
};
const heroV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};
const slowFadeV: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: ease.luxury } },
};
const goldDashV: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, transition: { duration: 1.0, ease: ease.luxury } },
};
const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/**
 * Example 10 — Luxury Bodoni (v2)
 * Bodoni Moda + Jost geometric. Champagne accent on bone background.
 * Added: N°-series stats, maison process, collected letters testimonials,
 * couture FAQ, deliverables index, atelier footer.
 */
const ACCENT = "#B49464";

export default function Example10Page() {
  return (
    <main className="min-h-dvh font-jost text-stone-900" style={{ background: "#FAFAF6" }}>
      <header className="border-b border-stone-300">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-6">
          <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-stone-500 hover:text-stone-900">← przykłady</Link>
          <div className="font-bodoni text-2xl tracking-[0.2em]">ŚWIETLISTE</div>
          <a href={`tel:${brand.phoneDigits}`} className="text-[10px] uppercase tracking-[0.4em] text-stone-500 hover:text-stone-900">
            {brand.phone}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-8 py-24 sm:py-32">
          <motion.div
            initial="hidden" animate="show" variants={heroV}
            className="grid items-end gap-16 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <motion.div variants={goldDashV} aria-hidden className="h-px w-24 origin-left bg-current" style={{ color: ACCENT }} />
              <motion.p variants={slowFadeV} className="mt-6 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
                Wedding photography · maison since 2010
              </motion.p>
              <h1 className="mt-10 font-bodoni leading-[0.95] text-stone-900"
                  style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", fontWeight: 400 }}>
                <motion.span variants={couture} className="inline-block" style={{ fontWeight: 900 }}>Świetliste</motion.span>
                <br />
                <motion.em variants={couture} className="inline-block font-light" style={{ fontStyle: "italic" }}>emocje</motion.em>
                <motion.span variants={couture} className="inline-block" style={{ color: ACCENT, fontWeight: 900 }}>.</motion.span>
              </h1>
              <motion.p variants={slowFadeV} className="mt-10 max-w-md text-base leading-relaxed text-stone-700">
                Artystyczna fotografia ślubna w reporterskim stylu. Operujemy
                światłem i dyskrecją dla par, które cenią sobie ponadczasową
                elegancję i prawdę chwili.
              </motion.p>
              <motion.div variants={slowFadeV} className="mt-10 flex flex-wrap items-center gap-6">
                <a href={`mailto:${brand.email}`}
                   className="rounded-none px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition"
                   style={{ background: "#1F1F1F" }}>
                  Zapytaj o termin
                </a>
                <a href="#historie"
                   className="text-[10px] uppercase tracking-[0.3em] text-stone-700 underline underline-offset-8 hover:text-stone-900"
                   style={{ textDecorationColor: ACCENT, textUnderlineOffset: "8px" }}>
                  Atelier portfolio
                </a>
              </motion.div>
            </div>

            <motion.div variants={couture} className="md:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={heroImages[0]} alt="Świetliste sesja" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="mt-3 flex items-baseline justify-between text-[10px] uppercase tracking-[0.3em] text-stone-500">
                <span>Plate I</span>
                <span style={{ color: ACCENT }}>—</span>
                <span>Bożenkowo · 2019</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* N° series stats */}
      <section className="border-b border-stone-300 bg-white/50">
        <div className="mx-auto max-w-[1500px] px-8 py-16">
          <p className="text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
            — maison index —
          </p>
          <ul className="mt-10 grid grid-cols-2 divide-stone-300 md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <li key={s.label} className={`px-4 ${i > 0 ? "" : ""}`}>
                <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                  N° 0{i + 1}
                </p>
                <p className="mt-4 font-bodoni text-stone-900"
                   style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 400, lineHeight: 0.9 }}>
                  {s.value}
                </p>
                <p className="mt-3 text-sm italic text-stone-700">{s.label}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-stone-500">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Atelier values */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — Maison philosophy
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 400 }}>
              Każdy detal — <em className="font-light" style={{ fontStyle: "italic" }}>nieoczywisty.</em>
            </h2>
          </div>
          <ul className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {aboutBlocks.map((b, i) => (
              <li key={b.heading} className="border-t border-stone-900 pt-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">N° 0{i + 1}</p>
                <h3 className="mt-4 font-bodoni text-3xl text-stone-900" style={{ fontWeight: 400 }}>
                  {b.heading}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-stone-700">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS — maison steps */}
      <section className="border-b border-stone-300 bg-white/40">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — atelier process
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 400 }}>
              Cztery etapy<em style={{ fontStyle: "italic", fontWeight: 300 }}>, jedna historia.</em>
            </h2>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden border border-stone-300 bg-stone-300 md:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.step} className="bg-[#FAFAF6] p-8">
                <p className="font-bodoni text-7xl leading-none" style={{ color: ACCENT, fontWeight: 300, fontStyle: "italic" }}>
                  {p.step}
                </p>
                <h3 className="mt-8 font-bodoni text-2xl text-stone-900" style={{ fontWeight: 400 }}>{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories */}
      <section id="historie" className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — atelier portfolio
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 400 }}>
              Historie<em style={{ fontStyle: "italic", fontWeight: 300 }}>, fragmenty.</em>
            </h2>
          </div>
          <motion.ul
            variants={listV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={slowFadeV} className={i % 3 === 1 ? "md:mt-16" : ""}>
                <article className="group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={s.image} alt={s.title} className="size-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-5 border-t border-stone-300 pt-3 text-[10px] uppercase tracking-[0.4em] text-stone-500">
                    {String(i + 1).padStart(3, "0")} · {s.style}
                  </div>
                  <h3 className="mt-3 font-bodoni text-3xl leading-tight text-stone-900" style={{ fontWeight: 400 }}>
                    {s.couple}
                  </h3>
                  <p className="mt-2 text-sm italic text-stone-500">{s.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">{s.blurb}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-stone-500">Venue · {s.venue}</p>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* TESTIMONIALS — collected letters */}
      <section className="border-b border-stone-300 bg-white/40">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="mb-14 grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — letters
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 400 }}>
              Listy<em style={{ fontStyle: "italic", fontWeight: 300 }}>, zebrane.</em>
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {testimonials.slice(0, 4).map((t, i) => (
              <li key={t.author} className="grid items-start gap-6 md:grid-cols-[auto_1fr]">
                <div className="size-20 overflow-hidden border-2" style={{ borderColor: ACCENT }}>
                  <img src={t.image} alt="" className="size-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                    N° 0{i + 1}
                  </p>
                  <p className="mt-3 font-bodoni text-2xl italic leading-snug text-stone-900" style={{ fontWeight: 400 }}>
                    „{t.quote}"
                  </p>
                  <div className="mt-4 border-t border-stone-300 pt-3">
                    <p className="font-bodoni text-lg text-stone-900" style={{ fontWeight: 400 }}>— {t.author}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{t.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing splash */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-8 py-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
            — collection 2026 —
          </p>
          <p className="mt-8 font-bodoni text-stone-900"
             style={{ fontSize: "clamp(4rem, 14vw, 14rem)", fontWeight: 300, lineHeight: 0.9 }}>
            od <em style={{ fontStyle: "italic", fontWeight: 700 }}>2699</em>
            <span style={{ color: ACCENT, fontWeight: 700 }}>zł</span>
          </p>
          <p className="mt-8 text-sm text-stone-700">
            Pakiety reportażu ślubnego — wycena indywidualna.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="border-b border-stone-300 bg-white/40">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — atelier services
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400 }}>
              Indeks usług<em style={{ fontStyle: "italic", fontWeight: 300 }}>.</em>
            </h2>
          </div>
          <ul className="mt-12 divide-y divide-stone-300 border-y border-stone-900">
            {services.map((sv, i) => (
              <li key={sv.slug}>
                <a href="#" className="group grid grid-cols-12 items-baseline gap-4 py-7">
                  <span className="col-span-2 text-[10px] uppercase tracking-[0.4em] text-stone-500 md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="col-span-10 font-bodoni text-3xl text-stone-900 md:col-span-5" style={{ fontWeight: 400 }}>
                    {sv.title}
                  </h3>
                  <p className="col-span-12 text-sm text-stone-600 md:col-span-5">{sv.hint}</p>
                  <span className="col-span-12 text-right text-[10px] uppercase tracking-[0.4em] md:col-span-1" style={{ color: ACCENT }}>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Deliverables */}
          <div className="mt-16 border-t border-stone-900 pt-10">
            <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
              — what you receive
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              {deliverables.map((d, i) => (
                <li key={d.title}>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">N° 0{i + 1}</p>
                  <h4 className="mt-2 font-bodoni text-2xl" style={{ fontWeight: 400 }}>{d.title}</h4>
                  <p className="mt-1 text-xs text-stone-600">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1100px] px-8 py-24">
          <div className="grid items-baseline gap-10 md:grid-cols-12">
            <p className="md:col-span-3 text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
              — q&a
            </p>
            <h2 className="md:col-span-9 font-bodoni leading-[0.95] text-stone-900"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400 }}>
              Pytania, <em style={{ fontStyle: "italic", fontWeight: 300 }}>na które odpowiadamy.</em>
            </h2>
          </div>
          <ul className="mt-12 divide-y divide-stone-300 border-y border-stone-900">
            {faq.map((f, i) => (
              <li key={f.q}>
                <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6">
                    <h3 className="font-bodoni text-2xl text-stone-900" style={{ fontWeight: 400 }}>
                      <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                        N° 0{i + 1} ·{" "}
                      </span>
                      {f.q}
                    </h3>
                    <span aria-hidden className="font-bodoni text-3xl transition group-open:rotate-45" style={{ color: ACCENT }}>+</span>
                  </summary>
                  <p className="mt-4 text-stone-700">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-b border-stone-300 bg-white/40">
        <div className="mx-auto max-w-[1500px] px-8 py-12">
          <p className="text-center text-[10px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
            — as recommended by —
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-2 font-bodoni text-xl italic text-stone-700">
            {pressBadges.map((p) => <li key={p.label}>{p.label}.</li>)}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-[10px] uppercase tracking-[0.5em]" style={{ color: ACCENT }}>
                — maison contact
              </p>
              <h2 className="mt-6 font-bodoni leading-[0.95] text-stone-900"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", fontWeight: 400 }}>
                Zarezerwujcie
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 300 }}>termin</em>
                <span style={{ color: ACCENT, fontWeight: 700 }}>.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm text-stone-700">
                Odpowiadamy zwykle w ciągu jednego dnia. W mailu podajcie datę,
                miejsce ślubu i wesela oraz telefon.
              </p>
            </div>
            <div className="space-y-8 md:col-span-6">
              {[
                { label: "Telefon", value: brand.phone, href: `tel:${brand.phoneDigits}` },
                { label: "E-mail", value: brand.email, href: `mailto:${brand.email}` },
                {
                  label: "Atelier",
                  value: `${brand.address.line1}, ${brand.address.line2}, ${brand.address.near}`,
                  href: brand.social.maps,
                },
                {
                  label: "Facebook",
                  value: "facebook.com/swietliste",
                  href: brand.social.facebook,
                },
              ].map((c) => (
                <a key={c.label} href={c.href} className="block border-t border-stone-900 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">{c.label}</p>
                  <p className="mt-2 font-bodoni text-2xl text-stone-900" style={{ fontWeight: 400 }}>{c.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atelier footer */}
      <footer className="bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-[1500px] px-8 py-14">
          <div className="grid gap-10 border-b border-stone-700 pb-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-bodoni text-3xl tracking-[0.2em]" style={{ fontWeight: 400 }}>ŚWIETLISTE</p>
              <p className="mt-3 text-sm text-stone-400">
                Atelier of artistic wedding photography — maison since 2010,{" "}
                <span style={{ color: ACCENT }}>{brand.tagline}</span>.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Atelier</p>
              <ul className="mt-3 space-y-1 text-sm">
                {services.slice(0, 5).map((sv) => (
                  <li key={sv.slug}><a href="#" className="hover:text-white">{sv.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Contact</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li><a href={`tel:${brand.phoneDigits}`} className="hover:text-white">{brand.phone}</a></li>
                <li><a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a></li>
                <li>{brand.address.line1}</li>
                <li>{brand.address.line2}</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 text-[10px] uppercase tracking-[0.4em] text-stone-500">
            <span>© {new Date().getFullYear()} Świetliste</span>
            <span style={{ color: ACCENT }}>—</span>
            <span>Fotografujemy emocje · est. 2010</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
