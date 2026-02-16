import { siteConfig } from "@/config/site";

const icons: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  twitter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.82a8.2 8.2 0 004.76 1.52V6.89a4.84 4.84 0 01-1-.2z" />
    </svg>
  ),
  yelp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.986-4.378c.652-.96 2.07-.472 2.07.712v2.98c0 .36-.12.7-.34.96l-.545-.077zm-6.55 3.04l4.34 2.96c.83.567.36 1.87-.67 1.87h-3.16c-.46 0-.87-.28-1.04-.71l-1.19-2.97c-.37-.93.64-1.76 1.47-1.24l.25.09zM7.03 18.43l1.39-4.97c.27-.96 1.56-1.08 1.96-.18l2.06 4.68c.46.96-.46 2-.7 2h-.34l-3.49-.98c-.6-.17-.97-.76-.88-1.38v-.17zM5.36 12.39l5.13-.95c1-.18 1.42 1.06.63 1.77L7.4 16.66c-.88.8-2.18-.1-1.9-1.3l.16-.82c.06-.3.05-.52-.05-.77L5.16 13c-.12-.24-.05-.44.2-.61zm3.18-8.83l1.85 5.13c.35.97-.72 1.82-1.6 1.26L4.3 7.25c-.75-.48-.7-1.58.08-2l2.33-1.32c.44-.25.97-.25 1.41.01l.42.25v.37zm5.6-.65L12.6 7.8c-.43.94-1.8.77-1.98-.24L9.92 3.2c-.15-.87.48-1.68 1.36-1.76l2.74-.22c1.02-.08 1.78.9 1.42 1.86l-1.3-.17z" />
    </svg>
  ),
};

export function SocialIcons({
  className = "",
  iconClass = "",
}: {
  className?: string;
  iconClass?: string;
}) {
  const social = siteConfig.social as Record<string, string>;
  const links = Object.entries(social).filter(([, url]) => url);

  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition hover:border-vice-pink hover:text-vice-pink hover:bg-vice-pink/10 ${iconClass}`}
          aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
        >
          {icons[platform] ?? (
            <span className="text-xs font-semibold uppercase">{platform.slice(0, 2)}</span>
          )}
        </a>
      ))}
    </div>
  );
}
