import { projects } from "@/data/cv";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted">
          A selection of the platforms and systems I&apos;ve built and led
          across gaming, telecommunications, and government sectors.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative flex flex-col rounded-md border border-border bg-surface p-5"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
              />
              <h3 className="text-base font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="font-label mt-1 text-[11px] text-accent-dim">
                {project.org}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
