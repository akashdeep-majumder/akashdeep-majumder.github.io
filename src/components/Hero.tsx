import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute left-1/2 top-1/3 -z-10 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-2xl"
      />
      <div className="max-w-2xl text-center">
        <div className="rise-in mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700">
          <Image
            src="/profile.webp"
            alt="Akashdeep Majumder"
            width={240}
            height={240}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <p
          className="rise-in text-sm font-medium text-indigo-500 uppercase tracking-widest mb-3"
          style={{ animationDelay: "80ms" }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="rise-in text-5xl sm:text-7xl font-bold tracking-tight mb-4"
          style={{ animationDelay: "140ms" }}
        >
          Akashdeep Majumder
        </h1>
        <p
          className="rise-in text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto"
          style={{ animationDelay: "200ms" }}
        >
          Frontend Engineer &mdash; real-time systems, robotics interfaces, and full-stack web.
        </p>

        <div
          className="rise-in flex gap-4 flex-wrap justify-center"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="mailto:akashdeepmajumder085@gmail.com"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 text-xs">
        <span>Scroll down</span>
        <svg className="w-4 h-4 animate-nudge" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
