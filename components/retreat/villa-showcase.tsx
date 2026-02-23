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
    src: "/images/villa/nbd_6ea80cb5-430e-4d09-86b0-96483caf08ce.webp",
    alt: {
      ru: "Вид сверху на виллу, сад, бассейн и океан",
      en: "Aerial view of the villa, garden, pool, and ocean",
    },
  },
  {
    src: "/images/villa/nbd_0c49fa4a-03ef-41fe-a5f6-ddfa246d3701.jpeg",
    alt: {
      ru: "Джакузи с видом на Атлантику",
      en: "Jacuzzi with Atlantic Ocean view",
    },
  },
  {
    src: "/images/villa/nbd_6ab5d632-8bd4-4d13-ae74-2757f11942da.jpeg",
    alt: {
      ru: "Терраса с обеденной зоной и бассейном",
      en: "Terrace dining area by the pool",
    },
  },
  {
    src: "/images/villa/nbd_4447df9e-7d77-4292-a397-48a6ee21fcfc.webp",
    alt: {
      ru: "Сад и бассейн с панорамным видом на море",
      en: "Garden and pool with panoramic sea view",
    },
  },
  {
    src: "/images/villa/nbd_a66eab6d-306e-4101-a63b-dd070afd2477.webp",
    alt: {
      ru: "Фасад виллы и бассейн",
      en: "Villa facade and swimming pool",
    },
  },
  {
    src: "/images/villa/nbd_e3f1bfde-fd70-4b86-9156-2d1a85ec9ec8.webp",
    alt: {
      ru: "Зона отдыха у бассейна и джакузи",
      en: "Relaxation area by the pool and jacuzzi",
    },
  },
  {
    src: "/images/villa/nbd_41a7f67c-4457-4958-9718-f8f4c37b55df.jpeg",
    alt: {
      ru: "Бассейн и джакузи рядом с домом",
      en: "Pool and jacuzzi next to the house",
    },
  },
  {
    src: "/images/villa/nbd_4c3ae76d-b27d-4608-9151-8839e4c36f55.jpeg",
    alt: {
      ru: "Джакузи и бассейн на фоне океана",
      en: "Jacuzzi and pool overlooking the ocean",
    },
  },
  {
    src: "/images/villa/nbd_52fdadc0-bebc-4c16-adcc-11d9261a5b53.jpeg",
    alt: {
      ru: "Лаунж-зона у бассейна",
      en: "Poolside lounge area",
    },
  },
  {
    src: "/images/villa/nbd_8a885601-dc02-4331-88d8-7229e3a148fc.jpeg",
    alt: {
      ru: "Панорамный вид на виллу и участок",
      en: "Panoramic view of the villa and grounds",
    },
  },
  {
    src: "/images/villa/nbd_9b3ada3a-d54c-4309-ab17-13c26ac96775.jpeg",
    alt: {
      ru: "Зона отдыха у бассейна с видом на сад",
      en: "Poolside chill area with garden view",
    },
  },
  {
    src: "/images/villa/nbd_9d4bc687-d792-438e-bb85-7695ad939ac6.jpeg",
    alt: {
      ru: "Вид сверху на бассейн и океан",
      en: "Top view of the pool and ocean",
    },
  },
]

const heroPhotoSrc = "/images/villa/nbd_a66eab6d-306e-4101-a63b-dd070afd2477.webp"
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
          <p className="text-lg font-light text-muted-foreground leading-relaxed">
            {t.villa.intro}
          </p>
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
