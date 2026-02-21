"use client"

import { useLanguage } from "@/lib/language-context"

export function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section id="application" className="container mx-auto px-6 max-w-4xl pb-20 pt-10">
      <div className="bg-foreground text-white rounded-sm p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(25_8%_20%),_hsl(25_8%_12%),_hsl(25_8%_10%))] z-0" />

        <div className="relative z-10 space-y-8">
          <p className="text-xl font-light text-white/60">{t.finalCta.spots}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            {t.finalCta.title}
            <br />
            {t.finalCta.titleLine2}
          </h2>

          <div className="pt-6 flex flex-col items-center gap-4">
            <a
              href="https://wa.me/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83%20%D0%BD%D0%B0%20%D1%80%D0%B5%D1%82%D1%80%D0%B8%D1%82%20%D0%BD%D0%B0%20%D0%9C%D0%B0%D0%B4%D0%B5%D0%B9%D1%80%D0%B5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-lg text-lg font-medium tracking-wide inline-block"
            >
              {t.finalCta.button}
            </a>
            <p className="text-sm font-light text-white/50 mt-2">
              {t.finalCta.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
