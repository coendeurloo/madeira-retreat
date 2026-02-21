"use client"

import { useLanguage } from "@/lib/language-context"

export function ConceptQuote() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-4xl">
      <div className="space-y-8 text-center reveal-on-scroll">
        <div className="w-px h-16 bg-primary/40 mx-auto" />
        <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed tracking-tight">
          {t.concept.line1}
        </p>
        <p className="text-xl font-light text-muted-foreground">
          {t.concept.line2}
        </p>
        <div className="w-px h-16 bg-primary/40 mx-auto" />
      </div>
    </section>
  )
}
