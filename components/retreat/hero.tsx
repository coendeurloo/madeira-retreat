"use client"

import { useLanguage } from "@/lib/language-context"
import { isEarlyPriceActive, retreatConfig } from "@/lib/retreat-config"

export function Hero() {
  const { t } = useLanguage()
  const copy = t.hero as unknown as string[]
  const early = isEarlyPriceActive()

  return (
    <header className="relative flex min-h-[680px] h-[100svh] items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-madeira-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
      >
        <source src="/videos/hero-madeira.mp4?v=2" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center text-white">
        <p className="mb-7 text-xs font-medium tracking-[.22em] uppercase text-white/85">{copy[0]}</p>
        <h1 className="font-serif text-6xl font-medium tracking-tight sm:text-7xl md:text-8xl">{copy[1]}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-2xl font-light leading-relaxed sm:text-3xl">{copy[2]}</p>
        <p className="mt-5 whitespace-pre-line text-base font-light leading-relaxed text-white/90 sm:text-lg">{copy[3]}</p>
        <div className="mt-9 space-y-1 text-sm font-medium tracking-wide sm:text-base">
          <p>{copy[4]}</p>
          {early ? <p>{retreatConfig.earlyPrice.toLocaleString("ru-RU")} € · до 30 сентября включительно</p> : null}
          <p>{early ? "С 1 октября — " : ""}{retreatConfig.regularPrice.toLocaleString("ru-RU")} €</p>
        </div>
        <a href="#what-awaits" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-base font-medium text-foreground transition hover:bg-white/90">{copy[5]}</a>
      </div>
    </header>
  )
}
