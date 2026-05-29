import AnimateIn from "./AnimateIn";
import {
  FileText, PenLine, BookOpen, ArrowUpRight, Library,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* The writing portfolio aggregates everything below in one place. */
const PORTFOLIO_URL = "https://virginiamwega-com.vercel.app/";

type Channel = {
  icon: LucideIcon;
  name: string;
  platform: string;
  desc: string;
  href: string;
  accent: string;
  iconBg: string;
};

const CHANNELS: Channel[] = [
  {
    icon: FileText,
    name: "Engineering blog",
    platform: "Hashnode",
    desc: "Production patterns written up with the diff and the gotcha — Stripe webhooks, Claude tool use, and more.",
    href: "https://virginiamwegahashnodedev.hashnode.dev/",
    accent: "text-amber-400",
    iconBg: "bg-amber-400/10",
  },
  {
    icon: PenLine,
    name: "Long-form essays",
    platform: "Medium",
    desc: "Researched, on-brand writing for parent wellness, productivity, and family-focused tech.",
    href: "https://medium.com/@virginiamwega2",
    accent: "text-sky-400",
    iconBg: "bg-sky-400/10",
  },
  {
    icon: BookOpen,
    name: "Newsletter",
    platform: "Substack",
    desc: "Essays and dispatches sent straight to inboxes — the slower, more personal channel.",
    href: "https://virginiamwega.substack.com/",
    accent: "text-orange-400",
    iconBg: "bg-orange-400/10",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">06</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Writing
            </span>
          </div>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-14">
            Writing that
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
              earns the read.
            </span>
          </h2>
        </AnimateIn>

        {/* Featured — link to the full writing portfolio */}
        <AnimateIn variant="scale" delay={150}>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-border bg-surface p-7 mb-5 transition-all duration-400 hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-border shrink-0">
                <Library className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-1">
                  Writing portfolio
                </p>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug mb-1.5">
                  Read everything in one place
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                  A single hub collecting my published work across every channel — engineering deep-dives, long-form essays, and newsletter pieces.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start sm:self-auto whitespace-nowrap text-sm font-semibold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
              View portfolio
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </AnimateIn>

        {/* Channels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimateIn key={c.platform} variant="scale" delay={i * 80}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-400 hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${c.iconBg} border border-border mb-5`}
                  >
                    <Icon className={`h-5 w-5 ${c.accent}`} />
                  </div>

                  {/* Platform label */}
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-1">
                    {c.platform}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug mb-3">
                    {c.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {c.desc}
                  </p>

                  {/* Spacer to align footers */}
                  <div className="flex-1" />

                  {/* Footer link */}
                  <span className="inline-flex items-center gap-1.5 pt-4 border-t border-border text-sm font-semibold text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                    Read on {c.platform}
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
