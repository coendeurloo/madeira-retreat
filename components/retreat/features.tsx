"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const images = [
  { src: "/images/hero-madeira.jpg", position: "center" },
  { src: "/images/retreat/villa/villa-exterior-pool.jpg", position: "center" },
  { src: "/images/retreat/atmosphere/retreat-session.png", position: "center" },
  { src: "/images/retreat/atmosphere/professional-shoot.jpg", position: "center 52%" },
  { src: "/images/retreat/atmosphere/connection.png", position: "center" },
  { src: "/images/retreat/atmosphere/private-chef.jpg", position: "center 57%" },
]

const photoFilter = "saturate(0.94) contrast(0.98) brightness(1.02) sepia(0.03)"

export function Features() {
  const { t } = useLanguage()
  const items = t.features as unknown as string[][]
  return (
    <section id="what-awaits" className="mx-auto max-w-7xl scroll-mt-24 px-6">
      <h2 className="mb-12 text-center font-serif text-4xl font-medium tracking-tight md:text-5xl">
        {t.featuresTitle}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, description], index) => (
          <article key={title} className="group relative aspect-[5/4] overflow-hidden bg-foreground text-white">
            <Image
              src={images[index].src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: images[index].position, filter: photoFilter }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="text-sm font-semibold tracking-[.17em]">{title}</h3>
              <p className="mt-3 max-w-md text-base font-light leading-relaxed text-white/90">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
