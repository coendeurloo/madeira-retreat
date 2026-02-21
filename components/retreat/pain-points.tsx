"use client"

import { useLanguage } from "@/lib/language-context"

export function PainPoints() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-4xl">
      <div className="bg-card border border-border shadow-sm p-10 md:p-16 rounded-sm reveal-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-center mb-10">
          {t.pain.title}
        </h2>

        <ul className="space-y-5 text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto">
          {t.pain.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-accent font-serif text-2xl leading-none mt-0.5 shrink-0">&mdash;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center pt-8 border-t border-border">
          <p className="text-xl md:text-2xl font-serif font-medium text-foreground italic">
            {t.pain.closing}
          </p>
        </div>
      </div>
    </section>
  )
}
