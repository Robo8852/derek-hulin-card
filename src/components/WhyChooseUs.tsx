import { Check } from "lucide-react"

import { SectionHead } from "@/components/SectionHead"

/* Company value props — verbatim from the website's Why Choose section, except
   the first, which drops the site's "Licensed, insured" claim at the owner's request. */
const reasons = [
  "Locally trusted",
  "Premium materials built for Florida's climate",
  "Vetted, trained professionals",
  "Clear communication every step of the way",
  "Meticulous prep work and cleanup",
  "5-year warranty on all services",
  "Free, no-pressure estimates",
  "Flexible scheduling that works for you",
] as const

export function WhyChooseUs() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Why Choose Us" title="The Peacock Advantage" />
      <ul className="space-y-2.5">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-start gap-3 text-[0.93rem] text-muted-foreground">
            <Check className="mt-0.5 size-[18px] shrink-0 text-gold" strokeWidth={2.5} />
            {reason}
          </li>
        ))}
      </ul>
    </section>
  )
}
