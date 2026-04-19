'use client'

import Link from 'next/link'
import { useRef, useState, useCallback } from 'react'

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
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
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
  const ref    = useRef<HTMLElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || variant !== 'primary') return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width  / 2) * 0.25
    const y = (e.clientY - rect.top  - rect.height / 2) * 0.25
    setPos({ x, y })
  }, [variant])

  const handleMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])

  const classes = [
    'inline-flex items-center justify-center gap-2 cursor-pointer select-none',
    sizeMap[size],
    variantMap[variant],
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ].join(' ')

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.2s cubic-bezier(0.23,1,0.32,1)',
  }

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
