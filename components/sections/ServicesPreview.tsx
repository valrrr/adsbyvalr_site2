'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

const services = [
  {
    id: '01',
    title:       'Paid Social',
    description: 'Meta, TikTok, Pinterest. We run campaigns that actually scale — not just spend budgets. Data-led targeting, creative testing, and constant iteration.',
    tags:        ['Meta Ads', 'TikTok Ads', 'Pinterest'],
    icon:        '⚡',
  },
  {
    id: '02',
    title:       'Creative Strategy',
    description: 'The hook is everything. We develop ad concepts, write scripts, and direct creative that stops thumbs and drives action. Built for your brand voice.',
    tags:        ['Concepts', 'Scripts', 'UGC Direction'],
    icon:        '◈',
  },
  {
    id: '03',
    title:       'Growth Systems',
    description: 'Testing frameworks, attribution setups, and reporting dashboards that make decisions obvious. No more guessing what\'s working.',
    tags:        ['A/B Testing', 'Attribution', 'Reporting'],
    icon:        '◎',
  },
]

export default function ServicesPreview() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      className="relative py-24 md:py-32 bg-bg-secondary"
      aria-label="Services overview"
    >
      {/* Section top gradient */}
      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16">
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
            02 / Services
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-text-primary leading-tight">
            What we do best.
          </h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, title, description, tags, icon }, i) => (
            <FadeIn key={id} delay={i * 0.1}>
              <div
                className="service-card group relative h-full bg-bg-primary border border-border-subtle rounded-2xl p-8 cursor-default"
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background glow bloom */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-6 text-3xl text-glow-purple">{icon}</div>

                {/* Number */}
                <p className="font-mono text-xs tracking-widest text-text-muted mb-3">
                  {id}
                </p>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full border border-border-subtle text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="md">
            See all services →
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
