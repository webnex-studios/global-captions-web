import Image from "next/image";
import Link from "next/link";
import PlayStoreBadge from "@/components/ui/PlayStoreBadge";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/gc_logo.webp"
                alt="Global Captions"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-display font-semibold text-[15px] text-white">
                Global Captions
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-text">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/15">|</span>
              <Link
                href="/delete-account"
                className="hover:text-white transition-colors"
              >
                Delete Account
              </Link>
              <span className="text-white/15">|</span>
              <a
                href="mailto:contact@globalcaptions.app"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right */}
          <PlayStoreBadge className="scale-90 origin-left sm:origin-right" />
        </div>

        <div className="mt-8 pt-5 border-t border-white/5 text-xs text-slate-text/60">
          &copy; {new Date().getFullYear()} Global Captions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
