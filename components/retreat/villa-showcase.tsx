"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type VillaPhoto = {
  src: string
  alt: {
    ru: string
    en: string
  }
}

const villaPhotos: VillaPhoto[] = [
  {
    src: "/images/villa/main picture of villa.jpeg",
    alt: {
      ru: "Главный вид на виллу с бассейном",
      en: "Main view of the villa with the pool",
    },
  },
  {
    src: "/images/villa/villa-top.jpg",
    alt: {
      ru: "Вид сверху на виллу, сад, бассейн и океан",
      en: "Aerial view of the villa, garden, pool, and ocean",
    },
  },
  {
    src: "/images/villa/pool-atlantic.jpg",
    alt: {
      ru: "Бассейн с видом на Атлантику",
      en: "Pool with an Atlantic Ocean view",
    },
  },
  {
    src: "/images/villa/swimming pool.jpeg",
    alt: {
      ru: "Зона бассейна у виллы",
      en: "Pool area by the villa",
    },
  },
  {
    src: "/images/villa/terrace.webp",
    alt: {
      ru: "Терраса для ужинов и отдыха",
      en: "Terrace for dinners and relaxation",
    },
  },
  {
    src: "/images/villa/garden.jpg",
    alt: {
      ru: "Сад и зелёная территория виллы",
      en: "Garden and green villa grounds",
    },
  },
  {
    src: "/images/villa/mountain view.jpeg",
    alt: {
      ru: "Вид на склон и территорию виллы",
      en: "View of the hillside and villa grounds",
    },
  },
  {
    src: "/images/villa/hall.webp",
    alt: {
      ru: "Общая зона / холл",
      en: "Common area / hall",
    },
  },
  {
    src: "/images/villa/kitchen.webp",
    alt: {
      ru: "Кухня",
      en: "Kitchen",
    },
  },
  {
    src: "/images/villa/living room.webp",
    alt: {
      ru: "Гостиная",
      en: "Living room",
    },
  },
  {
    src: "/images/villa/bedroom-spacious.webp",
    alt: {
      ru: "Просторная спальня",
      en: "Spacious bedroom",
    },
  },
  {
    src: "/images/villa/bedroom twin.webp",
    alt: {
      ru: "Twin-комната с двумя кроватями",
      en: "Twin room with two beds",
    },
  },
  {
    src: "/images/villa/bedroom.webp",
    alt: {
      ru: "Спальня",
      en: "Bedroom",
    },
  },
  {
    src: "/images/villa/bathroom.webp",
    alt: {
      ru: "Ванная комната",
      en: "Bathroom",
    },
  },
]

const heroPhotoSrc = "/images/villa/main picture of villa.jpeg"
const revealDelays = ["", "reveal-delay-100", "reveal-delay-200", "reveal-delay-300"]

export function VillaShowcase() {
  const { language, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const heroIndex = useMemo(
    () => villaPhotos.findIndex((photo) => photo.src === heroPhotoSrc),
    [],
  )
  const resolvedHeroIndex = heroIndex >= 0 ? heroIndex : 0
  const heroPhoto = villaPhotos[resolvedHeroIndex]
  const previewPhotos = useMemo(
    () => villaPhotos.filter((photo) => photo.src !== heroPhotoSrc).slice(0, 3),
    [],
  )

  const openLightboxAt = (index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? villaPhotos.length - 1 : prev - 1))
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev === villaPhotos.length - 1 ? 0 : prev + 1))
  }

  const activePhoto = villaPhotos[activeIndex]

  return (
    <section className="container mx-auto px-6 max-w-7xl space-y-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 space-y-6 reveal-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.villa.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground text-balance">
            {t.villa.title}
          </h2>
          <div className="space-y-4 text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            {t.villa.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="text-foreground font-medium">{t.villa.capacityLine}</p>
          </div>
          <ul className="space-y-3 pt-1">
            {t.villa.highlights.map((item, i) => (
              <li
                key={i}
                className="text-sm md:text-base text-muted-foreground leading-relaxed reveal-on-scroll"
              >
                <span className="text-primary pr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-serif text-lg md:text-xl text-foreground pt-2">
            {t.villa.closing}
          </p>
        </div>

        <div className="lg:col-span-8 reveal-on-scroll">
          <button
            type="button"
            onClick={() => openLightboxAt(resolvedHeroIndex)}
            className="group relative block w-full overflow-hidden rounded-sm border border-border shadow-sm text-left aspect-[16/10] md:aspect-[16/9]"
          >
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt[language]}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            <div className="absolute left-4 bottom-4 text-white text-xs md:text-sm tracking-wide font-medium">
              {t.villa.photoCounterLabel}: {villaPhotos.length}
            </div>
            <div className="absolute right-4 bottom-4 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-foreground text-sm font-medium">
              {t.villa.viewAll}
            </div>
          </button>

          <div className="hidden sm:grid grid-cols-4 gap-3 mt-3">
            {previewPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openLightboxAt(villaPhotos.findIndex((p) => p.src === photo.src))}
                className={`group relative overflow-hidden rounded-sm border border-border shadow-sm text-left aspect-[4/3] reveal-on-scroll ${
                  revealDelays[i % revealDelays.length]
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt[language]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
              </button>
            ))}
            <button
              type="button"
              onClick={() => openLightboxAt(resolvedHeroIndex)}
              className="relative overflow-hidden rounded-sm border border-border shadow-sm text-left aspect-[4/3] bg-muted/60 hover:bg-muted transition-colors reveal-on-scroll reveal-delay-300"
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground">
                <span className="text-lg md:text-xl font-serif font-medium">
                  +{villaPhotos.length - 1}
                </span>
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={() => openLightboxAt(resolvedHeroIndex)}
            className="sm:hidden mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity text-sm font-medium reveal-on-scroll reveal-delay-100"
          >
            {t.villa.viewAll}
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95vw] max-w-6xl p-2 sm:p-3 border-border bg-background/98 backdrop-blur-md">
          <DialogTitle className="sr-only">{t.villa.title}</DialogTitle>
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm">
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt[language]}
              fill
              className="object-cover"
              sizes="95vw"
              priority
            />
          </div>

          <div className="flex items-center justify-between gap-3 px-1 py-2">
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label={language === "ru" ? "Предыдущее фото" : "Previous photo"}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-sm text-muted-foreground">
              {t.villa.photoCounterLabel} {activeIndex + 1} / {villaPhotos.length}
            </p>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label={language === "ru" ? "Следующее фото" : "Next photo"}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
