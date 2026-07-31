import { SectionHead } from "@/components/SectionHead"

/* CSS-only scroll-snap carousel — deliberately no JS and no embla/shadcn Carousel. */

const quotes = [
  {
    text: "They completely transformed our living room and kitchen. The attention to detail was incredible, and they treated our home like it was their own. We couldn’t be happier!",
    cite: "Madeline Coseli, Bradenton, FL",
  },
  {
    text: "Professional, punctual, and the quality is outstanding. Our home looks brand new! The crew was respectful and cleaned up every day. Highly recommend.",
    cite: "Gary Waverly, Sarasota, FL",
  },
  {
    text: "I was going to replace my kitchen cabinets, but Peacock refinished them and saved me thousands. They look factory-new! Best decision we made.",
    cite: "Megan Ross, Palmetto, FL",
  },
] as const

export function Testimonials() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Happy Customers" title="Testimonials" />
      <div className="quotes-fade relative">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-[6%] pt-1 pb-3.5 [scroll-padding-inline:6%]">
          {quotes.map(({ text, cite }) => (
            <div
              key={cite}
              className="quote relative shrink-0 grow-0 basis-[88%] snap-center rounded-card border border-border bg-card-elevated px-5 pt-[22px] pb-[18px]"
            >
              <p className="pt-3.5 font-serif text-[0.95rem] text-foreground italic">{text}</p>
              <cite className="mt-3 block text-[0.75rem] font-bold tracking-[0.08em] text-primary uppercase not-italic">
                {cite}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
