"use client"

import { useLanguage } from "@/lib/language-context"

export function Program() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
          {t.program.title}
        </h2>
      </div>

      <div className="relative border-l border-muted-foreground/30 ml-4 md:ml-6 space-y-12 pb-8">
        {t.program.days.map((day, i) => {
          const isFirstOrLast = i === 0 || i === t.program.days.length - 1
          return (
            <div key={i} className="relative pl-8 md:pl-12">
              <div
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full shadow-[0_0_0_8px_hsl(var(--background))] ${
                  isFirstOrLast ? "bg-primary" : "bg-muted-foreground/50"
                }`}
              />
              <span
                className={`text-sm font-medium tracking-widest uppercase mb-2 block ${
                  isFirstOrLast ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {day.day}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3">
                {day.title}
              </h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                {day.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl font-medium text-foreground mb-6 font-serif italic">
          {t.program.ctaIntro}
        </p>
        <a
          href="#application"
          className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-colors duration-300"
        >
          {t.program.cta}
        </a>
        <p className="mt-3 text-xs font-light text-muted-foreground">
          {t.program.ctaNote}
        </p>
      </div>
    </section>
  )
}
