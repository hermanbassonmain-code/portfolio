import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Professional Experience
      </h2>

      <div className="mt-8 space-y-10">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.start}`}
            className="relative border-l border-border pl-6"
          >
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-muted">— {job.company}</span>
              </h3>
              <p className="text-sm text-muted whitespace-nowrap">
                {job.start} – {job.end}
              </p>
            </div>
            <p className="text-sm text-muted">{job.location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
