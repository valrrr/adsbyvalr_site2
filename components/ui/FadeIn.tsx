'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  delay   = 0,
  duration = 0.6,
  y       = 24,
  className = '',
  once    = true,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
