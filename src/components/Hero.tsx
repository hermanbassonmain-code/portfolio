import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        {profile.title}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
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
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
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
    </section>
  );
}
