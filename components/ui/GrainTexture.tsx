const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

export default function GrainTexture() {
  return (
    <>
      {/* Fine grain noise — mix-blend overlay gives it the lit-film-stock quality */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[4] opacity-[0.12]"
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
        }}
      />
      {/* Subtle vignette — darkens edges so the page feels lit from within */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] vignette-bg"
      />
    </>
  )
}
