import type { HomeSectionContext } from "../types";

/**
 * Pull quote variant 4: Minimal with large decorative quote mark. Use section ID "pull-quote-v4" in homeSections.
 */
export function PullQuoteSectionV4({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex gap-6 md:gap-10">
          <span
            className="font-heading text-6xl font-bold leading-none text-gold/30 md:text-7xl"
            aria-hidden
          >
            "
          </span>
          <blockquote className="flex-1">
            <p className="font-heading text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl md:text-4xl">
              {home.pullQuote ?? "Every visit is an experience — not just a cut."}
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">
              {home.pullQuoteAttribution ?? "Our promise to you"}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
