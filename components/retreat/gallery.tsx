"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const visuals = ["/images/retreat/atmosphere/madeira-exploration.png", "/images/retreat/atmosphere/exploring-madeira.jpg", "/images/retreat/atmosphere/conversation-circle.jpg", "/images/retreat/atmosphere/laughing-together.jpg", "/images/retreat/atmosphere/see-yourself-differently.jpg"]
export function Gallery() {
  const { t } = useLanguage(); const [title, captions] = t.gallery as unknown as [string, string[], string]
  return <section className="mx-auto max-w-7xl px-6"><h2 className="mb-12 text-center font-serif text-4xl font-medium md:text-5xl">{title}</h2><div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">{captions.map((caption, i) => <figure key={caption} className={`relative overflow-hidden bg-muted ${i === 4 ? "aspect-[3/4] md:col-span-4 md:col-start-5" : "min-h-64 md:min-h-80"} ${["md:col-span-5", "md:col-span-7 md:mt-16", "md:col-span-7", "md:col-span-5 md:-mt-8", ""][i]}`}><Image src={visuals[i]} alt={caption} fill sizes="(max-width: 768px) 50vw, 60vw" className={`object-cover ${i === 1 ? "object-[center_62%]" : i === 2 ? "object-[center_76%]" : i === 3 ? "object-[center_43%]" : ""}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><figcaption className="absolute bottom-0 p-5 font-serif text-xl text-white md:p-7 md:text-2xl">{caption}</figcaption></figure>)}</div></section>
}
