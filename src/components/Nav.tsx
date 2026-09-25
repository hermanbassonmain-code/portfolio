"use client";

import { useState } from "react";
import { profile } from "@/data/cv";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvFile}
            download
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvFile}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
