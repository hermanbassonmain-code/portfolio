import { education } from "@/data/cv";

const palette = ["text-accent", "text-accent-2", "text-accent-3", "text-accent-4"];

export default function Education() {
  return (
    <section id="education" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Education
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background p-5"
            >
              <p className={`text-sm font-medium ${palette[i % palette.length]}`}>
                {item.period}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.school}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
