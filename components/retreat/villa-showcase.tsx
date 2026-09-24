"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { createPortal } from "react-dom"

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

export function VillaShowcase() {
  const { t } = useLanguage()
  const copy = t.villa as unknown as string[]
  const [index, setIndex] = useState<number | null>(null)
  const next = (delta: number) =>
    setIndex((current) => current === null ? 0 : (current + delta + photos.length) % photos.length)

  useEffect(() => {
    if (index === null) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [index])

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h2 className="font-serif text-4xl font-medium md:text-5xl">{copy[0]}</h2>
          <p className="mt-7 whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground">{copy[1]}</p>
          <button onClick={() => setIndex(0)} className="mt-8 rounded-full border border-foreground px-5 py-3 text-sm font-medium">
            {copy[2]}
          </button>
        </div>

        <div className="grid auto-rows-[82px] grid-cols-3 gap-3 sm:auto-rows-[98px] md:auto-rows-[112px] md:grid-cols-12 xl:auto-rows-[130px]">
          {photos.map((src, photoIndex) => {
            const cardLayout = photoIndex === 0
              ? "col-span-2 row-span-2 md:col-span-6"
              : photoIndex < 5
                ? "md:col-span-3"
                : photoIndex === photos.length - 1
                  ? "col-span-2 md:col-span-4"
                  : "md:col-span-4"

            return (
              <button
                key={src}
                onClick={() => setIndex(photoIndex)}
                aria-label={`${copy[3]} ${photoIndex + 1}`}
                className={`group relative overflow-hidden ${cardLayout}`}
              >
                <Image
                  src={src}
                  alt={`${copy[3]} ${photoIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            )
          })}
        </div>
      </div>

      {index !== null && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${copy[3]} ${index + 1}`}
              onClick={(event) => {
                if (event.target === event.currentTarget) setIndex(null)
              }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            >
              <button
                onClick={() => setIndex(null)}
                aria-label="Close gallery"
                className="absolute right-5 top-5 rounded-full border border-white/50 bg-black/50 p-3 text-white transition hover:bg-white/20"
              >
                <X size={24} />
              </button>
              <button onClick={() => next(-1)} aria-label="Previous photo" className="absolute left-4 text-white">
                <ChevronLeft size={36} />
              </button>
              <div className="relative h-[80vh] w-[90vw] max-w-6xl">
                <Image src={photos[index]} alt={`${copy[3]} ${index + 1}`} fill sizes="90vw" className="object-contain" />
              </div>
              <button onClick={() => next(1)} aria-label="Next photo" className="absolute right-4 text-white">
                <ChevronRight size={36} />
              </button>
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
