"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import PlayStoreBadge from "@/components/ui/PlayStoreBadge";

export default function PricingCallout() {
  return (
    <section className="relative bg-white py-24 sm:py-32 dot-grid">
      <div className="max-w-xl mx-auto px-6">
        <ScrollReveal>
          <div className="gradient-border">
            <div className="bg-white rounded-[20px] p-8 sm:p-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark-text mb-6">
                Start Free. Go Unlimited.
              </h2>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-cyan font-display text-2xl font-bold">$</span>
                <span className="font-display text-5xl font-extrabold text-dark-text">4.99</span>
                <span className="text-slate-text text-lg">/month</span>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-2 gap-6 text-left mb-8">
                {/* Free */}
                <div>
                  <h4 className="font-display font-semibold text-dark-text mb-3 text-sm uppercase tracking-wider">
                    Free
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-text">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-text/50 mt-0.5">&#8226;</span>
                      100 min/month
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-text/50 mt-0.5">&#8226;</span>
                      5 languages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-text/50 mt-0.5">&#8226;</span>
                      Basic captions
                    </li>
                  </ul>
                </div>

                {/* Premium */}
                <div>
                  <h4 className="font-display font-semibold text-dark-text mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    Premium
                    <span className="text-[10px] bg-cyan/10 text-cyan px-2 py-0.5 rounded-full font-medium normal-case tracking-normal">
                      Popular
                    </span>
                  </h4>
                  <ul className="space-y-2 text-sm text-dark-text">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      Unlimited minutes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      10+ languages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>

              <PlayStoreBadge className="mb-3" />

              <p className="text-xs text-slate-text flex items-center justify-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20B2D6" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                Includes 5-day free trial
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
