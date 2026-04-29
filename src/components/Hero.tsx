import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700">
          <Image
            src="/profile.png"
            alt="Akashdeep Majumder"
            width={80}
            height={80}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <p className="text-sm font-medium text-indigo-500 uppercase tracking-widest mb-3">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          Akashdeep Majumder
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
          Software Engineer &mdash; real-time systems, robotics interfaces, and full-stack web.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 text-xs">
        <span>Scroll down</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
