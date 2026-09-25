type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use a tighter, modern sans-serif treatment for the heading instead of the site's default serif. */
  sans?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  sans = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson">{eyebrow}</p>
      <h2
        className={`mt-3 text-balance font-semibold text-ink ${
          sans ? "font-sans text-2xl tracking-tight sm:text-[1.75rem]" : "font-serif text-2xl sm:text-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}
