import { skillGroups } from "@/data/cv";

const palette = [
  { text: "text-accent", border: "border-t-accent", tag: "border-accent/40 text-accent" },
  { text: "text-accent-2", border: "border-t-accent-2", tag: "border-accent-2/40 text-accent-2" },
  { text: "text-accent-3", border: "border-t-accent-3", tag: "border-accent-3/40 text-accent-3" },
  { text: "text-accent-4", border: "border-t-accent-4", tag: "border-accent-4/40 text-accent-4" },
  { text: "text-accent-5", border: "border-t-accent-5", tag: "border-accent-5/40 text-accent-5" },
  { text: "text-accent-6", border: "border-t-accent-6", tag: "border-accent-6/40 text-accent-6" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Core Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const colors = palette[i % palette.length];
            return (
              <div
                key={group.label}
                className={`rounded-xl border border-t-2 border-border ${colors.border} bg-background p-5`}
              >
                <h3 className={`text-sm font-semibold ${colors.text}`}>{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-2.5 py-1 text-xs ${colors.tag}`}
                    >
                      {item}
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
