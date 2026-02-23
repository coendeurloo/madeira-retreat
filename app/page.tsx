"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/retreat/language-switcher"
import { StickyCTA } from "@/components/retreat/sticky-cta"
import { Hero } from "@/components/retreat/hero"
import { PainPoints } from "@/components/retreat/pain-points"
import { ConceptQuote } from "@/components/retreat/concept-quote"
import { Features } from "@/components/retreat/features"
import { Gallery } from "@/components/retreat/gallery"
import { VillaShowcase } from "@/components/retreat/villa-showcase"
import { Program } from "@/components/retreat/program"
import { Logistics } from "@/components/retreat/logistics"
import { Hosts } from "@/components/retreat/hosts"
import { FinalCTA } from "@/components/retreat/cta"
import { Footer } from "@/components/retreat/footer"

export default function Page() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    )

    if (!elements.length) return

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            obs.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.15,
      },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <StickyCTA />
      <Hero />
      <main className="relative z-20 bg-background pt-20 pb-20 space-y-32">
        <PainPoints />
        <ConceptQuote />
        <Features />
        <Gallery />
        <VillaShowcase />
        <Program />
        <Logistics />
        <Hosts />
        <FinalCTA />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
