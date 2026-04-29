"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resumeHref = "/resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-semibold text-lg tracking-tight">
          AM<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-indigo-500 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-background border-b border-zinc-200 dark:border-zinc-800">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-indigo-500 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-500 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
