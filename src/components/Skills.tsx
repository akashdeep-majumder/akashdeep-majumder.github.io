const skills = {
  Frontend: [
    'React',
    'TypeScript',
    'JavaScript',
    'Redux Toolkit',
    'Three.js / R3F',
    'MUI',
    // "Tailwind CSS",
    'SASS / SCSS',
    'Electron.js',
    'React Router',
    // "Next.js",
    'Vite',
    'HTML5 / CSS3',
  ],
  'Backend & DB': [
    'FastAPI',
    'Python',
    'WebSockets',
    'Socket.IO',
    'REST APIs',
    'Redis',
    'MySQL',
    // "Node.js",
    // "Express",
    // "SQLite",
    // "Django",
  ],
  Tools: ['Docker', 'Git', 'GitHub', 'CI/CD', 'ROS2 (Humble)', 'Figma'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center">Skills</h2>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-12">
          Frontend is my strength — backend and DevOps are hands-on experience.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-indigo-500 mb-4 uppercase text-sm tracking-widest">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
