import type { HomeSectionContext } from "../types";

/**
 * What to expect variant 4: Minimal stacked list. Use section ID "what-to-expect-v4" in homeSections.
 */
export function WhatToExpectSectionV4({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const steps = [
    { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
    { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
    { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.whatToExpectTitle ?? "What to expect"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Your visit, step by step
          </h2>
          <p className="mt-3 text-gray-600">
            {home.whatToExpectSubtitle ?? "Your visit, step by step."}
          </p>
        </header>
        <ol className="space-y-0">
          {steps.map((step) => (
            <li
              key={step.num}
              className="flex gap-6 border-b border-[var(--border)] py-8 last:border-0 last:pb-0 first:pt-0"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-gray-900"
                aria-hidden
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
