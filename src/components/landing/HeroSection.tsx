"use client";

import PhoneMockup from "@/components/ui/PhoneMockup";
import PlayStoreBadge from "@/components/ui/PlayStoreBadge";
import TypewriterText from "@/components/ui/TypewriterText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background globe SVG */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] opacity-[0.04] animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan w-full h-full">
          <circle cx="200" cy="200" r="180" />
          <circle cx="200" cy="200" r="130" />
          <circle cx="200" cy="200" r="80" />
          <ellipse cx="200" cy="200" rx="180" ry="60" />
          <ellipse cx="200" cy="200" rx="60" ry="180" />
          <line x1="20" y1="200" x2="380" y2="200" />
          <line x1="200" y1="20" x2="200" y2="380" />
          <ellipse cx="200" cy="200" rx="180" ry="100" transform="rotate(30 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="100" transform="rotate(-30 200 200)" />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute left-[8%] top-[18%] text-6xl opacity-[0.06] animate-float pointer-events-none select-none font-display" style={{ animationDelay: "0.5s" }}>
        &#25991;
      </div>
      <div className="absolute right-[22%] bottom-[22%] w-16 h-12 border border-white/[0.05] rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute left-[15%] bottom-[30%] w-10 h-8 border border-cyan/[0.08] rounded-xl -rotate-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          {/* Left content - 57% */}
          <div className="lg:w-[57%] w-full max-w-xl">
            {/* Eyebrow */}
            <p className="hero-fade text-xs font-mono tracking-[0.2em] text-cyan mb-6 uppercase" style={{ animationDelay: "0.1s" }}>
              Real-Time AI Captions
              <span className="inline-block w-[2px] h-3 bg-cyan ml-1 animate-pulse align-middle" />
            </p>

            {/* Headline stack */}
            <h1 className="hero-fade font-display text-white mb-1" style={{ animationDelay: "0.2s" }}>
              <span className="block text-[clamp(2.5rem,5vw,3rem)] font-light leading-tight">
                Understand
              </span>
            </h1>

            <h1 className="hero-fade font-display mb-1" style={{ animationDelay: "0.32s" }}>
              <span className="block text-[clamp(3rem,6vw,4rem)] font-extrabold leading-tight bg-gradient-to-r from-cyan via-cyan-light to-white bg-clip-text text-transparent">
                Every Language
              </span>
            </h1>

            <h1
              className="hero-tilt font-display mb-8"
              style={{ animationDelay: "0.44s", transformOrigin: "left center" }}
            >
              <span className="block text-[clamp(2.5rem,5vw,3.2rem)] font-normal italic text-white leading-tight">
                Instantly<span className="text-orange text-[1.5em] not-italic">.</span>
              </span>
            </h1>

            {/* Body */}
            <p className="hero-fade text-slate-text text-lg leading-relaxed max-w-[420px] mb-8" style={{ animationDelay: "0.55s" }}>
              Translate TikTok, YouTube, live streams, and conversations
              in real-time. Floating captions over any app.
            </p>

            {/* CTAs */}
            <div className="hero-fade flex flex-wrap items-center gap-3 mb-4" style={{ animationDelay: "0.65s" }}>
              <PlayStoreBadge />
              <a
                href="#how-it-works"
                className="text-sm text-white/80 border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
              >
                See How It Works
              </a>
            </div>

            <p className="hero-fade text-xs text-slate-text/70 flex items-center gap-1.5" style={{ animationDelay: "0.75s" }}>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Free to start. No credit card needed.
            </p>
          </div>

          {/* Right content - 43% */}
          <div className="lg:w-[43%] w-full flex justify-center lg:justify-end relative hero-phone">
            <div className="relative lg:mr-[-40px]">
              <PhoneMockup
                src="/images/features/1.webp"
                alt="Global Captions app showing live translation"
                className="w-[260px] sm:w-[280px]"
                priority
              />
              {/* Floating caption outside phone */}
              <div className="hero-caption absolute -left-4 top-[15%] sm:-left-16 bg-navy-800/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(32,178,214,0.12)] max-w-[200px]">
                <TypewriterText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
