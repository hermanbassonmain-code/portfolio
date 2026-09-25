import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-2/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-accent-3/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          {profile.title}
        </p>
        <h1 className="gradient-text mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{profile.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span>{profile.location}</span>
          <span className="hidden sm:inline">•</span>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            {profile.linkedinLabel}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-2/25 transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </a>
          <a
            href={profile.cvFile}
            download
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
