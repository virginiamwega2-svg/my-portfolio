import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center px-6 text-center">

      {/* Watermark number */}
      <p className="font-mono font-bold text-[10rem] leading-none text-text-primary/[0.03] select-none mb-0 -mb-8">
        404
      </p>

      {/* Ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <span className="badge badge-accent">404 — Not Found</span>

        <h1 className="text-3xl font-bold text-text-primary tracking-tight mt-2">
          Page not found
        </h1>

        <p className="text-text-secondary max-w-sm leading-relaxed">
          This page doesn&apos;t exist or was moved. Let&apos;s get you back to
          something real.
        </p>

        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          <Link href="/" className="btn btn-primary btn-md">
            Back home →
          </Link>
          <Link href="/#contact" className="btn btn-ghost btn-md">
            Get in touch
          </Link>
        </div>
      </div>

    </div>
  );
}
