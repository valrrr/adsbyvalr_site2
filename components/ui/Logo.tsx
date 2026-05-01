// Orbital mark paths — computed from design file: rx=42, ry=16, droop=4.5, rotated ±45°
const D1 = 'M 61.31 38.69 C 77.71 55.09, 85.95 73.45, 79.70 79.70 C 71.69 87.71, 51.90 80.90, 35.50 64.50 C 19.10 48.10, 12.29 28.31, 20.30 20.30 C 26.55 14.05, 44.91 22.29, 61.31 38.69 Z'
const D2 = 'M 38.69 38.69 C 55.09 22.29, 73.45 14.05, 79.70 20.30 C 87.71 28.31, 80.90 48.10, 64.50 64.50 C 48.10 80.90, 28.31 87.71, 20.30 79.70 C 14.05 73.45, 22.29 55.09, 38.69 38.69 Z'

export function OrbitMark({
  size = 30,
  strokeWidth = 6.5,
  className,
}: {
  size?: number
  strokeWidth?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d={D1} stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d={D2} stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  )
}

interface LogoProps {
  iconSize?: number
  strokeWidth?: number
  className?: string
}

export default function Logo({ iconSize = 30, strokeWidth = 6.5, className }: LogoProps) {
  const textPx = Math.round(iconSize * 0.933) // matches design ratio 28/30
  const gap = Math.round(iconSize * 0.533)     // matches design ratio 16/30

  return (
    <span
      className={`inline-flex items-center select-none ${className ?? ''}`}
      style={{ gap }}
    >
      <OrbitMark size={iconSize} strokeWidth={strokeWidth} />
      <span
        className="font-display font-black"
        style={{
          fontSize: textPx,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontVariationSettings: "'SOFT' 0, 'WONK' 0",
        }}
      >
        adsbyvalr
      </span>
    </span>
  )
}
