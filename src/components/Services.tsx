import { SectionHead } from "@/components/SectionHead"

const services = [
  { label: "Interior Painting", img: "/assets/services/service-interior.jpg", alt: "Interior painting" },
  { label: "Exterior Painting", img: "/assets/services/service-exterior.jpg", alt: "Exterior painting" },
  { label: "Cabinet Refinishing", img: "/assets/services/service-cabinets.jpg", alt: "Cabinet refinishing" },
  { label: "Protective Coatings", img: "/assets/services/service-coatings.jpg", alt: "Protective coatings" },
] as const

export function Services() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="What We Do" title="Services" />
      <div className="grid grid-cols-2 gap-3">
        {services.map(({ label, img, alt }) => (
          <a
            key={label}
            href="https://peacockpremierpainting.com/services"
            target="_blank"
            rel="noopener"
            className="tile group relative block overflow-hidden rounded-lg border border-border transition-[transform,box-shadow] duration-200 ease-card active:scale-[.97] aspect-[4/3]"
          >
            <img
              src={img}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover transition-transform duration-200 ease-card group-hover:scale-[1.06]"
            />
            <b className="tile-label absolute right-3 bottom-2.5 left-3 z-2 text-[0.78rem] font-bold tracking-[0.08em] text-primary-foreground uppercase [text-shadow:var(--shadow-xs-dark)]">
              {label}
            </b>
          </a>
        ))}
      </div>
    </section>
  )
}
