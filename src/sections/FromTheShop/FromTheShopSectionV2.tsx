import type { HomeSectionContext } from "../types";

/**
 * From the shop variant 2: Split layout — title and subtitle on left, numbered list of tips on right. Use section ID "from-the-shop-v2" in homeSections.
 */
export function FromTheShopSectionV2({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    {
      title: home.fromTheShop1Title ?? "How often should you get a haircut?",
      excerpt: home.fromTheShop1Excerpt ?? "",
    },
    {
      title: home.fromTheShop2Title ?? "Beard maintenance between visits",
      excerpt: home.fromTheShop2Excerpt ?? "",
    },
    {
      title: home.fromTheShop3Title ?? "What to ask for when you don't know the name",
      excerpt: home.fromTheShop3Excerpt ?? "",
    },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
          <div className="lg:col-span-2">
            <p className="section-label">{home.fromTheShopTitle ?? "From the shop"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Tips and updates from our barbers
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {home.fromTheShopSubtitle ?? "Tips and updates from our barbers."}
            </p>
          </div>
          <div className="space-y-6 lg:col-span-3">
            {items.map((item, i) => (
              <article
                key={i}
                className="flex gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)]"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-lg font-bold text-gray-900"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
