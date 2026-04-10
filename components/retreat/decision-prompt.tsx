"use client"

import { useLanguage } from "@/lib/language-context"

export function DecisionPrompt() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-4xl">
      <div className="text-center reveal-on-scroll">
        <div className="w-px h-14 bg-primary/35 mx-auto" />
        <h2 className="my-8 font-serif text-2xl md:text-4xl font-medium tracking-tight leading-tight text-foreground mx-auto max-w-[24ch] text-balance">
          {t.decisionPrompt.title}
        </h2>
        <div className="w-px h-14 bg-primary/35 mx-auto" />
      </div>

      <div className="mt-10 bg-card border border-border rounded-sm px-8 py-12 md:px-12 md:py-14 reveal-on-scroll reveal-delay-100">

        <p className="text-lg md:text-xl font-medium text-foreground mb-6">
          {t.decisionPrompt.listTitle}
        </p>

        <ul className="space-y-4 text-base md:text-lg font-light text-muted-foreground leading-relaxed">
          {t.decisionPrompt.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary mt-0.5">-</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center pt-8">
          <p className="text-xl md:text-2xl font-serif font-medium text-foreground italic mb-8 whitespace-pre-line text-balance">
            {t.decisionPrompt.closing}
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-border/70">
          <p className="text-base md:text-lg font-medium text-foreground mb-5">
            {t.decisionPrompt.notForTitle}
          </p>
          <ul className="space-y-3 text-sm md:text-base font-light text-muted-foreground leading-relaxed">
            {t.decisionPrompt.notForPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center reveal-on-scroll reveal-delay-200">
        <div className="w-px h-14 bg-primary/35 mx-auto" />
        <p className="my-8 text-lg md:text-2xl font-serif text-foreground leading-[1.45] whitespace-pre-line max-w-[34ch] mx-auto text-balance">
          {t.decisionPrompt.transition}
        </p>
        <div className="w-px h-14 bg-primary/35 mx-auto" />
        <div className="mt-8">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border bg-card text-foreground rounded-full hover:bg-muted/40 transition-colors duration-300 text-base md:text-lg"
          >
            {t.decisionPrompt.pricingCta}
          </a>
        </div>
      </div>
    </section>
  )
}
