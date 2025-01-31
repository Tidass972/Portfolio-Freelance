import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import { StatsSection } from "@/components/StatsSection"
import { WorkProcessSection } from "@/components/WorkProcessSection"
import { ContactFormSection } from "@/components/ContactFormSection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { PricingSection } from "@/components/PricingSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <HeroSection 
        name="David Debarieux"
        tagline="Transformez vos idées en solutions numériques"
        backgroundImage="/images/hero.jpg"
      />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <FeaturedProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <StatsSection />
      <WorkProcessSection />
      <PricingSection />
      <ContactFormSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
