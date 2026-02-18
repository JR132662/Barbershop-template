"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

export function ContactForm({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // In production, post to your API or form service (e.g. Formspree, Resend).
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          {messages.contact.formName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-gray-950 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          {messages.contact.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-gray-950 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
          {messages.contact.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-gray-950 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-gold px-6 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {status === "sending"
          ? (locale === "en" ? "Sending…" : "Enviando…")
          : messages.contact.formSend}
      </button>
      {status === "success" && (
        <p className="text-center text-sm font-medium text-green-700">
          {messages.contact.formSuccess}
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-medium text-red-600">
          {messages.contact.formError}
        </p>
      )}
    </form>
  );
}
