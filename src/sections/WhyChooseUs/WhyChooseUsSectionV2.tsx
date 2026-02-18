import type { HomeSectionContext } from "../types";

/**
 * Why choose us variant 2: Split layout — header left, cards right. Use section ID "why-choose-us-v2" in homeSections.
 */
export function WhyChooseUsSectionV2({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    { title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
    { title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
    { title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
    { title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
          <div className="lg:col-span-2">
            <p className="section-label">{home.whyChooseUsTitle ?? "Why choose us"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              We're more than a quick stop for a cut
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {home.whyChooseUsSubtitle ?? "We're more than a quick stop for a cut."}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)]"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
