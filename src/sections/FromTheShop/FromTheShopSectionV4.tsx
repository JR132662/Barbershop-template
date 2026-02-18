import type { HomeSectionContext } from "../types";

/**
 * From the shop variant 4: Minimal list — large typography, simple dividers. Use section ID "from-the-shop-v4" in homeSections.
 */
export function FromTheShopSectionV4({ t }: HomeSectionContext) {
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
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.fromTheShopTitle ?? "From the shop"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Tips and updates from our barbers
          </h2>
          <p className="mt-3 text-gray-600">
            {home.fromTheShopSubtitle ?? "Tips and updates from our barbers."}
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
              <p className="mt-3 text-gray-600 leading-relaxed">{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
