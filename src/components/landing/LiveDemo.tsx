"use client";

import PhoneMockup from "@/components/ui/PhoneMockup";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const orbitingLangs = [
  { code: "ES", color: "#FF6B35", size: 140, duration: 22 },
  { code: "FR", color: "#20B2D6", size: 170, duration: 28 },
  { code: "JP", color: "#FF6B35", size: 200, duration: 34 },
  { code: "KR", color: "#20B2D6", size: 155, duration: 26 },
];

export default function LiveDemo() {
  return (
    <section className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden grain">
      {/* Sound wave arcs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[160, 220, 280, 340].map((r) => (
          <div
            key={r}
            className="absolute border border-white/[0.03] rounded-full"
            style={{ width: r * 2, height: r * 2 }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-3">
            See It In{" "}
            <span className="text-orange">Action</span>
          </h2>
          <p className="text-center text-slate-text mb-16 max-w-md mx-auto">
            Watch real-time translation happen before your eyes
          </p>
        </ScrollReveal>

        <div className="relative flex justify-center">
          {/* Orbiting language pills */}
          {orbitingLangs.map((lang) => (
            <div
              key={lang.code}
              className="absolute hidden sm:block"
              style={{
                width: lang.size * 2,
                height: lang.size * 2,
                top: `calc(50% - ${lang.size}px)`,
                left: `calc(50% - ${lang.size}px)`,
                animation: `spin-slow ${lang.duration}s linear infinite`,
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border"
                style={{
                  borderColor: `${lang.color}40`,
                  color: lang.color,
                  background: `${lang.color}10`,
                  animation: `spin-slow ${lang.duration}s linear infinite reverse`,
                }}
              >
                {lang.code}
              </div>
            </div>
          ))}

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <PhoneMockup
                src="/images/features/8.webp"
                alt="Live sports with real-time captions"
                className="w-[260px] sm:w-[300px]"
              />

              {/* Floating caption overlay */}
              <div className="absolute -right-4 sm:-right-20 top-[20%] bg-navy-800/95 backdrop-blur-sm border border-cyan/20 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(32,178,214,0.15)] max-w-[220px]">
                <TypewriterText />
              </div>

              {/* Glow under phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-cyan/10 blur-3xl rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
