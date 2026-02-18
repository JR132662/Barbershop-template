import type { HomeSectionContext } from "../types";

/**
 * Pull quote variant 3: Dark panel with gold accent. Use section ID "pull-quote-v3" in homeSections.
 */
export function PullQuoteSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <blockquote>
          <p className="font-heading text-xl font-medium leading-relaxed text-white sm:text-2xl md:text-3xl">
            "{home.pullQuote ?? "Every visit is an experience — not just a cut."}"
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
            {home.pullQuoteAttribution ?? "Our promise to you"}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
