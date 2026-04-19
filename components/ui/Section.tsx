interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  as?: 'section' | 'div' | 'article'
  ariaLabel?: string
}

export default function Section({
  children,
  id,
  className = '',
  as: Tag = 'section',
  ariaLabel,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full ${className}`}
    >
      {children}
    </Tag>
  )
}
