"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <header className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-madeira.jpg"
          alt="Madeira coastline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-10">
        <div className="inline-flex flex-col items-center mb-6 reveal-on-scroll">
          <span className="text-sm md:text-base tracking-widest uppercase font-medium mb-4 text-white/80 border-b border-white/30 pb-2">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 drop-shadow-lg text-balance reveal-on-scroll reveal-delay-100">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md text-white/90 reveal-on-scroll reveal-delay-200">
          {t.hero.subtitle}
          <br />
          {t.hero.subtitleLine2}
        </p>

        <div className="mt-12 flex flex-col items-center reveal-on-scroll reveal-delay-300">
          <a
            href="#application"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-foreground rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            <span className="text-lg font-medium tracking-tight">
              {t.hero.cta}
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-sm font-light text-white/70">
            {t.hero.ctaNote}
          </p>
        </div>
      </div>
    </header>
  )
}
