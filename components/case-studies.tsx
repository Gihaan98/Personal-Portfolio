'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const caseStudies = [
  {
    title: 'Large-Scale ERP Implementation',
    problem: 'Fortune 500 financial services company needed to consolidate disparate systems across 15 business units',
    complexity: 'Multi-module SAP deployment across 50+ locations, 5 countries, 2000+ users',
    approach: 'Phased approach with parallel run, comprehensive change management, and local team enablement',
    role: 'Senior BA & Implementation Lead',
    systems: 'SAP ECC, Finance Module, Logistics, Supply Chain',
    outcome: '30% reduction in order-to-cash cycle, $12M cost savings, 99.5% go-live success',
  },
  {
    title: 'Mobile Application & Admin System Rollout',
    problem: 'Insurance company required modern mobile platform for claims management and field agent coordination',
    complexity: 'Native iOS/Android apps, real-time API integrations, offline-first architecture',
    approach: 'Agile delivery with sprint-based validation, iterative UX refinement, gradual rollout to 1000+ users',
    role: 'Product Owner & BA',
    systems: 'Node.js APIs, React Native, PostgreSQL, AWS Infrastructure',
    outcome: '85% faster claims processing, 90% adoption rate in 6 months',
  },
  {
    title: 'Finance Automation & Reconciliation',
    problem: 'Global manufacturing company had manual reconciliation processes consuming 400 hours/month',
    complexity: 'Complex multi-currency transactions, legacy journal entries, audit trail requirements',
    approach: 'End-to-end automation using RPA and Oracle Finance integration',
    role: 'Finance Systems Architect',
    systems: 'Oracle, UiPath RPA, Python Scripts, Business Rules Engine',
    outcome: '95% process automation, 380 hours saved monthly, zero reconciliation errors',
  },
  {
    title: 'API System Integration Project',
    problem: 'Microservices architecture needed cohesive integration across 12 internal and 3rd-party systems',
    complexity: 'Event-driven architecture, real-time data sync, 99.99% uptime requirement',
    approach: 'Event streaming platform with API gateway, comprehensive testing, chaos engineering practices',
    role: 'Technical BA & Integration Lead',
    systems: 'Kafka, Kong API Gateway, Node.js, PostgreSQL, Docker/Kubernetes',
    outcome: 'Zero integration failures post-launch, 40% reduction in data latency',
  },
  {
    title: 'Digital Transformation Program',
    problem: 'Traditional telecom provider needed to modernize customer experience across all touchpoints',
    complexity: 'Organizational change across 5000+ employees, legacy modernization, customer journey redesign',
    approach: 'Portfolio-level governance, capability building, phased digital-first delivery roadmap',
    role: 'Program Lead & Enterprise BA',
    systems: 'Salesforce, Mulesoft, Cloud Infrastructure, Analytics Platform',
    outcome: '45% improvement in customer satisfaction, $50M digital revenue pipeline',
  },
  {
    title: 'Cost Visibility & Financial Analytics',
    problem: 'Manufacturing conglomerate lacked real-time visibility into product-level profitability',
    complexity: 'Complex cost allocation, multi-dimensional hierarchies, 1000+ cost centers',
    approach: 'Redesigned cost model, implemented analytics cube, built executive dashboards',
    role: 'Finance Analytics & Solutions Architect',
    systems: 'Hyperion Planning, Qlik Sense, Data Warehouse, Excel Integration',
    outcome: 'Identified $8M in savings opportunities, enabled 15% margin improvement',
  },
]

export function CaseStudies() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    setVisibleCards(new Array(caseStudies.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => {
              const updated = [...prev]
              updated[index] = true
              return updated
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-case-study]')
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Transformation Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Selected engagements demonstrating strategic delivery across industry verticals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              data-case-study
              data-index={index}
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index]
                  ? 'translateX(0) rotateY(0deg)'
                  : 'translateX(-30px) rotateY(-5deg)',
                transition: `opacity 0.7s ease-out ${index * 0.1}s, transform 0.7s ease-out ${index * 0.1}s`,
              }}
            >
              <Card className="p-8 border border-border bg-background hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Problem</h4>
                  <p className="text-muted-foreground text-sm mb-4">{study.problem}</p>

                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Complexity</h4>
                  <p className="text-muted-foreground text-sm mb-4">{study.complexity}</p>

                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Approach</h4>
                  <p className="text-muted-foreground text-sm">{study.approach}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Leadership Role</h4>
                  <p className="text-muted-foreground text-sm mb-4">{study.role}</p>

                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Systems & Tools</h4>
                  <p className="text-muted-foreground text-sm mb-4">{study.systems}</p>

                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Outcome</h4>
                  <p className="text-accent font-semibold text-sm">{study.outcome}</p>
                </div>
              </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
