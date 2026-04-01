"use client";

import Image from "next/image";
import PlayStoreBadge from "@/components/ui/PlayStoreBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="relative bg-navy-900 py-28 sm:py-36 overflow-hidden grain">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan/[0.08] rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      {/* Sparkle decorations */}
      {[
        { top: "20%", left: "15%", animationDelay: "0s" },
        { top: "30%", right: "20%", animationDelay: "0.8s" },
        { bottom: "25%", left: "25%", animationDelay: "1.5s" },
        { top: "15%", right: "30%", animationDelay: "2s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan rounded-full animate-twinkle pointer-events-none"
          style={pos}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="animate-bob mb-8 inline-block">
            <Image
              src="/images/gc_logo.webp"
              alt="Global Captions"
              width={80}
              height={80}
              className="rounded-2xl mx-auto shadow-[0_12px_40px_rgba(32,178,214,0.2)]"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Break the Language Barrier.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-slate-text text-lg mt-5 mb-8 max-w-md mx-auto">
            Download Global Captions and understand the world.
          </p>

          <PlayStoreBadge className="[&_img]:h-[68px]" />

          <p className="text-xs text-slate-text/50 mt-3 uppercase tracking-widest font-display">
            Available on Android
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
