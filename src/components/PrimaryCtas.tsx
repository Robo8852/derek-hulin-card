import { Button } from "@/components/ui/button"

export function PrimaryCtas({
  onShare,
  onAddContact,
}: {
  onShare: () => void
  onAddContact: () => void
}) {
  return (
    <div className="flex flex-col gap-2.5 px-gutter pt-[18px] pb-2">
      <div className="grid grid-cols-2 gap-2.5">
        <Button asChild variant="brand" size="brand">
          <a href="https://peacockpremierpainting.com/contact" target="_blank" rel="noopener">
            {/* "Free Quote", not the site's "Get Free Quote" — three words wrap
                to two lines at the 360px floor and unbalance the button row. */}
            Free Quote
          </a>
        </Button>
        <Button type="button" variant="brandSecondary" size="brand" onClick={onShare}>
          Share
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {/* Save Contact is a static .vcf served next to this page (iOS Safari
            cannot download Blob-based vCards — NEVER convert this to a Blob).
            No preventDefault: the anchor's native href + download attribute does
            the real work; the toast is desktop feedback only. */}
        <Button asChild variant="brandSecondary" size="brand">
          <a href="/Derek-Hulin.vcf" download="Derek-Hulin.vcf" onClick={onAddContact}>
            Save Contact
          </a>
        </Button>
        <Button asChild variant="brandSecondary" size="brand">
          <a href="https://peacockpremierpainting.com/" target="_blank" rel="noopener">
            Website
          </a>
        </Button>
      </div>
    </div>
  )
}
