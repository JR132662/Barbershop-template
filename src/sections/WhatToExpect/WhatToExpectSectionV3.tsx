import type { HomeSectionContext } from "../types";

/**
 * What to expect variant 3: Dark panel with numbered cards. Use section ID "what-to-expect-v3" in homeSections.
 */
export function WhatToExpectSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const steps = [
    { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
    { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
    { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.whatToExpectTitle ?? "What to expect"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Your visit, step by step
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {home.whatToExpectSubtitle ?? "Your visit, step by step."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[var(--gold)]/30"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)] text-lg font-bold text-gray-900"
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-400">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
