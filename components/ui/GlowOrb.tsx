'use client'

import { useEffect, useRef } from 'react'

export default function GlowOrb() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch  = window.matchMedia('(hover: none)').matches
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || noMotion) return

    let raf: number
    let targetX = window.innerWidth  / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08)
      currentY = lerp(currentY, targetY, 0.08)
      if (orbRef.current) {
        orbRef.current.style.left = `${currentX}px`
        orbRef.current.style.top  = `${currentY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={orbRef}
      className="glow-cursor pointer-events-none fixed z-[9] hidden md:block"
      style={{
        left: '50%',
        top:  '50%',
        width:  '480px',
        height: '480px',
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(217,70,239,0.07) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      aria-hidden="true"
    />
  )
}
