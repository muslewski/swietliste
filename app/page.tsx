import Link from "next/link";
import { exampleIndex, brand } from "@/lib/content";

export default function ExampleIndexPage() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            {brand.longName} · {brand.tagline}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            10 homepage explorations
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-neutral-400">
            Każda strona to inny kierunek wizualny dla{" "}
            <span className="text-neutral-100">Świetliste — fotografia ślubna</span>{" "}
            (Osielsko k. Bydgoszczy). Kliknij kafelek, żeby zobaczyć pełny ekran.
            Wszystkie używają tej samej treści: tych samych historii par, tego
            samego cennika ({brand.pricing.label}), tych samych zdjęć — żeby
            łatwo porównywać <em>tylko design</em>.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exampleIndex.map((ex) => (
            <li key={ex.slug}>
              <Link
                href={`/${ex.slug}`}
                className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-600 hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Example {String(ex.id).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="size-3 rounded-full"
                    style={{ background: ex.accent }}
                  />
                </div>
                <h2 className="mt-4 font-display text-2xl text-neutral-50">
                  {ex.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-400">{ex.summary}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  {ex.font}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-300 transition group-hover:gap-3 group-hover:text-neutral-50">
                  Otwórz <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-20 border-t border-neutral-900 pt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          {brand.phone} · {brand.email} · {brand.address.line1},{" "}
          {brand.address.line2}
        </footer>
      </div>
    </main>
  );
}
