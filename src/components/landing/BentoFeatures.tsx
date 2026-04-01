"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { image: "/images/features/1.webp", label: "Real-Time Captions", area: "a" },
  { image: "/images/features/2.webp", label: "Social Media", area: "b" },
  { image: "/images/features/8.webp", label: "Live Sports", area: "c" },
  { image: null, label: "10 Languages.\nZero Delay.", area: "text" },
  { image: "/images/features/3.webp", label: "Video Translation", area: "d" },
  { image: "/images/features/4.webp", label: "AI Speech-to-Text", area: "e" },
  { image: "/images/features/5.webp", label: "Easy Setup", area: "f" },
  { image: "/images/features/6.webp", label: "Language Settings", area: "g" },
  { image: "/images/features/7.webp", label: "Account Settings", area: "h" },
];

const delays = [0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.36, 0.42, 0.48];

export default function BentoFeatures() {
  return (
    <section className="relative py-24 sm:py-32 bg-navy-700 grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            What Can You Caption?
          </h2>
          <svg width="200" height="12" viewBox="0 0 200 12" className="mb-12">
            <path
              d="M0 6 Q 15 0, 30 6 Q 45 12, 60 6 Q 75 0, 90 6 Q 105 12, 120 6 Q 135 0, 150 6 Q 165 12, 180 6 Q 195 0, 200 6"
              stroke="#20B2D6"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </ScrollReveal>

        {/* Grid showing ALL 8 images + 1 text card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {features.map((feature, i) => {
            const isText = !feature.image;

            return (
              <ScrollReveal key={feature.area} delay={delays[i]}>
                <div
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(32,178,214,0.15)] ${
                    isText
                      ? "rounded-[20px] bg-cyan flex items-center justify-center aspect-[1/2]"
                      : "rounded-2xl bg-navy-800"
                  } ${feature.area === "b" ? "rotate-[0.5deg]" : ""}`}
                >
                  {feature.image ? (
                    <div className="relative aspect-[1/2]">
                      <Image
                        src={feature.image}
                        alt={feature.label}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                  ) : (
                    <div className="p-6 text-center relative w-full">
                      <p className="font-display text-xl sm:text-2xl font-bold text-white whitespace-pre-line leading-tight">
                        {feature.label}
                      </p>
                      <div className="absolute top-3 right-3 opacity-30">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
