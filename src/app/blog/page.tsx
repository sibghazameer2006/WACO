import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { IconArrowRight, IconLinkedIn } from "@/components/Icons";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates and insights from Waqas Afzal & Co., reposted from our LinkedIn page.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the firm"
        description="The same updates we share on LinkedIn, collected here for anyone who'd rather not miss them."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col rounded-2xl border border-line bg-surface p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas-alt text-crimson">
                  <IconLinkedIn className="h-4 w-4" />
                </span>
                <p className="mt-4 text-xs uppercase tracking-[0.1em] text-ink-muted">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 font-serif text-lg font-semibold text-ink text-balance">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-crimson hover:text-crimson-strong"
                >
                  View on LinkedIn
                  <IconArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
