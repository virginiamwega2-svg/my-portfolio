import AnimateIn from "./AnimateIn";
import {
  Code2, Workflow, FileText, PenLine, Search, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
  accent: string; // tailwind text color
  iconBg: string; // tailwind bg color (low-alpha tint)
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Full-Stack & AI Engineering",
    body:
      "Production web apps end-to-end — schema, API, Claude/OpenAI integration, auth, payments, CI, and deploy. Built to keep working when an API key runs dry.",
    tags: ["Next.js", "Django", "Claude API", "Stripe"],
    accent: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body:
      "n8n pipelines, cron jobs, and idempotent webhook handlers that connect Stripe, Resend, CRMs, and internal tools without duplicate orders or silent failures.",
    tags: ["n8n", "Webhooks", "Cron", "Resend"],
    accent: "text-violet-400",
    iconBg: "bg-violet-400/10",
  },
  {
    icon: Search,
    title: "SEO",
    body:
      "Technical SEO and content strategy for SaaS and blogs — schema markup, Core Web Vitals, sitemap and robots hygiene, and search-shaped content briefs.",
    tags: ["Technical SEO", "Schema", "CWV"],
    accent: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    body:
      "Developer-facing docs, engineering blog posts, and tutorials that lead with the problem, show the diff, and close with the gotcha. Posts engineers actually read.",
    tags: ["Docs", "Tutorials", "MDX"],
    accent: "text-amber-400",
    iconBg: "bg-amber-400/10",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    body:
      "Long-form articles and on-brand copy for family wellness, productivity, and parent-focused tech — researched, structured, and tuned for the busy reader.",
    tags: ["Wellness", "Productivity", "Long-form"],
    accent: "text-sky-400",
    iconBg: "bg-sky-400/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">06</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Services
            </span>
          </div>
        </AnimateIn>

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <AnimateIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              What I do
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                for clients.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <p className="text-text-secondary text-sm max-w-sm">
              Five lanes of work — from shipping AI products to writing the
              content that explains them. Each priced as a fixed scope.
            </p>
          </AnimateIn>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateIn key={s.title} variant="scale" delay={i * 80}>
                <article className="group h-full flex flex-col rounded-2xl border border-border bg-canvas p-6 transition-all duration-400 hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${s.iconBg} border border-border mb-5`}
                  >
                    <Icon className={`h-5 w-5 ${s.accent}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug mb-3">
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {s.body}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t) => (
                      <span key={t} className="badge badge-warm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 pt-4 border-t border-border text-sm font-semibold text-accent opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    Discuss this
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
