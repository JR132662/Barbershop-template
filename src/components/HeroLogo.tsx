"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroLogo({
  logoUrl,
  businessName,
}: {
  logoUrl: string;
  businessName: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        {businessName}
      </h1>
    );
  }

  const isExternal = logoUrl.startsWith("http");

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      {/* Curved business name — large arc wrapping around above the logo */}
      <svg
        viewBox="0 0 800 140"
        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[580px] h-[100px] sm:h-[115px] md:h-[130px] text-white overflow-visible"
        aria-hidden
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Wide path so long names (e.g. "Fade Masters Barber Shop") don't clip */}
          <path
            id="heroCurve"
            d="M 25,108 Q 400,-12 775,108"
            fill="none"
          />
        </defs>
        <text
          fontFamily="Georgia, serif"
          fontSize="44"
          fontWeight="700"
          fill="currentColor"
          style={{ overflow: "visible" }}
        >
          <textPath href="#heroCurve" startOffset="50%" textAnchor="middle">
            {businessName}
          </textPath>
        </text>
      </svg>
      {/* Logo container — no background overlay */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-[1.2] md:aspect-[1.4] min-h-[140px] p-4">
        <Image
          src={logoUrl}
          alt={businessName}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
          priority
          unoptimized={isExternal}
          onError={() => setError(true)}
        />
      </div>
    </div>
  );
}
