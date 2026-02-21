"use client"

import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/retreat/language-switcher"
import { StickyCTA } from "@/components/retreat/sticky-cta"
import { Hero } from "@/components/retreat/hero"
import { PainPoints } from "@/components/retreat/pain-points"
import { ConceptQuote } from "@/components/retreat/concept-quote"
import { Features } from "@/components/retreat/features"
import { Gallery } from "@/components/retreat/gallery"
import { Program } from "@/components/retreat/program"
import { Logistics } from "@/components/retreat/logistics"
import { Hosts } from "@/components/retreat/hosts"
import { FinalCTA } from "@/components/retreat/cta"
import { Footer } from "@/components/retreat/footer"

export default function Page() {
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
        <Program />
        <Logistics />
        <Hosts />
        <FinalCTA />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
