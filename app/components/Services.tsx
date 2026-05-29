import AnimateIn from "./AnimateIn";
import {
  Code2, Workflow, FileText, PenLine, Search, ArrowRight, ArrowUpRight, Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Proof = { text: string; href?: string };

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
  accent: string;
  iconBg: string;
  deliverables?: string[];
  proof?: Proof;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Full-Stack & AI Engineering",
    body:
      "Production web apps end-to-end — built to keep working when an API key runs dry.",
    deliverables: [
      "Schema design, REST/Next API routes, and full auth flows",
      "Claude / OpenAI integration with tool use, streaming, and graceful fallbacks",
      "Stripe Checkout + idempotent webhook handlers",
      "Production hardening — rate limits, security headers, CI checks",
    ],
    proof: {
      text: "Shipped end-to-end in Fit Parent Plan — 74 paying parents, 4.9 / 5 across 38 reviews.",
      href: "#projects",
    },
    tags: ["Next.js", "Django", "Claude API", "Stripe"],
    accent: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body:
      "n8n pipelines and webhook plumbing that connect SaaS tools without duplicate orders or silent failures.",
    deliverables: [
      "n8n workflow architecture, build, and monitoring",
      "Idempotent webhook handlers (Stripe, Resend, Calendly)",
      "Cron jobs and scheduled digests / nudges",
      "Event-pipeline design — structured logSession events to downstream tools",
    ],
    proof: {
      text: "Powers the weekly Parent Pulse digest pipeline behind Fit Parent Plan.",
      href: "#projects",
    },
    tags: ["n8n", "Webhooks", "Cron", "Resend"],
    accent: "text-violet-400",
    iconBg: "bg-violet-400/10",
  },
  {
    icon: Search,
    title: "SEO",
    body:
      "Technical SEO and content strategy for SaaS and blogs — measurable, not folk-magic.",
    deliverables: [
      "Technical audit + prioritised fix list (CWV, indexing, schema)",
      "JSON-LD structured data implementation",
      "Sitemap, robots, OG + Twitter card pipeline",
      "Search-shaped content briefs with keyword clustering",
    ],
    proof: {
      text: "This portfolio: full schema markup, sitemap.xml, robots.ts, OG images, and CWV targets met.",
    },
    tags: ["Technical SEO", "Schema", "CWV", "Content Strategy"],
    accent: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    body:
      "Developer-facing docs, engineering blog posts, and tutorials that lead with the problem, show the diff, and close with the gotcha.",
    proof: {
      text: "Engineering blog — idempotent Stripe webhooks: the 30-line pattern I run in production. Zero duplicate orders in 12 months. See the full writing portfolio below.",
      href: "#writing",
    },
    tags: ["Docs", "Tutorials", "MDX"],
    accent: "text-amber-400",
    iconBg: "bg-amber-400/10",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    body:
      "Long-form articles and on-brand copy for family wellness, productivity, and parent-focused tech — researched, structured, and tuned for the busy reader.",
    proof: {
      text: "Long-form on Medium — a parent-fitness essay arguing the 20-minute window is the workout that fits the life, not a compromise. See the full writing portfolio below.",
      href: "#writing",
    },
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
            <span className="font-mono text-sm text-accent">05</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Services
            </span>
          </div>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-14">
            What I do
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
              for clients.
            </span>
          </h2>
        </AnimateIn>

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
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {s.body}
                  </p>

                  {/* Deliverables — checklist of what the client gets */}
                  {s.deliverables && (
                    <>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-2.5">
                        What you get
                      </p>
                      <ul className="flex flex-col gap-2 mb-5">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-text-secondary leading-snug"
                          >
                            <Check
                              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${s.accent}`}
                              strokeWidth={2.5}
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Proof — link to where it's been demonstrated */}
                  {s.proof && (
                    <div className="mb-5 rounded-lg border border-border bg-elevated/60 px-3 py-2.5">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-1">
                        Proof
                      </p>
                      {s.proof.href ? (
                        <a
                          href={s.proof.href}
                          {...(s.proof.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="flex flex-col gap-1.5 text-xs text-text-secondary leading-snug hover:text-accent transition-colors"
                        >
                          <span>{s.proof.text}</span>
                          {s.proof.href.startsWith("http") && (
                            <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                              Read more
                              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          )}
                        </a>
                      ) : (
                        <p className="text-xs text-text-secondary leading-snug">
                          {s.proof.text}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Spacer to push footer down when card has less content */}
                  <div className="flex-1" />

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
