'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const strengths = [
  'Senior-level requirement engineering expertise (BRD, FRD, SDD)',
  'Strong documentation discipline and knowledge transfer capability',
  'Deep finance systems understanding and module expertise',
  'API literacy and technical collaboration with engineering teams',
  'Cross-functional stakeholder management across C-suite to operational teams',
  'International exposure across APAC, EMEA, and Americas regions',
  'Enterprise change management and organizational transformation',
  'Risk identification and mitigation in complex programs',
  'Data modeling and analytics architecture thinking',
  'Vendor management and contract negotiation',
  'Agile & waterfall delivery model expertise',
  'Post-implementation review and continuous optimization',
]

export function Strengths() {
  const [cardVisible, setCardVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('strength-card')) setCardVisible(true)
            if (entry.target.classList.contains('strength-stats')) setStatsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const card = document.querySelector('.strength-card')
    const stats = document.querySelector('.strength-stats')

    if (card) observer.observe(card)
    if (stats) observer.observe(stats)

    return () => {
      if (card) observer.unobserve(card)
      if (stats) observer.unobserve(stats)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Clients Trust Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A proven track record of delivering enterprise-grade transformations with strategic rigor
          </p>
        </div>

        <div
          className="strength-card border border-border bg-card rounded-lg bg-secondary/50 p-12"
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
                style={{
                  opacity: cardVisible ? 1 : 0,
                  transform: cardVisible ? 'scale(1)' : 'scale(0.95)',
                  transition: `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`,
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{strength}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="strength-stats mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-muted-foreground text-sm">Years of Enterprise Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground text-sm">Transformations Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">$500M+</div>
            <p className="text-muted-foreground text-sm">Total Project Value Led</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-muted-foreground text-sm">On-Time Go-Live Record</p>
          </div>
        </div>
      </div>
    </section>
  )
}
