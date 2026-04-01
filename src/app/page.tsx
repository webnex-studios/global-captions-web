import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import LanguageMarquee from "@/components/landing/LanguageMarquee";
import BentoFeatures from "@/components/landing/BentoFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import LiveDemo from "@/components/landing/LiveDemo";
import UseCases from "@/components/landing/UseCases";
import PricingCallout from "@/components/landing/PricingCallout";
import CtaBanner from "@/components/landing/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LanguageMarquee />
        <BentoFeatures />
        <HowItWorks />
        <LiveDemo />
        <UseCases />
        <PricingCallout />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
