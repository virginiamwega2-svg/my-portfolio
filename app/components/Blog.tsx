import AnimateIn from "./AnimateIn";
import { ArrowUpRight, BookOpen, Bot, Code2, HeartPulse } from "lucide-react";

/*  Swap these placeholders for real posts as you publish.
    Each entry renders one card; the section auto-grids based on count. */
const POSTS = [
  {
    category: "Software Development",
    icon: Code2,
    title: "Idempotent Stripe webhooks: the pattern that survives retries",
    excerpt:
      "How processed-event-ID persistence prevents duplicate orders when networks blink — and the exact Next.js route handler shape I use.",
    date: "Coming soon",
    readTime: "6 min read",
    href: "#",
    accent: "text-accent",
  },
  {
    category: "AI Automation",
    icon: Bot,
    title: "Claude agents that don't break when the key runs dry",
    excerpt:
      "Streaming responses with a mock fallback layer, response caching by (user, parsed_at), and the small reliability tricks behind production AI features.",
    date: "Coming soon",
    readTime: "8 min read",
    href: "#",
    accent: "text-violet-400",
  },
  {
    category: "Technical Writing",
    icon: BookOpen,
    title: "Writing docs that engineers actually read",
    excerpt:
      "The structure I use for technical posts — lead with the problem, show the diff, close with the gotcha — and why bullet-walls fail.",
    date: "Coming soon",
    readTime: "5 min read",
    href: "#",
    accent: "text-emerald-400",
  },
  {
    category: "Health & Productivity",
    icon: HeartPulse,
    title: "Building software around messy weeks, not happy paths",
    excerpt:
      "Why the busiest week is the design brief — lessons from shipping AI products to parents who don't have predictable schedules.",
    date: "Coming soon",
    readTime: "4 min read",
    href: "#",
    accent: "text-amber-400",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-surface">
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

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <AnimateIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              Notes from the
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                build log.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <p className="text-text-secondary text-sm max-w-sm">
              Field notes on shipping AI products, automation, and software
              that fits real life. New posts are on the way.
            </p>
          </AnimateIn>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {POSTS.map((post, i) => {
            const Icon = post.icon;
            return (
              <AnimateIn key={post.title} variant="scale" delay={i * 90}>
                <article className="group h-full flex flex-col rounded-2xl border border-border bg-canvas p-7 transition-all duration-400 hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
                  {/* Category + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-text-tertiary">
                      <Icon className={`h-3.5 w-3.5 ${post.accent}`} />
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-text-tertiary">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-xs text-text-tertiary">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-60 group-hover:opacity-100 transition-opacity">
                      Read
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
