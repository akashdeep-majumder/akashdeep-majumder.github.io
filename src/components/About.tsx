import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center sm:justify-start">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
            <Image
              src="/at-work.jpeg"
              alt="Akashdeep working at his desk"
              width={400}
              height={280}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            Frontend engineer with 3+ years of experience building real-time
            interfaces for robotics systems. At Thedush I shipped a 3D robot
            telemetry visualizer, a Warehouse Management System for the Indian
            Army, a robot configuration builder, and more &mdash; all in
            production, all under tight timelines.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            My focus is the frontend &mdash; React, Redux, Three.js, and real-time
            data over WebSockets. I reach into the backend (FastAPI, WebSockets,
            ROS2) when the work calls for it, but the interface is where I spend
            most of my time and attention.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
