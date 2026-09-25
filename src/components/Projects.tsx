import { projects } from "@/data/cv";

const palette = [
  { border: "border-t-accent", tag: "border-accent/40 text-accent" },
  { border: "border-t-accent-2", tag: "border-accent-2/40 text-accent-2" },
  { border: "border-t-accent-3", tag: "border-accent-3/40 text-accent-3" },
  { border: "border-t-accent-4", tag: "border-accent-4/40 text-accent-4" },
  { border: "border-t-accent-5", tag: "border-accent-5/40 text-accent-5" },
  { border: "border-t-accent-6", tag: "border-accent-6/40 text-accent-6" },
];

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
          {projects.map((project, i) => {
            const colors = palette[i % palette.length];
            return (
              <div
                key={project.title}
                className={`flex flex-col rounded-xl border border-t-2 border-border ${colors.border} bg-surface p-5`}
              >
                <h3 className="text-base font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-1 text-xs ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
