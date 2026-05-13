"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants, type MotionValue } from "motion/react";
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

// Cinematic reveal — slow, deliberate, scene-by-scene
const sceneListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const sceneV: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: ease.outSmooth } },
};

/** Each gallery image inside a story scales 1.1 → 1 as it scrolls into the viewport. */
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 0.95]);
  return (
    <div ref={ref} className="size-full overflow-hidden">
      <motion.img src={src} alt={alt} style={{ scale }} className="size-full object-cover" />
    </div>
  );
}

/** Film strip translates sideways as user scrolls past — like a real film reel moving. */
function ScrollingFilmStrip({ scroll }: { scroll: MotionValue<number> }) {
  const x = useTransform(scroll, [0, 1], ["0%", "-25%"]);
  return (
    <div className="overflow-hidden">
      <motion.div style={{ x }} className="flex h-6 w-[160%] items-stretch bg-black">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="m-1 flex-1 border border-white/15" />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Example 8 — Cinematic Scroll (v2)
 * Reads like a film reel. Each section is a "chapter" with a sticky chapter
 * label and a deliberate atmosphere. Replaced the plain image grid with a
 * proper cinematic sequence (wide → medium → close-up) + added stats,
 * testimonials, process, FAQ chapters. Subtle film-strip motif throughout.
 */
function ChapterLabel({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={sceneListV}
      className="mb-12 grid items-end gap-8 md:grid-cols-12"
    >
      <motion.p variants={sceneV} className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.4em] text-stone-500">
        Chapter {index}
      </motion.p>
      <motion.h2 variants={sceneV} className="md:col-span-9 font-display text-5xl italic leading-tight sm:text-7xl">
        {title}
      </motion.h2>
    </motion.div>
  );
}

function FilmStripDivider() {
  return (
    <div className="flex h-6 w-full items-stretch bg-black">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="m-1 flex-1 border border-white/15" />
      ))}
    </div>
  );
}

