import type { HomeSectionContext } from "../types";

/**
 * Pull quote variant 2: Split layout — quote left, attribution right. Use section ID "pull-quote-v2" in homeSections.
 */
export function PullQuoteSectionV2({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:grid md:grid-cols-5 md:gap-12 md:p-12">
          <blockquote className="md:col-span-3">
            <p className="font-heading text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl md:text-4xl">
              {home.pullQuote ?? "Every visit is an experience — not just a cut."}
            </p>
          </blockquote>
          <footer className="mt-6 flex items-end md:col-span-2 md:mt-0 md:justify-end">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              {home.pullQuoteAttribution ?? "Our promise to you"}
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
