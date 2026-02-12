'use client'

import { CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const phases = [
  {
    number: '01',
    title: 'Discovery & Stakeholder Alignment',
    description: 'Conduct comprehensive business process analysis, identify pain points, align stakeholders on vision and success metrics.',
    details: ['Process workshops', 'Stakeholder interviews', 'Current state mapping', 'Vision articulation'],
  },
  {
    number: '02',
    title: 'Process Mapping & Solution Blueprint',
    description: 'Design target state architecture, document solution requirements, create detailed implementation roadmap.',
    details: ['Future state design', 'Requirement documentation', 'Architecture blueprints', 'Impact analysis'],
  },
  {
    number: '03',
    title: 'Architecture Validation & Scope Governance',
    description: 'Validate solution design with stakeholders, establish governance structure, manage scope and change control.',
    details: ['Design reviews', 'Risk assessment', 'Scope baseline', 'Change management'],
  },
  {
    number: '04',
    title: 'Delivery Oversight & Sprint Collaboration',
    description: 'Oversee development cycles, facilitate sprint ceremonies, resolve blockers, ensure quality at each iteration.',
    details: ['Sprint planning', 'Daily standups', 'Issue resolution', 'Quality assurance'],
  },
  {
    number: '05',
    title: 'Go-Live, UAT & Performance Optimization',
    description: 'Orchestrate user acceptance testing, manage go-live execution, monitor performance, optimize post-launch.',
    details: ['UAT coordination', 'Go-live readiness', 'Performance tuning', 'Continuous improvement'],
  },
]

export function Methodology() {
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>([])

  useEffect(() => {
    setVisiblePhases(new Array(phases.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-phase') || '0')
            setVisiblePhases((prev) => {
              const updated = [...prev]
              updated[index] = true
              return updated
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const phaseElements = document.querySelectorAll('[data-phase]')
    phaseElements.forEach((el) => observer.observe(el))

    return () => {
      phaseElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How I Lead Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A proven five-phase transformation model that ensures structured, measurable success
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <div
                key={index}
                data-phase={index}
                className="relative"
                style={{
                  opacity: visiblePhases[index] ? 1 : 0,
                  transform: visiblePhases[index]
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.9)',
                  transition: `opacity 0.6s ease-out ${index * 0.12}s, transform 0.6s ease-out ${index * 0.12}s`,
                }}
              >
                {/* Phase number/circle */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4">
                    {phase.number}
                  </div>
                  {/* Vertical connectors for mobile */}
                  {index < phases.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border" />
                  )}
                </div>

                {/* Content card */}
                <div className="bg-secondary/50 border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 text-center">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{phase.description}</p>

                  <ul className="space-y-2">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-secondary/30 border border-border rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Structured Thinking</h4>
              <p className="text-muted-foreground text-sm">
                Every decision grounded in data, clear logic, and validated assumptions
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Stakeholder-Centric</h4>
              <p className="text-muted-foreground text-sm">
                Continuous alignment across technical, business, and operational perspectives
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Delivery Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Obsessive focus on timelines, budgets, scope, and measurable business outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
