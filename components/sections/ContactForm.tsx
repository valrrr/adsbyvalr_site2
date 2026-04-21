'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

interface FormState {
  name:    string
  email:   string
  brand:   string
  budget:  string
  message: string
}

const budgetOptions = [
  'under $3k/mo',
  '$3k–$7k/mo',
  '$7k–$15k/mo',
  '$15k+/mo',
  'not sure yet',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name:    '',
    email:   '',
    brand:   '',
    budget:  '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
  }

  const inputClass =
    'w-full bg-bg-primary border border-border-subtle rounded-xl px-4 py-3.5 font-body text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-glow-purple/60 focus:ring-1 focus:ring-glow-purple/20 transition-colors'

  const labelClass = 'block font-mono text-xs tracking-widest text-text-muted uppercase mb-2'

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl border border-glow-purple/30 bg-bg-secondary p-10 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(107,33,168,0.15) 0%, rgba(10,10,15,1) 80%)',
        }}
      >
        <p className="font-mono text-glow-purple text-xs tracking-widest uppercase mb-4">MESSAGE RECEIVED</p>
        <h2 className="font-display text-3xl font-normal text-text-primary mb-3">
          we&apos;ll be in touch.
        </h2>
        <p className="font-body text-sm text-text-muted">
          expect a reply within 24 hours. in the meantime, take a look at{' '}
          <a href="/work" className="text-glow-purple hover:underline">our work</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 space-y-6"
      aria-label="Contact form"
    >
      <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-2">
        SEND A MESSAGE
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>NAME</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="alex kim"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="alex@brand.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="brand" className={labelClass}>COMPANY</label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={form.brand}
            onChange={handleChange}
            required
            placeholder="your brand"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>MONTHLY BUDGET</label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            required
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="" disabled>select range</option>
            {budgetOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>WHAT ARE YOU WORKING ON?</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="tell us about your brand, where you're stuck, and what you're trying to achieve."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full justify-center"
      >
        {status === 'submitting' ? 'sending…' : 'send it →'}
      </Button>

      <p className="font-mono text-xs text-text-muted text-center">
        we reply within 24 hours. no spam, ever.
      </p>
    </form>
  )
}
