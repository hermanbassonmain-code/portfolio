import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="font-label text-xs text-accent">{profile.title}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{profile.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
          <span>{profile.location}</span>
          <span className="hidden text-accent-dim sm:inline">/</span>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          <span className="hidden text-accent-dim sm:inline">/</span>
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
            className="rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-shadow hover:glow-accent"
          >
            Get in touch
          </a>
          <a
            href={profile.cvFile}
            download
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-dim hover:text-accent"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
