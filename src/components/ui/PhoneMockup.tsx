import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: "9/19.5" }}
    >
      {/* Phone bezel */}
      <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-white/20 bg-navy-900 shadow-[0_20px_60px_rgba(32,178,214,0.15)] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[22px] bg-navy-900 rounded-b-2xl z-10" />
        {/* Screen content */}
        <div className="absolute inset-[2px] rounded-[2.3rem] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 280px, 320px"
          />
        </div>
      </div>
    </div>
  );
}
