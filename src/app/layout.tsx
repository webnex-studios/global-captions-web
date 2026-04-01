import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Global Captions — Real-Time Audio Translation & Live Captions",
  description:
    "Translate TikTok, YouTube, live streams, and conversations in real-time. Floating captions over any Android app. 10 languages supported.",
  keywords: [
    "live captions",
    "real-time translation",
    "audio translation",
    "subtitle app",
    "speech to text",
    "language translation",
  ],
  openGraph: {
    title: "Global Captions — Understand Every Language Instantly",
    description:
      "Real-time audio captioning and translation for any Android app. Watch content in any language with floating live captions.",
    type: "website",
    images: ["/images/features/1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
