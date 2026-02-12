'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const heroBottom = heroRef.current.getBoundingClientRect().bottom
      const progress = Math.max(0, Math.min(1, 1 - heroBottom / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-background overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 1 - scrollProgress * 1.2,
          transform: `translateY(${scrollProgress * 80}px)`,
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <img
          src="/profile.jpg"
          alt="Professional Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-background/40 via-background/50 to-background" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Strategic Leadership</h1>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center pt-20 relative z-20">
        <div className="mb-8 bg-foreground/5 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance drop-shadow-lg">
            Driving Digital Transformation Through Structured Thinking & Strategic Delivery
          </h1>
          <p className="text-xl text-foreground mb-8 text-balance font-medium drop-shadow-md">
            Senior Business Analyst | Project Manager | ERP & Systems Transformation Specialist
          </p>
        </div>

        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance bg-foreground/5 backdrop-blur-sm rounded-lg p-6 drop-shadow-md">
          I work at the intersection of business strategy and technology execution. I translate complex business challenges into structured system architectures, scalable processes, and successful digital implementations. From requirement elicitation to go-live, I lead transformation initiatives that deliver measurable operational impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-0 group"
          >
            Explore Case Studies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
          >
            Work With Me
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-primary hover:bg-accent hover:text-accent-foreground"
          >
            Download CV
          </Button>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}
