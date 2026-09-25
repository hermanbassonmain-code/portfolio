import { profile } from "@/data/cv";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.summary}
      </p>
    </section>
  );
}
