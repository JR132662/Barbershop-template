"use client";

import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar({
  message,
  linkText,
  linkHref,
}: {
  message: string;
  linkText?: string;
  linkHref?: string;
}) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-[var(--vice-pink)] to-[#ff4da6] text-white text-center text-sm font-medium py-2.5 px-10">
      <div className="flex items-center justify-center gap-2">
        <span>{message}</span>
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="underline underline-offset-2 font-semibold hover:text-white/80 transition"
          >
            {linkText}
          </Link>
        )}
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/20 transition"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 2l10 10M12 2L2 12" />
        </svg>
      </button>
    </div>
  );
}
