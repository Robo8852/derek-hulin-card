import { SectionHead } from "@/components/SectionHead"

export function AboutDerek() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Meet" title="Derek Hulin" />
      <div className="space-y-3 text-[0.93rem] text-muted-foreground">
        <p>
          I’m a true Floridian, born and raised in the Bradenton area and fortunate enough to grow up on beautiful Anna Maria Island. This community has always been home, and it’s an honor to serve the people and neighborhoods that helped shape who I am.
        </p>
        <p>
          I earned my bachelor’s degree in Organizational Communications, with a minor in Meteorology, from the University of Central Florida. For more than 20 years, I’ve built my career in sales with locally owned businesses, including Florida Patio Furniture and Peacock Premier Painting. I love meeting new people, helping my neighbors bring their ideas to life, and treating every project as if it were for my own home.
        </p>
        <p>
          When I’m not working, you’ll probably find me on the water fishing or surfing, playing an acoustic gig, or enjoying everything our Florida lifestyle has to offer. And yes—thanks to that meteorology minor, I still get asked about the weather… but I promise my painting advice is much more reliable than my weekend forecast! I’m proud to call this community home and even prouder to help the people who make it such a great place to live.
        </p>
      </div>
    </section>
  )
}
