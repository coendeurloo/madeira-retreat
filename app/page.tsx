"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/retreat/language-switcher"
import { Hero } from "@/components/retreat/hero"
import { DecisionPrompt } from "@/components/retreat/decision-prompt"
import { Features } from "@/components/retreat/features"
import { Gallery } from "@/components/retreat/gallery"
import { VillaShowcase } from "@/components/retreat/villa-showcase"
import { Program } from "@/components/retreat/program"
import { Logistics } from "@/components/retreat/logistics"
import { Faq } from "@/components/retreat/faq"
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
      <Hero />
      <main className="relative z-20 bg-background pt-20 pb-20 space-y-32">
        <DecisionPrompt />
        <Gallery />
        <Features />
        <VillaShowcase />
        <Program />
        <Logistics />
        <Faq />
        <Hosts />
        <FinalCTA />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
