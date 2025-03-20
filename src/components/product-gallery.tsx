"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border bg-background">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={alt}
          width={600}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-md border bg-background cursor-pointer ${
              mainImage === image ? "ring-2 ring-gold" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} view ${i + 1}`}
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

