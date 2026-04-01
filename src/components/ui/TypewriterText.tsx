"use client";

import { useState, useEffect, useCallback } from "react";
import { CAPTION_DEMOS } from "@/lib/constants";

export default function TypewriterText({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displaySource, setDisplaySource] = useState("");
  const [displayTranslated, setDisplayTranslated] = useState("");
  const [phase, setPhase] = useState<"source" | "pause" | "translated" | "hold" | "clear">("source");

  const demo = CAPTION_DEMOS[currentIndex];

  const getTypeDelay = useCallback((char: string, text: string, pos: number) => {
    if (char === "," || char === ".") return 180;
    if (char === " " && pos > 0 && text[pos - 1]?.match(/[a-z]/i)) return 25;
    const word = text.slice(Math.max(0, text.lastIndexOf(" ", pos) + 1), pos + 1);
    if (word.length > 6) return 55;
    return 35;
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "source") {
      if (displaySource.length < demo.source.length) {
        const nextChar = demo.source[displaySource.length];
        const delay = getTypeDelay(nextChar, demo.source, displaySource.length);
        timeout = setTimeout(() => {
          setDisplaySource(demo.source.slice(0, displaySource.length + 1));
        }, delay);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 400);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("translated"), 300);
    } else if (phase === "translated") {
      if (displayTranslated.length < demo.translated.length) {
        const nextChar = demo.translated[displayTranslated.length];
        const delay = getTypeDelay(nextChar, demo.translated, displayTranslated.length);
        timeout = setTimeout(() => {
          setDisplayTranslated(demo.translated.slice(0, displayTranslated.length + 1));
        }, delay);
      } else {
        timeout = setTimeout(() => setPhase("hold"), 2200);
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("clear"), 100);
    } else if (phase === "clear") {
      setDisplaySource("");
      setDisplayTranslated("");
      setCurrentIndex((i) => (i + 1) % CAPTION_DEMOS.length);
      setPhase("source");
    }

    return () => clearTimeout(timeout);
  }, [phase, displaySource, displayTranslated, demo, getTypeDelay]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="mb-1 text-[11px] text-cyan font-medium tracking-wider">
        {demo.langPair}
      </div>
      <div className="text-slate-text min-h-[1.4em]">
        {displaySource}
        {phase === "source" && (
          <span className="inline-block w-[2px] h-[14px] bg-cyan ml-0.5 animate-pulse align-middle" />
        )}
      </div>
      {displayTranslated && (
        <div className="text-white font-medium mt-1 min-h-[1.4em]">
          {displayTranslated}
          {phase === "translated" && (
            <span className="inline-block w-[2px] h-[14px] bg-orange ml-0.5 animate-pulse align-middle" />
          )}
        </div>
      )}
    </div>
  );
}
