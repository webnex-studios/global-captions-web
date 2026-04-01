"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import PhoneMockup from "@/components/ui/PhoneMockup";

const steps = [
  {
    num: "01",
    title: "Choose Your Languages",
    description: "Pick source and target from 10 supported languages",
    image: "/images/features/6.webp",
    align: "left" as const,
  },
  {
    num: "02",
    title: "Tap to Start",
    description: "One toggle activates real-time captioning over any app",
    image: "/images/features/5.webp",
    align: "right" as const,
  },
  {
    num: "03",
    title: "Captions Everywhere",
    description: "Floating translated text appears over any app instantly",
    image: "/images/features/2.webp",
    align: "left" as const,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-ice py-24 sm:py-32 overflow-hidden">
      {/* Faint decorative doodles */}
      <div className="absolute right-[10%] top-[15%] opacity-[0.05] pointer-events-none">
        <svg width="60" height="40" viewBox="0 0 60 40" stroke="#1a1a2e" strokeWidth="1.5" fill="none">
          <path d="M5 20 Q 15 5, 30 20 Q 45 35, 55 20" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mb-4 text-center">
            How It Works
          </h2>
          <p className="text-center text-slate-text mb-16 max-w-md mx-auto">
            Three steps. That&apos;s all it takes to understand any language.
          </p>
        </ScrollReveal>

        {/* Connector line */}
        <div className="hidden lg:block absolute left-1/2 top-[220px] bottom-[120px] w-px">
          <svg width="2" height="100%" className="overflow-visible">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#20B2D6"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.num}
              delay={i * 0.1}
              direction={step.align === "left" ? "left" : "right"}
            >
              <div
                className={`flex flex-col gap-8 items-center ${
                  step.align === "left"
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* Text side */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                  {/* Step number with imperfect circle */}
                  <div className="relative mb-4">
                    <svg width="72" height="72" viewBox="0 0 72 72" className="absolute inset-0">
                      <path
                        d={
                          i === 0
                            ? "M36 4 Q 65 3, 68 36 Q 70 65, 36 68 Q 5 70, 4 36 Q 2 8, 36 4"
                            : i === 1
                            ? "M36 5 Q 67 6, 67 36 Q 68 67, 36 67 Q 6 68, 5 36 Q 4 5, 36 5"
                            : "M36 3 Q 66 5, 69 36 Q 67 66, 36 69 Q 4 67, 3 36 Q 5 6, 36 3"
                        }
                        stroke="#20B2D6"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.4"
                      />
                    </svg>
                    <span className="font-display text-3xl font-light text-cyan block w-[72px] h-[72px] flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-dark-text mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-slate-text text-base text-center lg:text-left max-w-sm">
                    {step.description}
                  </p>
                </div>

                {/* Phone side */}
                <div
                  className="lg:w-1/2 flex justify-center"
                  style={{
                    transform: `rotate(${step.align === "left" ? 6 : -6}deg)`,
                  }}
                >
                  <PhoneMockup
                    src={step.image}
                    alt={step.title}
                    className="w-[200px] sm:w-[220px]"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
