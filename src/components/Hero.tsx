/* No brand photography exists yet, so the hero band is plain
   ink — deliberately empty, not an unstyled placeholder. A subtle gold
   hairline element provides visual interest.

   The pb-16 offsets AvatarRing's -mt-16, which overlaps the bottom of this
   band: without it the tagline centres behind the ring and crowds it. Keep
   the two values in sync if either changes. */
export function Hero() {
  return (
    <div className="relative flex aspect-[2.2/1] w-full items-center justify-center pb-16 bg-gradient-to-b from-primary-deep to-background">
      <div className="relative z-2 px-gutter text-center">
        {/* "Licensed & Insured" (a verbatim site claim), not "Painting & Coatings" —
            the Identity badge directly below already says that. */}
        <div className="mx-auto mb-3 h-px w-16 bg-gold opacity-50" />
        <div className="text-[0.62rem] font-medium tracking-[0.34em] text-primary uppercase">
          Licensed &amp; Insured
        </div>
        {/* font-normal, not font-light: Inter 300 isn't loaded, and thin strokes
            get eaten by dark backgrounds anyway (see handoff §3). */}
        <div className="mt-2 text-[1.05rem] leading-tight font-normal tracking-[0.02em] text-foreground">
          Beautifying Sarasota and Bradenton one home at a time
        </div>
      </div>
    </div>
  )
}
