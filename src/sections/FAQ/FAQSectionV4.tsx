import { FAQ } from "@/components/FAQ";
import type { HomeSectionContext } from "../types";

/**
 * FAQ variant 4: Split layout — title and subtitle on left, accordion on right. Use section ID "faq-v4" in homeSections.
 */
export function FAQSectionV4({ t, base }: HomeSectionContext) {
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
      className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <p className="section-label">{home.faqTitle ?? "Frequently asked questions"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Got questions? We've got answers.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Everything you need to know before your visit. Can't find what you're looking for?{" "}
              <a href={`${base}/contact`} className="font-medium text-gold hover:underline">
                Get in touch
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-3">
            <FAQ items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
