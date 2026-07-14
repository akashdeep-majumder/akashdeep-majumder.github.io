"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const roles = [
  {
    company: "Thedush Robotics",
    role: "Software Engineer",
    period: "Mar 2023 – Apr 2026",
    recognition: {
      title: "Mighty Owleyes",
      caption: "For someone with deep wisdom and foresight",
      image: "/thedush-award.webp",
    },
    projects: [
      {
        name: "ONIX – Robot Telemetry & Visualization",
        brief:
          "Real-time robot telemetry and visualization platform for Autonomous Mobile Robots — live sensor data, map editing, SLAM mapping, task execution, and a LiDAR point-cloud visualizer over ROS2. The LiDAR work was two separate engineering problems. Canvas 2D couldn't handle dense warehouse maps, so I migrated to React Three Fiber for GPU-accelerated rendering. Frame rate was still stuck at 5 FPS after that — the bottleneck was bandwidth, not rendering. Chose WebSocket with Float16 + Deflate compression over WebRTC after testing both. Bandwidth dropped from 1.5 MB to 100 KB per frame and throughput rose to 50+ FPS.",
        bullets: [
          "Optimized LiDAR data streaming with Float16 + Deflate compression, cutting bandwidth by ~93% (1.5 MB → 100 KB) and lifting render from 5 FPS to 50+",
          "Designed a centralized map management system with a normalized schema, eliminating a recurring class of hard-to-trace bugs caused by each feature maintaining its own map structure",
          "Built a map merge workflow handling 3 independent coordinate systems (canvas, map origin, merge/rotate space) with custom transformation math — operators align, rotate, and translate maps visually; coordinates are recalculated on save",
          "Built an Immer-based undo-redo system using patch-based state diffing — ~90% reduction in memory usage vs. the previous full-snapshot approach",
          "Real-time dynamic mapping and collision detection over WebSockets, FastAPI, and ROS2 (Humble)",
          "Developed a robot task manager for operational control of AMR navigation goals",
          "Migrated the backend from Django with unstructured WebSocket scripts to an organised FastAPI architecture; cut Docker image sizes via multi-stage builds",
          "Refactored the frontend from a page-based structure to feature-based modules as the codebase grew — the page-based approach had become difficult to maintain, with logic and components tangled across pages and duplication spreading with every new feature",
          "Mentored 5–6 interns through code reviews over 3 years",
        ],
        tags: ["React 18", "Three.js / R3F", "Redux Toolkit", "WebSockets", "FastAPI", "MySQL", "Redis", "WebGL"],
        expandable: true,
      },
      {
        name: "WMS + Robot + PTL Integration System",
        brief:
          "The goal was to modernise a fully manual, paper-based demand-and-issue system at an Indian Army base — digitise records, reduce manual labour with a robot, and guide warehouse staff with PTL lights. Built as a proof of concept in 14 days on-site. Designed for air-gapped, LAN-only deployment: the React UIs ship as Electron .exe files, the FastAPI backend as a PyInstaller bundle, and the whole stack installs offline via USB onto a factory-floor Windows machine.",
        bullets: [
          "Automated item retrieval with robot navigation + PTL LED guidance, reducing picking time by ~50%",
          "Replaced manual paper records with a centralised digital database — real-time demand and issue tracking with full transaction history",
          "Built two distinct UIs (Demand and Issue/Store) and packaged both as standalone desktop apps via Electron.js",
          "Integrated Modbus TCP (via pymodbus) to control PLC bin indicator lights, and bridged ROS2 navigation actions to the FastAPI backend over WebSocket",
        ],
        tags: ["React 19", "Electron.js", "Redux Toolkit", "WebSockets", "FastAPI", "MySQL", "MUI", "ROS2", "Modbus TCP"],
        expandable: true,
      },
      {
        name: "Robot Configuration Builder",
        brief:
          "Guided React UI to generate deeply nested 600+ line robot configuration JSON files, replacing error-prone manual editing. Cut deployment configuration time by ~50% and reduced errors by ~90%.",
        bullets: [],
        tags: ["React", "Redux Toolkit", "MUI", "JavaScript", "Vite"],
        expandable: false,
      },
      {
        name: "Network Strength Visualizer",
        brief:
          "Samples Wi-Fi signal strength at each robot position as it navigates the warehouse and renders the readings in 3D — making dead zones and weak coverage areas immediately visible.",
        bullets: [],
        tags: ["React", "Three.js / R3F", "Redux Toolkit", "MUI"],
        expandable: false,
      },
    ],
  },
  {
    company: "Thedush Robotics",
    role: "Frontend Intern",
    period: "Mar 2023 – Jun 2023",
    projects: [
      {
        name: "Warehouse Map Builder",
        brief:
          "Canvas-based editor that renders a JSON warehouse layout as an interactive floor plan. Operators place named stations and draw paths between them with full drag-and-drop support, built on the HTML5 Canvas 2D API alongside React.",
        bullets: [],
        tags: ["React", "Canvas 2D", "JavaScript"],
        expandable: false,
      },
    ],
  },
];

function ProjectCard({ project }: { project: (typeof roles)[0]["projects"][0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200">
      <div className="h-1 bg-linear-to-r from-indigo-500 to-purple-500" />
      <div className="p-5">
        <h4 className="font-semibold mb-2">{project.name}</h4>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
          {project.brief}
        </p>

        {project.expandable && (
          <>
            {expanded && (
              <ul className="mb-3 flex flex-col gap-2">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-medium text-indigo-500 hover:text-indigo-600 transition-colors mb-3"
            >
              {expanded ? "Show less ↑" : "Show more ↓"}
            </button>
          </>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [awardOpen, setAwardOpen] = useState(false);

  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3 text-center">Experience</h2>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-14">
            3 years building real-time systems and robotics interfaces at Thedush.
          </p>
        </Reveal>

        <div className="flex flex-col gap-14">
          {roles.map((r, i) => (
            <div key={r.role + r.period}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-6">
                <div>
                  <h3 className="text-xl font-semibold">{r.role}</h3>
                  <p className="text-indigo-500 font-medium text-sm">{r.company}</p>
                </div>
                <span className="text-sm text-zinc-400 font-medium tabular-nums">{r.period}</span>
              </div>

              <div className="flex flex-col gap-4">
                {r.projects.map((p, j) => (
                  <Reveal key={p.name} delay={j * 70}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>

              {"recognition" in r && r.recognition && (
                <>
                  <div className="mt-4 flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <button
                      onClick={() => setAwardOpen(true)}
                      className="shrink-0 w-12 rounded-lg overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700 cursor-zoom-in transition-transform hover:scale-105"
                    >
                      <Image
                        src={r.recognition.image}
                        alt={r.recognition.title}
                        width={48}
                        height={65}
                        className="w-full h-auto"
                      />
                    </button>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">Recognition</p>
                      <p className="font-semibold text-sm">{r.recognition.title}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{r.recognition.caption}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">— Thedush Robotics</p>
                    </div>
                  </div>

                  {awardOpen && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                      onClick={() => setAwardOpen(false)}
                    >
                      <div className="relative max-h-[85vh] w-auto rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={r.recognition.image}
                          alt={r.recognition.title}
                          width={340}
                          height={460}
                          className="h-[85vh] w-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              {i < roles.length - 1 && (
                <div className="mt-14 border-t border-zinc-200 dark:border-zinc-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
