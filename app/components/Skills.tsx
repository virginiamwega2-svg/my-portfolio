"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { Layers, LayoutGrid } from "lucide-react";
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

/* Reusable pill — same look in both modes */
function SkillPill({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)] cursor-default whitespace-nowrap">
      <Icon className="h-5 w-5 shrink-0" style={{ color: skill.color }} />
      <span className="text-sm text-text-primary font-medium">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const [mode, setMode] = useState<"marquee" | "grid">("marquee");

  // Split into two rows for the marquee belts
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);

  return (
    <section id="skills" className="py-32 bg-canvas overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-3">
            Skills.
          </h2>
        </AnimateIn>
        <AnimateIn delay={140}>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mb-8">
            The tools I reach for when shipping production AI products end-to-end.
          </p>
        </AnimateIn>

        {/* Change Mode toggle */}
        <AnimateIn delay={180}>
          <button
            type="button"
            onClick={() => setMode(mode === "marquee" ? "grid" : "marquee")}
            aria-label="Change skills view mode"
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-border bg-elevated text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all duration-200"
          >
            {mode === "marquee" ? (
              <LayoutGrid className="h-3.5 w-3.5" />
            ) : (
              <Layers className="h-3.5 w-3.5" />
            )}
            Change Mode
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-text-tertiary ml-1">
              {mode === "marquee" ? "→ Grid" : "→ Belt"}
            </span>
          </button>
        </AnimateIn>

        {/* Marquee mode — two opposing belts with edge fade */}
        {mode === "marquee" && (
          <div className="skills-mask mb-16">
            <div className="space-y-3">
              <div className="skills-marquee skills-marquee-left flex gap-2.5">
                {[...row1, ...row1].map((s, i) => (
                  <SkillPill key={`r1-${i}`} skill={s} />
                ))}
              </div>
              <div className="skills-marquee skills-marquee-right flex gap-2.5">
                {[...row2, ...row2].map((s, i) => (
                  <SkillPill key={`r2-${i}`} skill={s} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid mode — static labelled grid */}
        {mode === "grid" && (
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-16">
            {SKILLS.map((skill, i) => (
              <AnimateIn
                key={skill.name}
                variant="up"
                delay={Math.min(i * 35, 420)}
              >
                <SkillPill skill={skill} />
              </AnimateIn>
            ))}
          </div>
        )}

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
