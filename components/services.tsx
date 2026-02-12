'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    title: 'ERP & Systems Implementation Advisory',
    highlights: [
      'End-to-end requirement engineering',
      'Module structuring & configuration',
      'Implementation oversight & governance',
      'Go-live orchestration',
      'Post-launch optimization',
    ],
  },
  {
    title: 'Digital Transformation Consulting',
    highlights: [
      'Process modernization strategy',
      'Workflow optimization design',
      'Automation opportunity assessment',
      'Reporting & analytics architecture',
      'Change management framework',
    ],
  },
  {
    title: 'Project & Product Leadership',
    highlights: [
      'Senior BA engagement',
      'Product Owner leadership',
      'Program management oversight',
      'Structured delivery framework',
      'Stakeholder alignment & governance',
    ],
  },
]

export function Services() {
  const [visibleServices, setVisibleServices] = useState<boolean[]>([])

  useEffect(() => {
    setVisibleServices(new Array(services.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-service') || '0')
            setVisibleServices((prev) => {
              const updated = [...prev]
              updated[index] = true
              return updated
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    const serviceCards = document.querySelectorAll('[data-service]')
    serviceCards.forEach((card) => observer.observe(card))

    return () => {
      serviceCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Work With Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Three focused consulting offerings to drive your transformation initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-service={index}
              style={{
                opacity: visibleServices[index] ? 1 : 0,
                transform: visibleServices[index]
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              <Card className="p-8 border border-border bg-background flex flex-col h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6">{service.title}</h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="w-full justify-between text-accent hover:bg-accent/10">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-foreground text-foreground-foreground rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Discuss Your Transformation</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-balance">
            Whether you're starting a digital initiative or accelerating an ongoing transformation, I bring strategic thinking and delivery excellence to drive measurable business impact.
          </p>
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-gray-100 border-0"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
