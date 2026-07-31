import { SectionHead } from "@/components/SectionHead"

export function AboutCompany() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="About" title="Peacock Premier Painting" />
      <div className="space-y-3 text-[0.93rem] text-muted-foreground [&_strong]:text-foreground">
        <p>
          Peacock Premier Painting was founded on a simple belief: home improvement should be about more than just getting the job done. It should be about creating spaces that make you feel proud, comfortable, and truly at home.
        </p>
        <p>
          Based in Bradenton, Florida, we’ve spent years perfecting our craft and building relationships with homeowners throughout the Gulf Coast. We understand the unique challenges of Florida’s climate and the importance of using premium materials that can withstand the elements.
        </p>
        <p>
          But more than that, we understand what it means to trust someone in your home. That’s why we’ve built a team of skilled, vetted professionals who respect your space, communicate clearly, and deliver results that exceed expectations.
        </p>
      </div>

      {/* Metrics strip */}
      <div className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4 text-center">
        <div>
          <div className="text-[1.1rem] font-bold text-primary">500+</div>
          <div className="mt-0.5 text-[0.75rem] font-semibold tracking-[0.04em] text-muted-foreground uppercase">
            Homes Transformed
          </div>
        </div>
        <div>
          <div className="text-[1.1rem] font-bold text-primary">5-Year</div>
          <div className="mt-0.5 text-[0.75rem] font-semibold tracking-[0.04em] text-muted-foreground uppercase">
            Warranty
          </div>
        </div>
        <div>
          <div className="text-[1.1rem] font-bold text-primary">98%</div>
          <div className="mt-0.5 text-[0.75rem] font-semibold tracking-[0.04em] text-muted-foreground uppercase">
            Customer Satisfaction
          </div>
        </div>
      </div>
    </section>
  )
}
