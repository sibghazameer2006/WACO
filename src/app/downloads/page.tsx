import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { IconDocument, IconDownload } from "@/components/Icons";
import { downloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Free toolkits and checklists from Waqas Afzal & Co.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Toolkits worth keeping on hand"
        description="A growing library of checklists and guides built from the questions we get asked most often."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {downloads.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas-alt text-crimson">
                  <IconDocument className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-serif text-base font-semibold text-ink">
                      {item.title}
                    </h2>
                    <span className="shrink-0 rounded-full bg-canvas-alt px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                      {item.fileType}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-crimson hover:text-crimson-strong"
                  >
                    <IconDownload className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
