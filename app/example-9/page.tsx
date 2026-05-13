"use client";
/* eslint-disable @next/next/no-img-element */
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

// Magazine: drop-cap draws in like ink, columns reveal sequentially
const dropCapV: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  show: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.9, ease: ease.outSmooth },
  },
};
const colListV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const colV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.outSmooth } },
};
const heroV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/**
 * Example 9 — Magazine Editorial Grid (v2)
 * Newspaper-style asymmetric multi-column. Cormorant Garamond + Libre Baskerville.
 * Added: classifieds-style stats, letters-to-editor testimonials,
 * editorial process column, FAQ as advice-column, deliverables, colophon footer.
 */
export default function Example9Page() {
  return (
    <main className="min-h-dvh text-stone-900"
          style={{ background: "#F7F2EA", fontFamily: "var(--font-cormorant-garamond), serif" }}>
      {/* Masthead */}
      <header className="border-b-2 border-stone-900">
        <div className="mx-auto max-w-[1500px] px-6 py-3">
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">
            <span>nr 1 · maj 2026</span>
            <span>Bydgoszcz · Toruń · Trójmiasto</span>
          </div>
          <h1 className="my-3 text-center text-7xl tracking-tight md:text-9xl"
              style={{ fontWeight: 600 }}>
            Świetliste
          </h1>
          <div className="flex items-center justify-between border-t border-stone-900 pt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">
            <span>Fotografujemy emocje</span>
            <span>· wedding journal ·</span>
            <span>{brand.phone}</span>
          </div>
        </div>
      </header>

      {/* Lede — feature article hero */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-12">
          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 lg:col-span-8">
              <img src={heroImages[0]} alt="Slow wedding — Bożenkowo" className="aspect-[16/10] w-full object-cover" />
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">
                Plate I · Bożenkowo, 2019 · slow wedding w szklanej stodole. Fot. Świetliste.
              </figcaption>
            </figure>
            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">Reportaż wiodący</p>
              <h2 className="mt-3 text-5xl leading-tight md:text-6xl"
                  style={{ fontStyle: "italic", fontWeight: 500 }}>
                Sześć ślubów,
                <br />
                <span className="not-italic">jedna obietnica.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700"
                 style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "16px" }}>
                <motion.span
                  initial="hidden" whileInView="show" viewport={viewportOnce} variants={dropCapV}
                  className="float-left mr-2 inline-block text-7xl leading-[0.8]"
                  style={{ fontWeight: 700, fontStyle: "italic", transformOrigin: "left bottom" }}
                >
                  S
                </motion.span>
                łowo daję, że nie chcemy rejestrować rzeczywistości — chcemy
                utrwalać smak i kolor chwil. Wasze wzruszenia, śmiech, miłość,
                radość i łzy zatrzymane na zawsze, w albumach, do których
                wracacie po latach.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">
                Tekst · redakcja Świetliste
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSIFIEDS — stats strip styled as small ads */}
      <section className="border-b border-stone-300 bg-stone-50">
        <div className="mx-auto max-w-[1500px] px-6 py-6">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">
            ★ Studio w liczbach ★
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
            {stats.map((s, i) => (
              <li key={s.label}
                  className={`flex items-baseline gap-4 ${i < 3 ? "md:border-r md:border-stone-400 md:pr-6" : ""}`}>
                <p className="text-5xl" style={{ fontWeight: 700, fontStyle: "italic" }}>{s.value}</p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-stone-900">{s.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">{s.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-b border-stone-300 bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-[1500px] px-6 py-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-400">— manifest —</p>
          <blockquote className="mx-auto mt-6 max-w-4xl text-4xl leading-tight md:text-6xl"
                      style={{ fontStyle: "italic", fontWeight: 400 }}>
            „W fotografii to światło buduje nastrój i oddaje głębię świata."
          </blockquote>
        </div>
      </section>

      {/* Three-column editorial spread */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <h2 className="text-5xl leading-tight md:text-6xl" style={{ fontWeight: 600 }}>
            Co robimy?
          </h2>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">cz. I · filozofia studia</p>
          <motion.div
            variants={colListV}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 columns-1 gap-8 md:columns-2 lg:columns-3 [&>p+p]:mt-0 [&>p]:mb-4"
          >
            {aboutBlocks.map((b) => (
              <motion.p
                key={b.heading}
                variants={colV}
                className="break-inside-avoid leading-relaxed text-stone-800"
                style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "15px" }}
              >
                <strong className="block font-bold tracking-tight text-stone-900"
                        style={{ fontFamily: "var(--font-cormorant-garamond), serif", fontSize: "22px" }}>
                  {b.heading}
                </strong>
                {b.body}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story portfolio */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="mb-10 flex items-baseline justify-between border-b border-stone-900 pb-3">
            <h2 className="text-5xl md:text-6xl" style={{ fontWeight: 600 }}>Z portfolio</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">cz. II · 06 historii</p>
          </div>
          <ul className="grid grid-cols-12 gap-x-6 gap-y-10">
            {featuredStories.map((s, i) => {
              const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-12"];
              const aspects = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-square", "aspect-square", "aspect-[21/9]"];
              return (
                <li key={s.slug} className={`col-span-12 ${spans[i]}`}>
                  <article>
                    <div className={`overflow-hidden ${aspects[i]}`}>
                      <img src={s.image} alt={s.title} className="size-full object-cover transition duration-700 hover:scale-[1.02]" />
                    </div>
                    <div className="mt-3 grid grid-cols-12 gap-3 border-t border-stone-300 pt-3">
                      <div className="col-span-12 md:col-span-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">{s.style} · {s.venue}</p>
                        <h3 className="mt-1 text-2xl leading-tight" style={{ fontWeight: 600, fontStyle: "italic" }}>
                          {s.couple}
                        </h3>
                      </div>
                      <p className="col-span-12 leading-relaxed text-stone-700 md:col-span-8"
                         style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "14px" }}>
                        {s.blurb}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PROCESS — editorial steps */}
      <section className="border-b border-stone-300 bg-stone-50">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between border-b border-stone-900 pb-3">
            <h2 className="text-5xl md:text-6xl" style={{ fontWeight: 600 }}>Etapy współpracy</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">cz. III · proces</p>
          </div>
          <ol className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {processSteps.map((p) => (
              <li key={p.step} className="grid grid-cols-12 items-baseline gap-3 border-b border-stone-300 pb-5">
                <span className="col-span-2 text-6xl" style={{ fontWeight: 700, fontStyle: "italic" }}>{p.step}</span>
                <div className="col-span-10">
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-700"
                     style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "14px" }}>
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS — Letters to the editor */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="mb-10 grid items-baseline gap-4 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">cz. IV</p>
              <h2 className="mt-2 text-5xl leading-tight md:text-6xl" style={{ fontWeight: 600, fontStyle: "italic" }}>
                Listy do redakcji
              </h2>
            </div>
            <p className="md:col-span-9 md:col-start-4 leading-relaxed text-stone-700"
               style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "16px" }}>
              Listy od par, których ślub mieliśmy zaszczyt fotografować — krótkie
              fragmenty wybrane z setek wiadomości otrzymanych po oddaniu albumów.
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {testimonials.slice(0, 4).map((t, i) => (
              <li key={t.author} className="border-t-2 border-stone-900 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">List nr {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-2xl leading-snug"
                   style={{ fontStyle: "italic", fontWeight: 400 }}>
                  „{t.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-stone-300 pt-3">
                  <div className="size-10 overflow-hidden">
                    <img src={t.image} alt="" className="size-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-base" style={{ fontWeight: 600 }}>— {t.author}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">{t.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services — classifieds-style */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">cz. V · oferta</p>
              <h2 className="mt-2 text-5xl leading-tight md:text-6xl" style={{ fontWeight: 600, fontStyle: "italic" }}>
                Co możecie u nas zamówić.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700"
                 style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "15px" }}>
                Pełna gama produktów drukowanych. Wycena indywidualna —{" "}
                {brand.pricing.label.toLowerCase()}.
              </p>
              <div className="mt-8 border-2 border-stone-900 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">Pakiety od</p>
                <p className="mt-1 text-6xl tracking-tight" style={{ fontWeight: 700, fontStyle: "italic" }}>
                  2699 zł
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ul className="divide-y-2 divide-stone-900 border-y-2 border-stone-900">
                {services.map((sv, i) => (
                  <li key={sv.slug} className="grid grid-cols-12 items-baseline gap-4 py-5">
                    <span className="col-span-1 font-mono text-xs text-stone-500">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="col-span-11 text-3xl md:col-span-4" style={{ fontWeight: 600, fontStyle: "italic" }}>
                      {sv.title}
                    </h3>
                    <p className="col-span-12 leading-snug text-stone-700 md:col-span-7"
                       style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "14px" }}>
                      {sv.hint}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Deliverables strip */}
              <div className="mt-8 border-t-2 border-stone-900 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">Co dostajecie</p>
                <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {deliverables.map((d) => (
                    <li key={d.title} className="border border-stone-900 p-3">
                      <p className="text-base" style={{ fontWeight: 600 }}>{d.title}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-600">{d.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — advice column */}
      <section className="border-b border-stone-300 bg-stone-50">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <div className="mb-10 flex items-baseline justify-between border-b border-stone-900 pb-3">
            <h2 className="text-5xl md:text-6xl" style={{ fontWeight: 600, fontStyle: "italic" }}>
              Pytania od czytelników
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">cz. VI · q&a</p>
          </div>
          <ul className="divide-y border-y border-stone-400">
            {faq.map((f, i) => (
              <li key={f.q} className="py-6">
                <div className="grid grid-cols-12 gap-4">
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-stone-600">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <p className="text-xl" style={{ fontWeight: 600 }}>{f.q}</p>
                    <p className="mt-2 leading-relaxed text-stone-700"
                       style={{ fontFamily: "var(--font-libre-baskerville), serif", fontSize: "15px" }}>
                      <em className="text-stone-500">— Świetliste:</em> {f.a}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-[1500px] px-6 py-8">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-stone-600">
            ★ polecani przez ★
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xl"
              style={{ fontWeight: 600, fontStyle: "italic" }}>
            {pressBadges.map((p) => <li key={p.label}>{p.label}.</li>)}
          </ul>
        </div>
      </section>

      {/* Colophon footer */}
      <footer className="bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-[1500px] px-6 py-14">
          <div className="border-b border-stone-700 pb-4 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-400">
            Colophon / kontakt
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Telefon</p>
              <a href={`tel:${brand.phoneDigits}`} className="mt-1 block text-2xl" style={{ fontStyle: "italic", fontWeight: 500 }}>
                {brand.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">E-mail</p>
              <a href={`mailto:${brand.email}`} className="mt-1 block text-2xl" style={{ fontStyle: "italic", fontWeight: 500 }}>
                {brand.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Studio</p>
              <p className="mt-1 text-lg" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                {brand.address.line1}
                <br />
                {brand.address.line2}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Facebook</p>
              <a href={brand.social.facebook} className="mt-1 block text-lg italic" target="_blank" rel="noreferrer">
                /swietliste
              </a>
            </div>
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-stone-500">
            © {new Date().getFullYear()} Świetliste — Fotografujemy emocje — nr 1, maj 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
