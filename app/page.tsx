import { HeroSection } from '@/components/hero-section'
import { ValueProposition } from '@/components/value-proposition'
import { CaseStudies } from '@/components/case-studies'
import { Methodology } from '@/components/methodology'
import { Services } from '@/components/services'
import { Strengths } from '@/components/strengths'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <CaseStudies />
      <Methodology />
      <Services />
      <Strengths />
      <ContactSection />
      <Footer />
    </main>
  )
}
