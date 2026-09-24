"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const images = ["/images/hero-madeira.jpg", "/images/retreat/villa/villa-exterior-pool.jpg", "/images/retreat/atmosphere/retreat-session.png", "/images/retreat/atmosphere/professional-shoot.jpg", "/images/retreat/atmosphere/connection.png", "/images/retreat/atmosphere/private-chef.jpg"]

export function Features() {
  const { t } = useLanguage()
  const items = t.features as unknown as string[][]
  return <section id="what-awaits" className="mx-auto max-w-7xl scroll-mt-24 px-6"><h2 className="mb-12 text-center font-serif text-4xl font-medium tracking-tight md:text-5xl">{t.featuresTitle}</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map(([title, description], index) => <article key={title} className={`group relative min-h-80 overflow-hidden bg-foreground text-white ${index === 3 ? "aspect-[9/16] min-h-0 lg:row-span-2" : index === 5 ? "min-h-[32rem] lg:row-span-2" : ""}`}><Image src={images[index]} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover transition duration-700 group-hover:scale-105 ${index === 5 ? "object-top" : "object-center"}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="text-sm font-semibold tracking-[.17em]">{title}</h3><p className="mt-3 max-w-md text-base font-light leading-relaxed text-white/90">{description}</p></div></article>)}</div></section>
}
