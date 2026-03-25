import AnimateIn from "./AnimateIn";

const CATEGORIES = [
  {
    icon: "◈",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Storybook",
      "WebGL",
    ],
  },
  {
    icon: "◉",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    icon: "◎",
    title: "Tools & Ops",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Figma",
      "Linux",
    ],
  },
];

const PILLARS = [
  {
    title: "Always learning",
    body: "Staying current with emerging web standards and tooling.",
  },
  {
    title: "Performance first",
    body: "Every millisecond matters — built for speed, a11y, and SEO.",
  },
  {
    title: "Design-driven",
    body: "Bridging the gap between polished design and clean code.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">04</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Tech Stack
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-16">
            Built with the
            <br />
            right tools.
          </h2>
        </AnimateIn>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat.title} variant="scale" delay={i * 120}>
              <div className="p-7 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent text-lg leading-none">
                    {cat.icon}
                  </span>
                  <h3 className="font-semibold text-text-primary">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge badge-warm text-sm py-1.5 px-3 hover:border-accent/50 hover:text-accent hover:bg-accent-muted transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Pillars strip */}
        <AnimateIn variant="fade" delay={400}>
          <div className="rounded-2xl bg-surface border border-border p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
              {PILLARS.map((pillar, i) => (
                <div key={pillar.title} className={i > 0 ? "sm:border-l sm:border-border sm:pl-8" : ""}>
                  <div className="text-accent font-semibold mb-2">
                    {pillar.title}
                  </div>
                  <div className="text-sm text-text-secondary leading-relaxed">
                    {pillar.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
