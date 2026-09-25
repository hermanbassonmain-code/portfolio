"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/cv";
import { FORMSPREE_ENDPOINT } from "@/data/config";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Get in Touch
      </h2>
      <p className="mt-3 max-w-2xl text-base text-muted">
        Recruiting or have an opportunity you&apos;d like to discuss? Reach out
        directly by email, or send a message using the form below.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="gradient-bg inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-2/25 transition-transform hover:scale-[1.03]"
          >
            Email {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted hover:text-accent"
          >
            {profile.linkedinLabel}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="Tell me a bit about the role or opportunity..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="gradient-bg w-fit rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-2/25 transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600">
              Thanks for reaching out — I&apos;ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please email me directly at{" "}
              {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
