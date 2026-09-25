import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  /** Use a tighter, modern sans-serif treatment for the heading instead of the site's default serif. */
  sans?: boolean;
};

export default function PageHero({ eyebrow, title, description, image, sans = false }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-charcoal text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson">
          {eyebrow}
        </p>
        <h1
          className={`mt-4 max-w-2xl text-balance font-semibold ${
            sans ? "font-sans text-3xl tracking-tight sm:text-4xl" : "font-serif text-3xl sm:text-5xl"
          }`}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
