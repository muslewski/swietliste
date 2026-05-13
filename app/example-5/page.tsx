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

// Art-book restraint: only borders draw in like ink, text just fades — slowly.
const inkV: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: ease.outSmooth } },
};
const slowFadeV: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: "linear" } },
};
const plateV: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.outSmooth } },
};
const plateListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/**
 * Example 5 — Monochrome Art Book (v2)
 * Print catalogue. Pure black/white, no shadows, divider-driven. Serif-only.
 * Added: stats as bordered grid, testimonials as full plates with bio,
 * process as step-table, FAQ as Q&A index, deliverables, colophon footer.
 */
export default function Example5Page() {
  return (
    <main className="min-h-dvh bg-white text-black [&_*]:rounded-none">
      <header className="border-b-[3px] border-black">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <div className="font-display text-lg font-black tracking-tight">ŚWIETLISTE</div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">VOL. 01 / 2026</span>
        </div>
      </header>

      {/* Masthead */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="flex items-baseline justify-between border-b border-black pb-3 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span>Wedding photography</span>
            <span>Osielsko · Bydgoszcz · cała Polska</span>
            <span>est. 2010</span>
          </div>
          <motion.h1
            initial="hidden" animate="show" variants={slowFadeV}
            className="mt-12 font-display text-7xl leading-[0.9] tracking-tighter sm:text-9xl md:text-[180px]"
          >
            Fotografujemy
            <br />
            <em className="font-light">emocje.</em>
          </motion.h1>
          {/* Hairline ink rule draws in under headline */}
          <motion.div
            initial="hidden" animate="show" variants={inkV}
            transition={{ delay: 0.6 }}
            aria-hidden
            className="mt-12 h-[3px] w-full bg-black"
          />
          <div className="mt-12 grid grid-cols-12 border-t-[2px] border-black pt-6">
            <p className="col-span-12 font-source-serif text-xl italic leading-relaxed md:col-span-7">
              W fotografii to światło buduje nastrój i oddaje głębię świata.
              Nie chcemy rejestrować rzeczywistości — utrwalamy smak i kolor
              chwil. Wasze wzruszenia, śmiech, miłość, radość i łzy.
            </p>
            <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">W tym wydaniu</p>
              <ol className="mt-3 space-y-1 font-source-serif text-sm">
                <li>I — Manifest & proporcje</li>
                <li>II–VII — Plates · reportaże</li>
                <li>VIII — Etapy współpracy</li>
                <li>IX — Listy od par</li>
                <li>X — Indeks usług & cennik</li>
                <li>XI — Pytania & odpowiedzi</li>
                <li>XII — Colophon · kontakt</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b-[3px] border-black">
        <img src={heroImages[0]} alt="Świetliste — rustykalna sesja" className="aspect-[21/9] w-full object-cover grayscale" />
        <div className="mx-auto max-w-[1400px] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em]">
          Plate I — Bożenkowo, 2019. Slow wedding, szklana stodoła.
        </div>
      </section>

      {/* STATS — bordered grid like an index */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between border-b-2 border-black pb-3">
            <h2 className="font-display text-4xl tracking-tight">Proporcje studia</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">cz. I · index</p>
          </div>
          <ul className="grid grid-cols-2 border-t-2 border-black md:grid-cols-4">
            {stats.map((s, i) => (
              <li key={s.label}
                  className={`border-b-2 border-black p-6 md:border-b-0 ${
                    i < 3 ? "md:border-r-2" : ""
                  } ${i >= 2 ? "md:border-t-2" : ""}`}
                  style={{ borderRightWidth: i < 3 ? undefined : 0 }}>
                <p className="font-display text-6xl leading-none tracking-tight">{s.value}</p>
                <p className="mt-3 font-source-serif italic text-stone-700">{s.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manifesto with drop cap */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1100px] px-6 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">II · Manifest</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight">Dlaczego Świetliste?</h2>
          <p className="mt-10 font-source-serif text-xl leading-relaxed [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-[7rem] [&::first-letter]:leading-[0.8] [&::first-letter]:font-black">
            {aboutBlocks[0].body}
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-12 flex items-baseline justify-between border-b-[2px] border-black pb-4">
            <h2 className="font-display text-5xl tracking-tighter">Historie</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em]">Plates II – VII</p>
          </div>
          <motion.ul
            variants={plateListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredStories.map((s, i) => (
              <motion.li key={s.slug} variants={plateV} className="border-t border-black pt-4">
                <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span>Plate {String(i + 2).padStart(2, "0")}</span>
                  <span>{s.style}</span>
                </div>
                <div className="mt-4 aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} className="size-full object-cover grayscale transition duration-700 hover:grayscale-0" />
                </div>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{s.couple}</h3>
                <p className="mt-2 font-source-serif text-sm leading-relaxed text-stone-700">{s.blurb}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">— {s.venue}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* PROCESS — step table */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-8 flex items-baseline justify-between border-b-2 border-black pb-3">
            <h2 className="font-display text-5xl tracking-tight">Etapy współpracy</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em]">cz. VIII</p>
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {processSteps.map((p) => (
                <tr key={p.step} className="border-t-2 border-black">
                  <td className="w-32 py-6 align-top">
                    <span className="font-display text-5xl tracking-tight">{p.step}</span>
                  </td>
                  <td className="w-1/3 py-6 align-top">
                    <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                  </td>
                  <td className="py-6 align-top font-source-serif leading-relaxed text-stone-700">
                    {p.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS — plates with paired portrait + quote */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-12 flex items-baseline justify-between border-b-[2px] border-black pb-4">
            <h2 className="font-display text-5xl tracking-tighter">Listy od par</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em]">cz. IX</p>
          </div>
          <ul className="space-y-16">
            {testimonials.slice(0, 4).map((t, i) => (
              <li key={t.author} className="border-t border-black pt-6">
                <div className="grid items-start gap-8 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={t.image} alt="" className="size-full object-cover grayscale" />
                    </div>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em]">
                      Plate IX-{String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-display text-3xl italic leading-snug tracking-tight sm:text-4xl">
                      „{t.quote}"
                    </p>
                    <div className="mt-6 flex items-baseline justify-between border-t border-black pt-3">
                      <p className="font-display text-xl tracking-tight">— {t.author}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services — table */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-5xl tracking-tight">Indeks usług</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em]">cz. X · {brand.pricing.label}</p>
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {services.map((sv, i) => (
                <tr key={sv.slug} className="border-t-[2px] border-black">
                  <td className="w-12 py-5 align-top font-mono text-xs text-neutral-500">{String(i + 1).padStart(2, "0")}</td>
                  <td className="w-1/3 py-5 align-top">
                    <span className="font-display text-2xl tracking-tight">{sv.title}</span>
                  </td>
                  <td className="py-5 align-top font-source-serif leading-relaxed text-stone-700">{sv.hint}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Deliverables sidebar */}
          <div className="mt-12 grid gap-8 border-t-[3px] border-black pt-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">Co dostajecie</p>
              <ul className="mt-4 divide-y-2 divide-black border-y-2 border-black">
                {deliverables.map((d) => (
                  <li key={d.title} className="grid grid-cols-12 py-3">
                    <span className="col-span-5 font-display text-lg">{d.title}</span>
                    <span className="col-span-7 font-source-serif italic text-stone-700">{d.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-6 text-white">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400">Pakiety ślubne od</p>
              <p className="mt-3 font-display text-7xl tracking-tight leading-none">2699 zł</p>
              <p className="mt-4 font-source-serif italic text-stone-300">Wycena indywidualna. Cena startowa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <div className="mb-8 flex items-baseline justify-between border-b-2 border-black pb-3">
            <h2 className="font-display text-5xl tracking-tight">Pytania & odpowiedzi</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em]">cz. XI</p>
          </div>
          <ul className="divide-y-2 divide-black border-b-2 border-black">
            {faq.map((f, i) => (
              <li key={f.q}>
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-4 py-6">
                      <h3 className="font-display text-2xl tracking-tight">
                        <span className="font-mono text-xs text-neutral-500">Q{String(i + 1).padStart(2, "0")}</span>{" — "}
                        {f.q}
                      </h3>
                      <span aria-hidden className={`font-display text-3xl transition duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </div>
                  )}
                >
                  <p className="pb-6 font-source-serif text-lg leading-relaxed text-stone-700">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">polecani przez</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 font-display text-xl tracking-tight">
            {pressBadges.map((p) => <li key={p.label}>· {p.label} ·</li>)}
          </ul>
        </div>
      </section>

      {/* COLOPHON / Contact */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="flex items-baseline justify-between border-b-2 border-white pb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span>cz. XII · Colophon</span>
            <span>Kontakt</span>
          </div>
          <h2 className="mt-12 font-display text-5xl leading-tight tracking-tight sm:text-7xl">
            Zarezerwujcie termin.
            <br />
            <em className="font-light text-neutral-400">Do zobaczenia.</em>
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t-2 border-white pt-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Telefon</p>
              <a href={`tel:${brand.phoneDigits}`} className="mt-2 block font-display text-2xl">{brand.phone}</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">E-mail</p>
              <a href={`mailto:${brand.email}`} className="mt-2 block font-display text-2xl">{brand.email}</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Studio</p>
              <p className="mt-2 font-source-serif">{brand.address.line1}<br />{brand.address.line2}</p>
            </div>
          </div>
          <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Świetliste — Fotografujemy emocje · Vol. 01 / 2026
          </p>
        </div>
      </section>
    </main>
  );
}
