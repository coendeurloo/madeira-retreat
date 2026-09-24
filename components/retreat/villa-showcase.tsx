"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const photos = [
  "/images/retreat/villa/villa-exterior-pool.jpg",
  "/images/retreat/villa/living-room.webp",
  "/images/retreat/villa/dining-room.webp",
  "/images/retreat/villa/bedroom-ocean-view.webp",
  "/images/retreat/villa/terrace-ocean-view.jpg",
  "/images/retreat/villa/aerial-pool.jpg",
  "/images/retreat/villa/twin-bedroom.webp",
  "/images/retreat/villa/kitchen-living.webp",
  "/images/retreat/villa/garden-bedroom.jpg",
  "/images/retreat/villa/pool-garden.jpg",
  "/images/retreat/villa/coastline-view.jpg",
]
export function VillaShowcase() { const { t } = useLanguage(); const c = t.villa as unknown as string[]; const [index, setIndex] = useState<number | null>(null); const next = (delta: number) => setIndex(i => i === null ? 0 : (i + delta + photos.length) % photos.length); return <section className="mx-auto max-w-7xl px-6"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="font-serif text-4xl font-medium md:text-5xl">{c[0]}</h2><p className="mt-7 whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground">{c[1]}</p><button onClick={() => setIndex(0)} className="mt-8 rounded-full border border-foreground px-5 py-3 text-sm font-medium">{c[2]}</button></div><div className="grid grid-cols-2 gap-3">{photos.map((src, i) => <button key={src} onClick={() => setIndex(i)} className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}><Image src={src} alt={`${c[3]} ${i + 1}`} fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover transition hover:scale-105" /></button>)}</div></div>{index !== null ? <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"><button onClick={() => setIndex(null)} aria-label="Close" className="absolute right-5 top-5 text-white"><X /></button><button onClick={() => next(-1)} aria-label="Previous photo" className="absolute left-4 text-white"><ChevronLeft size={36} /></button><div className="relative h-[80vh] w-[90vw] max-w-6xl"><Image src={photos[index]} alt={`${c[3]} ${index + 1}`} fill sizes="90vw" className="object-contain" /></div><button onClick={() => next(1)} aria-label="Next photo" className="absolute right-4 text-white"><ChevronRight size={36} /></button></div> : null}</section> }
