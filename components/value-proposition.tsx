'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, Zap, Settings, TrendingUp } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const valuePropositions = [
  {
    title: 'Strategic Analysis',
    description: 'Business process reengineering, requirement engineering, solution design, stakeholder alignment.',
    icon: BarChart3,
  },
  {
    title: 'Program & Project Leadership',
    description: 'Multi-stakeholder coordination, risk management, milestone control, UAT governance, vendor collaboration.',
    icon: Zap,
  },
  {
    title: 'Systems Architecture Thinking',
    description: 'ERP ecosystems, finance module structuring, API integrations, data modeling, reporting strategy.',
    icon: Settings,
  },
  {
    title: 'Operational Impact',
    description: 'Cost visibility, automation, process standardization, performance dashboards, scalable digital frameworks.',
    icon: TrendingUp,
  },
]

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    setVisibleCards(new Array(valuePropositions.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = valuePropositions.findIndex(
              (_, i) => i === parseInt(entry.target.getAttribute('data-index') || '0')
            )
            if (index !== -1) {
              setVisibleCards((prev) => {
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-index]')
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What I Deliver</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive approach to digital transformation that combines strategic insight with operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuePropositions.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-index={index}
                style={{
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index]
                    ? 'translateY(0) scale(1)'
                    : 'translateY(20px) scale(0.95)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                <Card className="p-8 border border-border bg-card hover:bg-secondary transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
