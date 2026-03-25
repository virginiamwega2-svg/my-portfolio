export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-accent font-semibold">JD.</span>
        <span className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </span>
        <span className="font-mono text-xs text-text-tertiary">
          Built with Next.js &amp; Tailwind
        </span>
      </div>
    </footer>
  );
}
