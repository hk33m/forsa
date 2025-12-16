import Image from "next/image";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { StatsSection } from "@/components/home/stats-section"
import { ProductsSection } from "@/components/home/products-section"
import { QualitySection } from "@/components/home/quality-section"
import { PartnersSection } from "@/components/home/partners-section"
import { CTASection } from "@/components/home/cta-section"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductsSection />
        <QualitySection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
