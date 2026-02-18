import type { HomeSectionContext } from "../types";

/**
 * FAQ variant 3: Minimal, all answers visible (no accordion). Use section ID "faq-v3" in homeSections.
 */
export function FAQSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const faqItems = [
    { question: home.faq1Q ?? "", answer: home.faq1A ?? "" },
    { question: home.faq2Q ?? "", answer: home.faq2A ?? "" },
    { question: home.faq3Q ?? "", answer: home.faq3A ?? "" },
    { question: home.faq4Q ?? "", answer: home.faq4A ?? "" },
    { question: home.faq5Q ?? "", answer: home.faq5A ?? "" },
  ].filter((item) => item.question && item.answer);

  return (
    <section
      id="faq"
      className="border-t border-[var(--border)] bg-white py-20 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-12 text-center">
          <p className="section-label">{home.faqTitle ?? "Frequently asked questions"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Got questions? We've got answers.
          </h2>
        </header>
        <div className="space-y-10">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-[var(--border)] pb-10 last:border-0 last:pb-0"
            >
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {item.question}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
