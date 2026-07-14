import Reveal from "./Reveal";

const featured = [
  {
    title: "Adda – Social Media App",
    description:
      "Full-stack MERN social media app. JWT auth via HTTP-only cookies, Zod-validated Express REST API, and MongoDB on the backend. Next.js 16 App Router frontend with Redux Toolkit for optimistic UI (instant like/comment updates with silent rollback), IntersectionObserver infinite scroll, and Tailwind CSS v4 design tokens for a single-override light/dark theme. Deployed on Vercel + Render.",
    tags: ["Next.js 16", "React", "TypeScript", "Tailwind CSS v4", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Zod"],
    github: "https://github.com/akashdeep-majumder/social-media-mern",
    live: "https://project-adda.vercel.app",
    note: null,
  },
  {
    title: "Cricket Scoring App",
    description:
      "A full-featured cricket tournament manager. The goal: give a friend a tool to run local tournaments end-to-end — create a tournament, set up teams, build lineups, and score ball by ball. A standout feature lets organisers upload a sponsor video per tournament; it plays automatically between scoring intervals, so the app doubles as a simple ad platform for local events. Ships as a Windows .exe via Electron with a SQLite-backed database and a real-time scoreboard over Socket.IO.",
    tags: ["Electron.js", "TypeScript", "React", "Tailwind CSS", "Express.js", "SQLite", "Socket.IO"],
    github: "https://github.com/akashdeep-majumder/scoring_app",
    live: null,
    note: "Built with AI-assisted development",
  },
  {
    title: "TestAI — AI-Powered Test Automation",
    description:
      "Generates Playwright E2E test scripts directly from source code using LLM APIs (OpenRouter, Google, Nvidia, Mistral). The key engineering challenge was deterministic output — solved by constraining the model through structured response schemas and strict output contracts rather than relying on prompt wording alone.",
    tags: ["LLM APIs", "Playwright", "Node.js", "OAuth"],
    github: "https://github.com/akashdeep-majumder/testai",
    live: null,
    note: null,
  },
];

const others = [
  {
    title: "React Weather App (PWA)",
    description:
      "Installable progressive web app for real-time weather. Works offline via service workers; installable on mobile and desktop.",
    tags: ["React", "JavaScript", "PWA"],
    github: "https://github.com/akashdeep-majumder/react-weather-app-pwa",
    live: "https://react-weather-app-pwa-git-v2-akashdeep-majumder.vercel.app/",
  },
  {
    title: "iOS Calculator Clone",
    description:
      "Pixel-faithful iOS calculator in React — correct operator chaining, edge-case handling, and native layout.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/akashdeep-majumder/ios-calculator-app-clone",
    live: "https://ios-calculator-app-clone-git-main-akashdeep-majumder.vercel.app/",
  },
  {
    title: "Dashboard Design Clone",
    description:
      "Layout exercise replicating a modern admin dashboard in pure HTML and CSS — focused on spacing and visual hierarchy.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/akashdeep-majumder/DASHBOARD-DESIGN-CLONE",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Featured */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-3 text-center">Projects</h2>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-12">
            Personal builds — outside of work.
          </p>
        </Reveal>

        <div className="mb-8">
          <Reveal
            as="p"
            className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4"
          >
            Featured
          </Reveal>
          <div className="flex flex-col gap-4">
            {featured.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 70}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <div className="h-1.5 bg-linear-to-r from-indigo-500 to-purple-500" />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 max-w-2xl">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-indigo-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      View on GitHub
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-indigo-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {p.note && <span className="text-xs text-zinc-400">· {p.note}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Others */}
        <Reveal as="div" className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Other Projects
          </p>
          <p className="text-xs text-zinc-400 mt-1">Learning projects and earlier work.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              <div className="h-1 bg-linear-to-r from-indigo-500 to-purple-500" />
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-semibold mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center mt-10">
          <a
            href="https://github.com/akashdeep-majumder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            View more on GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
