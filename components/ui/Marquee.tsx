interface MarqueeProps {
  items: string[]
  className?: string
  separator?: string
}

export default function Marquee({
  items,
  className = '',
  separator = '·',
}: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`overflow-hidden w-full select-none marquee-wrap ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-mono text-sm tracking-widest uppercase text-text-muted"
          >
            {item}
            {i !== doubled.length - 1 && (
              <span className="text-glow-purple">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
