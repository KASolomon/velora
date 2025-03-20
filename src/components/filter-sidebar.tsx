import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FilterSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Filters</h3>
        <div className="h-px bg-border" />
      </div>

      <Accordion type="single" collapsible defaultValue="price" className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">$0</span>
                <span className="text-sm">$1000</span>
              </div>
              <Slider defaultValue={[0, 500]} max={1000} step={10} />
              <div className="flex justify-between">
                <span className="text-sm font-medium">$0 - $500</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-base font-medium">Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="flex items-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-muted-foreground" />
                    ))}
                    <span className="ml-1 text-sm">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-base font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Premium Select", "Luxe Living", "Elite Essentials", "Golden Standard", "Royal Collection"].map(
                (brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand.toLowerCase().replace(/\s+/g, "-")}`} />
                    <Label htmlFor={`brand-${brand.toLowerCase().replace(/\s+/g, "-")}`}>{brand}</Label>
                  </div>
                ),
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="text-base font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock">In Stock</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="out-of-stock" />
                <Label htmlFor="out-of-stock">Out of Stock</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="space-y-4">
        <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">Apply Filters</Button>
        <Button variant="outline" className="w-full">
          Reset
        </Button>
      </div>
    </div>
  )
}

