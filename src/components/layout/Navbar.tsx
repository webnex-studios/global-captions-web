"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-5 pr-6 h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="animate-wobble">
            <Image
              src="/images/gc_logo.webp"
              alt="Global Captions"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
          </div>
          <span className="font-display font-bold text-[17px] text-white tracking-tight group-hover:text-cyan transition-colors">
            Global Captions
          </span>
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-slate-text hover:text-white transition-colors hidden sm:block"
          >
            Privacy
          </Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan hover:bg-cyan-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-[0_4px_20px_rgba(32,178,214,0.35)] active:scale-95"
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  );
}