export default function Example8Page() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // As user scrolls past the hero, image scales up subtly and text fades + drifts down
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.18]);
  const heroImageOpacity = useTransform(heroProgress, [0, 1], [1, 0.4]);
  const heroTextY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  // For the scrolling filmstrip — drives off the whole page progress
  const { scrollYProgress: pageProgress } = useScroll();

  return (
    <main className="bg-white font-garamond text-stone-900">
      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500 mix-blend-difference lg:block">
        Świetliste · reel 2026
      </div>

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6 text-stone-100 mix-blend-difference">
          <div className="font-display text-base italic">Świetliste</div>
          <a href={`mailto:${brand.email}`} className="text-xs uppercase tracking-[0.3em] opacity-80 hover:opacity-100">
            kontakt
          </a>
        </div>
      </header>

      {/* CHAPTER 00 — full-bleed cinematic hero with scroll parallax */}
      <section ref={heroRef} className="relative h-dvh w-full overflow-hidden">
        <motion.img
          src={heroImages[0]}
          alt="Świetliste hero"
          style={{ scale: heroImageScale, opacity: heroImageOpacity }}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/75" />
        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-16 pt-32 text-center text-white"
        >
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-[11px] uppercase tracking-[0.5em]"
          >
            Reel · wedding photography · est. 2010
          </motion.p>

          <motion.div
            initial="hidden" animate="show" variants={sceneListV}
          >
            <motion.p variants={sceneV} className="font-mono text-[11px] uppercase tracking-[0.5em] opacity-80">
              Chapter 00 · prologue
            </motion.p>
            <motion.h1 variants={sceneV} className="mt-6 font-display text-6xl italic leading-[0.95] sm:text-8xl md:text-[140px]">
              Fotografujemy
              <br />
              emocje.
            </motion.h1>
            <motion.p variants={sceneV} className="mx-auto mt-6 max-w-md text-lg opacity-90">
              Zaraz opowiemy Wam sześć historii o świetle, śmiechu i łzach.
            </motion.p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-70"
          >
            ↓ scroll to begin
          </motion.div>
        </motion.div>
      </section>

      <ScrollingFilmStrip scroll={pageProgress} />

      {/* CHAPTER 01 — Manifesto + stats */}
      <section className="relative py-32 sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <ChapterLabel index="01" title="Światło buduje nastrój, oddaje głębię świata." />
          <div className="grid items-start gap-12 md:grid-cols-12">
            <p className="md:col-span-7 md:col-start-4 text-xl leading-relaxed text-stone-700">
              {aboutBlocks[0].body}
            </p>
          </div>
          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-stone-300 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                  {s.note}
                </p>
                <p className="mt-3 font-display text-5xl italic leading-none text-stone-900">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-stone-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 02 — CINEMATIC SCENE (rebuilt: wide / medium / close-up) */}
      <section className="relative bg-stone-950 text-stone-100">
        <div className="mx-auto max-w-[1600px] px-6 py-28 sm:py-40">
          <ChapterLabel index="02" title="Operujemy światłem, jak filmem." />

          {/* SCENE 01 — establishing shot (wide) with parallax */}
          <div className="mb-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            <span>SCENE 01 · establishing</span>
            <span>WIDE · 35mm · f1.4</span>
          </div>
          <figure className="relative aspect-[21/9] w-full overflow-hidden">
            <div className="absolute inset-0">
              <ParallaxImage src={heroImages[1]} alt="Establishing shot" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8">
              <p className="font-display text-3xl italic sm:text-5xl">
                „A dawn so quiet you could hear the dress breathing."
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-400">
                Take 01 · 05:42 · Toruń
              </p>
            </figcaption>
          </figure>

          {/* SCENE 02 — medium shots (2-up) */}
          <div className="mt-12 mb-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            <span>SCENE 02 · medium · the moment</span>
            <span>50mm</span>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <figure className="col-span-12 md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={heroImages[2]} alt="Medium shot" className="size-full object-cover" />
              </div>
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                — Take 02 · plener
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={heroImages[3]} alt="Medium shot" className="size-full object-cover" />
              </div>
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                — Take 03 · pierwszy taniec
              </figcaption>
            </figure>
          </div>

          {/* SCENE 03 — close-ups (filmstrip) */}
          <div className="mt-12 mb-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            <span>SCENE 03 · close-ups · detail</span>
            <span>85mm · f1.8</span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[heroImages[4], heroImages[5], featuredStories[3].image, featuredStories[5].image].map((src, i) => (
              <figure key={i}>
                <div className="aspect-square overflow-hidden">
                  <img src={src} alt={`Close-up ${i + 1}`} className="size-full object-cover" />
                </div>
                <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                  Frame 0{i + 4} · detail
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Closing block quote */}
          <div className="mt-20 border-l-2 border-stone-700 pl-8">
            <p className="font-display text-2xl italic text-stone-300 sm:text-4xl">
              "Nie ingerujemy. Patrzymy."
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
              — manifest świetliste, fragment
            </p>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 03 — STORIES */}
      <section className="py-32 sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <ChapterLabel index="03" title="Sześć opowieści o miłości." />
        </div>
        {featuredStories.map((s, i) => (
          <motion.article
            key={s.slug}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={sceneListV}
            className="mx-auto mb-32 max-w-[1400px] px-6 last:mb-0 sm:mb-44"
          >
            <div className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <motion.div variants={sceneV} className="md:col-span-7">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <ParallaxImage src={s.image} alt={s.title} />
                </div>
              </motion.div>
              <motion.div variants={sceneV} className="md:col-span-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                  Story {String(i + 1).padStart(2, "0")} · {s.style}
                </p>
                <h3 className="mt-4 font-display text-5xl italic leading-tight sm:text-6xl">
                  {s.couple}
                </h3>
                <p className="mt-2 text-lg italic text-stone-500">{s.title}</p>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">{s.blurb}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                  Venue · {s.venue}
                </p>
                <a href="#" className="mt-6 inline-block border-b border-stone-400 pb-1 text-sm uppercase tracking-[0.2em] hover:border-stone-900">
                  Zobacz pełną historię →
                </a>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </section>

      <FilmStripDivider />

      {/* CHAPTER 04 — PROCESS (timeline) */}
      <section className="bg-stone-100 py-32 sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <ChapterLabel index="04" title="Cztery etapy, jedna historia." />
          <ol className="relative mt-12 space-y-12 border-l-2 border-stone-900/15 pl-12">
            {processSteps.map((p) => (
              <li key={p.step} className="relative">
                <span className="absolute -left-[60px] flex size-12 items-center justify-center rounded-full border-2 border-stone-900 bg-white font-display text-lg italic">
                  {p.step}
                </span>
                <h3 className="font-display text-3xl italic">{p.title}</h3>
                <p className="mt-2 max-w-2xl text-lg text-stone-700">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 05 — TESTIMONIALS as letterboxed monologues */}
      <section className="bg-black py-32 text-stone-100 sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <ChapterLabel index="05" title={`„Listy, które dostaliśmy od par."`} />
          <ul className="mt-12 space-y-16">
            {testimonials.slice(0, 3).map((t, i) => (
              <li key={t.author}>
                <article className="grid items-center gap-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={t.image} alt="" className="size-full object-cover" />
                    </div>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                      Reel {String(i + 1).padStart(2, "0")} · {t.detail}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <svg viewBox="0 0 36 36" className="size-10 fill-stone-700">
                      <path d="M13 8c-4 2-7 6-7 12v8h10V18H10c0-3 2-5 4-6l-1-4zm15 0c-4 2-7 6-7 12v8h10V18H25c0-3 2-5 4-6l-1-4z" />
                    </svg>
                    <p className="mt-6 font-display text-3xl italic leading-relaxed sm:text-4xl">
                      „{t.quote}"
                    </p>
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.4em] text-stone-400">
                      — {t.author}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 06 — SERVICES + DELIVERABLES */}
      <section className="bg-stone-100 py-32 sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <ChapterLabel index="06" title="Co możemy razem stworzyć." />
          <ul className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {services.map((sv, i) => (
              <li key={sv.slug} className="border-t border-stone-300 pt-5">
                <p className="font-mono text-xs text-stone-500">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-3xl italic">{sv.title}</h3>
                <p className="mt-2 text-stone-600">{sv.hint}</p>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid items-stretch gap-6 md:grid-cols-2">
            <div className="border border-stone-900 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
                Co dostajecie
              </p>
              <ul className="mt-6 divide-y divide-stone-300">
                {deliverables.map((d) => (
                  <li key={d.title} className="flex items-start justify-between gap-4 py-4">
                    <h4 className="font-display text-xl italic">{d.title}</h4>
                    <p className="max-w-xs text-right text-xs text-stone-600">{d.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-950 p-8 text-stone-100">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-400">
                ★ pakiety
              </p>
              <p className="mt-3 font-display text-7xl italic leading-none">
                od 2699 zł
              </p>
              <p className="mt-6 text-stone-400">
                Wycena indywidualna. Każda historia inna — pakiet dopasowujemy
                do długości dnia, miejsca i Waszego stylu.
              </p>
              <a href={`mailto:${brand.email}`} className="mt-8 inline-block border-b border-stone-400 pb-1 text-sm uppercase tracking-[0.2em] hover:border-white hover:text-white">
                Poproś o pełny cennik →
              </a>
            </div>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 07 — FAQ */}
      <section className="py-32 sm:py-44">
        <div className="mx-auto max-w-[1000px] px-6">
          <ChapterLabel index="07" title="Pytania, które zwykle dostajemy." />
          <ul className="divide-y divide-stone-300 border-y border-stone-300">
            {faq.map((f) => (
              <li key={f.q}>
                <MotionAccordionItem
                  trigger={({ isOpen }) => (
                    <div className="flex items-baseline justify-between gap-6 py-6">
                      <h3 className="font-display text-2xl italic">{f.q}</h3>
                      <span aria-hidden className={`font-display text-3xl italic text-stone-400 transition duration-300 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  )}
                >
                  <p className="pb-6 text-stone-700">{f.a}</p>
                </MotionAccordionItem>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            polecani przez · jako widziani w
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 font-display text-lg italic text-stone-700">
            {pressBadges.map((p) => (
              <li key={p.label}>{p.label}</li>
            ))}
          </ul>
        </div>
      </section>

      <FilmStripDivider />

      {/* CHAPTER 08 — FINALE */}
      <section className="relative bg-black py-32 text-white sm:py-44">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-stone-500">
            Chapter 08 · finale
          </p>
          <h2 className="mt-6 font-display text-6xl italic leading-tight sm:text-8xl">
            Do zobaczenia.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-stone-400">
            Zarezerwujcie termin już dziś — opowiemy Waszą historię z całą jej
            ulotnością.
          </p>
          <div className="mt-16 mx-auto grid max-w-3xl grid-cols-1 gap-px overflow-hidden bg-white/15 sm:grid-cols-3">
            <a href={`tel:${brand.phoneDigits}`} className="bg-black p-6 text-left transition hover:bg-stone-900">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">tel.</p>
              <p className="mt-2 font-display text-xl italic">{brand.phone}</p>
            </a>
            <a href={`mailto:${brand.email}`} className="bg-black p-6 text-left transition hover:bg-stone-900">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">e-mail</p>
              <p className="mt-2 font-display text-xl italic">{brand.email}</p>
            </a>
            <a href={brand.social.maps} className="bg-black p-6 text-left transition hover:bg-stone-900">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">studio</p>
              <p className="mt-2 font-display text-xl italic">
                {brand.address.line1}, {brand.address.line2}
              </p>
            </a>
          </div>
          <p className="mt-20 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">
            — fin — Świetliste · Fotografujemy emocje · est. 2010
          </p>
        </div>
      </section>
    </main>
  );
}
