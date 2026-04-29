export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
      © {new Date().getFullYear()} &nbsp; Akashdeep Majumder. Built with Next.js
      &amp; Tailwind CSS.
    </footer>
  );
}
