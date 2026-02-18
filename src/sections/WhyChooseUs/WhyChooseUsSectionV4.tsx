import type { HomeSectionContext } from "../types";

/**
 * Why choose us variant 4: Minimal list with large typography. Use section ID "why-choose-us-v4" in homeSections.
 */
export function WhyChooseUsSectionV4({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    { title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
    { title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
    { title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
    { title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.whyChooseUsTitle ?? "Why choose us"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            We're more than a quick stop for a cut
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {home.whyChooseUsSubtitle ?? "We're more than a quick stop for a cut."}
          </p>
        </header>
        <ul className="space-y-0">
          {items.map((item, i) => (
            <li
              key={i}
              className="border-b border-[var(--border)] py-8 last:border-0 last:pb-0 first:pt-0"
            >
              <h3 className="font-heading text-xl font-semibold text-gray-950 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
