"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/retreat/language-switcher"
import { StickyHeader } from "@/components/retreat/sticky-cta"
import { Hero } from "@/components/retreat/hero"
import { Features } from "@/components/retreat/features"
import { Gallery } from "@/components/retreat/gallery"
import { VillaShowcase } from "@/components/retreat/villa-showcase"
import { Hosts } from "@/components/retreat/hosts"
import { ConceptQuote } from "@/components/retreat/concept-quote"
import { PhotoShoot } from "@/components/retreat/photo-shoot"
import { Testimonials } from "@/components/retreat/testimonials"
import { Booking } from "@/components/retreat/booking"
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
      <StickyHeader />
      <LanguageSwitcher />
      <Hero />
      <main className="relative z-20 space-y-20 bg-background py-14 md:space-y-36 md:py-20">
        <Features />
        <ConceptQuote />
        <Gallery />
        <PhotoShoot />
        <VillaShowcase />
        <Hosts />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
