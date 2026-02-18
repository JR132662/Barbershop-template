import { FAQ } from "@/components/FAQ";
import type { HomeSectionContext } from "../types";

export function FAQSection({ t }: HomeSectionContext) {
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
        <FAQ items={faqItems} />
      </div>
    </section>
  );
}
