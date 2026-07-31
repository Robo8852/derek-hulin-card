import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/SectionHead"

export function Resources({ onShare }: { onShare: () => void }) {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Service Areas" title="Where We Work" />
      <div className="space-y-3 text-[0.93rem] text-muted-foreground">
        <p>
          Bradenton, Sarasota, Lakewood Ranch, Palmetto, Parrish, Ellenton, Anna Maria Island, Longboat Key
        </p>
        <p>
          <strong className="text-foreground">Mon–Fri</strong> 8am–6pm · <strong className="text-foreground">Sat</strong> by appointment
        </p>
      </div>
      <div className="flex flex-col gap-2.5 pt-[18px] pb-2">
        <Button type="button" variant="brand" size="brand" onClick={onShare}>
          Share My Info
        </Button>
      </div>
    </section>
  )
}
