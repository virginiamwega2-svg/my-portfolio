import AnimateIn from "./AnimateIn";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiPython, SiDjango, SiPostgresql, SiPrisma, SiSupabase,
  SiAnthropic, SiOpenai, SiLangchain, SiN8N,
  SiStripe, SiAuth0, SiGithubactions, SiVercel,
  SiRender, SiDocker, SiGit, SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; color: string };

const SKILLS: Skill[] = [
  { name: "Next.js",         icon: SiNextdotjs,     color: "#FFFFFF" },
  { name: "React",           icon: SiReact,         color: "#61DAFB" },
  { name: "TypeScript",      icon: SiTypescript,    color: "#3178C6" },
  { name: "JavaScript",      icon: SiJavascript,    color: "#F7DF1E" },
  { name: "Tailwind CSS",    icon: SiTailwindcss,   color: "#38BDF8" },
  { name: "HTML5",           icon: SiHtml5,         color: "#E34F26" },
  { name: "Node.js",         icon: SiNodedotjs,     color: "#5FA04E" },
  { name: "Python",          icon: SiPython,        color: "#3776AB" },
  { name: "Django",          icon: SiDjango,        color: "#0C4B33" },
  { name: "PostgreSQL",      icon: SiPostgresql,    color: "#4169E1" },
  { name: "Prisma",          icon: SiPrisma,        color: "#2D3748" },
  { name: "Supabase",        icon: SiSupabase,      color: "#3ECF8E" },
  { name: "Claude API",      icon: SiAnthropic,     color: "#C9A96E" },
  { name: "OpenAI",          icon: SiOpenai,        color: "#FFFFFF" },
  { name: "LangChain",       icon: SiLangchain,     color: "#1C3C3C" },
  { name: "n8n",             icon: SiN8N,           color: "#EA4B71" },
  { name: "Stripe",          icon: SiStripe,        color: "#635BFF" },
  { name: "NextAuth",        icon: SiAuth0,         color: "#EB5424" },
  { name: "GitHub Actions",  icon: SiGithubactions, color: "#2088FF" },
  { name: "Vercel",          icon: SiVercel,        color: "#FFFFFF" },
  { name: "Render",          icon: SiRender,        color: "#46E3B7" },
  { name: "Docker",          icon: SiDocker,        color: "#2496ED" },
  { name: "Git",             icon: SiGit,           color: "#F05032" },
  { name: "GitHub",          icon: SiGithub,        color: "#FFFFFF" },
];

const PILLARS = [
  {
    title: "AI with safety nets",
    body: "Every AI surface has a graceful fallback. The app never breaks when an API key runs out of credits.",
  },
  {
    title: "Production discipline",
    body: "Idempotent webhooks, response caching, env-based secrets, CI-gated deploys. The boring parts that keep products steady.",
  },
  {
    title: "Built for messy weeks",
    body: "Designed around real-life interruption — missed weeks, low sleep, sick kids — not idealised happy paths.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">05</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Tech Stack
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-3">
            Skills.
          </h2>
        </AnimateIn>
        <AnimateIn delay={140}>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mb-12">
            The tools I reach for when shipping production AI products end-to-end.
          </p>
        </AnimateIn>

        {/* Skills grid — 2 col on mobile, 3 on md, 4 on lg */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-16">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimateIn
                key={skill.name}
                variant="scale"
                delay={Math.min(i * 30, 360)}
              >
                <div className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface hover:bg-elevated hover:border-accent/30 transition-all duration-200 cursor-default">
                  <Icon
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm text-text-primary font-medium truncate">
                    {skill.name}
                  </span>
                </div>
              </AnimateIn>
            );
          })}
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
