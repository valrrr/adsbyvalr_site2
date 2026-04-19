'use client'

import { useState } from 'react'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

const projects = [
  {
    id: 'kinetic-label',
    title:    'Kinetic Label',
    category: 'Fashion — Paid Social',
    result:   '4.2× ROAS in 60 days',
    gradient: 'from-glow-purple-deep via-glow-purple to-glow-magenta',
    accent:   '#A855F7',
  },
  {
    id: 'foret-studio',
    title:    'Forêt Studio',
    category: 'Jewelry — Creative Strategy',
    result:   '↑ 218% conversion rate',
    gradient: 'from-glow-magenta via-glow-red to-orange-700',
    accent:   '#FF2E4C',
  },
  {
    id: 'haven-co',
    title:    'Haven Co.',
    category: 'Hospitality — Growth Systems',
    result:   '3× booking volume in Q1',
    gradient: 'from-indigo-900 via-glow-purple-deep to-glow-purple',
    accent:   '#D946EF',
  },
]

function WorkCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={index * 0.12}>
      <article
        className="work-card group relative overflow-hidden rounded-2xl cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image placeholder */}
        <div
          className={`work-card-image relative aspect-[4/3] bg-gradient-to-br ${project.gradient}`}
        >
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-bg-primary/30 mix-blend-multiply" />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
            aria-hidden="true"
          />

          {/* Result badge */}
          <div
            className={`absolute top-4 right-4 font-mono text-xs px-3 py-1.5 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-muted transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {project.result}
          </div>

          {/* Red underline sweep on hover */}
          <div
            className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out"
            style={{
              width: hovered ? '100%' : '0%',
              background: `linear-gradient(90deg, ${project.accent}, transparent)`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Card body */}
        <div className="p-6 bg-bg-secondary border border-t-0 border-border-subtle rounded-b-2xl">
          <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-2">
            {project.category}
          </p>
          <h3
            className="font-display text-2xl md:text-3xl font-bold text-text-primary transition-colors duration-200"
            style={{ color: hovered ? project.accent : undefined }}
          >
            {project.title}
          </h3>
        </div>
      </article>
    </FadeIn>
  )
}

export default function WorkPreview() {
  return (
    <section
      className="relative py-24 md:py-32 bg-bg-primary"
      aria-label="Selected work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              03 / Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-text-primary leading-tight">
              Results, not decks.
            </h2>
          </div>
          <Button href="/work" variant="ghost" size="md" className="group shrink-0">
            View all work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
