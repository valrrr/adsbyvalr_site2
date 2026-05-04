'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeMap: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-6 py-3 text-sm min-h-[44px]',
  lg: 'px-8 py-4 text-base min-h-[44px]',
}

const variantMap: Record<Variant, string> = {
  primary:   'bg-glow-red text-white font-medium rounded-full btn-primary',
  secondary: 'border border-glow-purple text-glow-purple font-medium rounded-full hover:bg-glow-purple/10 transition-colors',
  ghost:     'text-text-primary font-medium btn-ghost underline-offset-4',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - rect.left - rect.width  / 2) * 0.25,
      y: (e.clientY - rect.top  - rect.height / 2) * 0.25,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const classes = [
    'inline-flex items-center justify-center gap-2 cursor-pointer select-none',
    sizeMap[size],
    variantMap[variant],
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ].filter(Boolean).join(' ')

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.2s cubic-bezier(0.23,1,0.32,1)',
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      {href ? (
        <Link
          href={href}
          className={classes}
          style={style}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={classes}
          style={style}
        >
          {children}
        </button>
      )}
    </div>
  )
}
