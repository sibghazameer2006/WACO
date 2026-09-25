"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { serviceTitleBySlug } from "@/data/services";

type Status = "idle" | "success";

// Front-end only for now: on submit this just validates and shows a success
// state. Wire the handleSubmit body to a real endpoint (e.g. an API route,
// FormSubmit, or EmailJS) once you decide where messages should land.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const serviceTitle = serviceTitleBySlug(searchParams.get("service") ?? "");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-crimson/30 bg-crimson/5 p-8 text-center">
        <h3 className="font-serif text-lg font-semibold text-ink">Message sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Thanks for reaching out. A member of our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-crimson hover:text-crimson-strong"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {serviceTitle && (
        <div className="rounded-xl border border-crimson/30 bg-crimson/5 px-4 py-3 text-sm text-ink">
          Regarding: <span className="font-medium">{serviceTitle}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-crimson"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-crimson"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={serviceTitle ? `I'm interested in your ${serviceTitle} service. ` : ""}
          placeholder="Tell us a bit about what you need help with."
          className="mt-2 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-crimson"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-strong sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
