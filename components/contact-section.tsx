'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Whether you're exploring a new transformation initiative or want to discuss how I can support your organization's digital evolution, I'm here to help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your transformation challenge..."
                  className="bg-background border-border min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 group"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Connect Directly</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-accent hover:underline">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                  <a href="#" className="text-accent hover:underline">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Schedule a Call</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Let's discuss your transformation goals
                  </p>
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary bg-transparent"
                  >
                    Book a 30-Min Call
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-background border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to inquiries within 24 hours. For urgent matters, you can reach me directly via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
