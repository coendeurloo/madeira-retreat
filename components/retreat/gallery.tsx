"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const visuals = [
  {
    src: "/images/retreat/atmosphere/madeira-exploration.png",
    position: "center 60%",
    filter: "brightness(1.15) saturate(1.04) contrast(1) sepia(0.14)",
    skyOverlay: false,
  },
  { src: "/images/retreat/atmosphere/exploring-madeira.jpg", position: "center 42%", skyOverlay: false },
  { src: "/images/retreat/atmosphere/conversation-circle.jpg", position: "center 46%", skyOverlay: false },
  { src: "/images/retreat/atmosphere/laughing-together.jpg", position: "center 45%", skyOverlay: true },
  { src: "/images/retreat/atmosphere/see-yourself-differently.jpg", position: "center 22%", skyOverlay: false },
]

const photoFilter = "saturate(0.92) contrast(0.98) brightness(1.02) sepia(0.025)"

export function Gallery() {
  const { t } = useLanguage()
  const [title, captions] = t.gallery as unknown as [string, string[], string]

  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-12 text-center font-serif text-4xl font-medium md:text-5xl">{title}</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
        {captions.map((caption, index) => {
          const layout = index === 0
            ? "col-span-2 aspect-[16/10] md:col-span-6"
            : index === 1
              ? "col-span-1 aspect-square md:col-span-6 md:aspect-[16/10]"
              : "col-span-1 aspect-square md:col-span-4"

          return (
            <figure key={caption} className={`group relative overflow-hidden bg-muted ${layout}`}>
              <Image
                src={visuals[index].src}
                alt={caption}
                fill
                sizes="(max-width: 768px) 50vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: visuals[index].position, filter: visuals[index].filter ?? photoFilter }}
              />
              {visuals[index].skyOverlay && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#2b86cf]/75 via-[#62b7ea]/50 to-transparent mix-blend-color" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg text-white sm:p-5 sm:text-xl md:p-7 md:text-2xl">
                {caption}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
