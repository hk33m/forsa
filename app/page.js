 import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MarketingSection } from "@/components/marketing-section"
import { TripsSection } from "@/components/trips-section"
import { PrintingSection } from "@/components/printing-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
     
      <Header />
      <HeroSection />
      <ServicesSection />
      <MarketingSection />
      <TripsSection />
      <PrintingSection />
      <WhyUsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
