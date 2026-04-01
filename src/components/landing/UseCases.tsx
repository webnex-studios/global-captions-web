"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const cases = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Social Media",
    description: "Watch TikTok, Reels, and YouTube in any language",
    featured: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2 C12 2 6 8 6 12 s2.7 6 6 6 6-2.7 6-6 S12 2 12 2" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Live Sports",
    description: "Understand any broadcast commentary instantly",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 0 0-8 0v2" />
      </svg>
    ),
    title: "Work & Meetings",
    description: "Real-time translation for international calls",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Language Learning",
    description: "Immerse yourself with live subtitle support",
    featured: false,
  },
];

export default function UseCases() {
  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)",
        clipPath: "polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Use It{" "}
            <span className="text-orange">Anywhere</span>
          </h2>
          <p className="text-center text-slate-text mb-14 max-w-md mx-auto">
            One app. Every scenario. Every language.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.09}>
              <div
                className={`bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-6 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 ${
                  c.featured ? "sm:row-span-1 min-h-[200px]" : "min-h-[180px]"
                } ${i === 2 ? "lg:-ml-3" : ""}`}
              >
                <div className="text-cyan mb-4">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-slate-text text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
