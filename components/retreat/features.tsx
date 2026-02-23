"use client"

import { Lightbulb, Brain, Target, Users, ChefHat, Camera, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Lightbulb, Brain, Target, Users, ChefHat, Camera, Compass]
const revealDelays = ["", "reveal-delay-100", "reveal-delay-200"]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-6xl">
      <div className="mb-16 text-center reveal-on-scroll">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
          {t.features.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {t.features.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={i}
              className={`bg-card p-8 border border-border shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll ${
                revealDelays[i % revealDelays.length]
              } ${i === 6 ? "md:col-start-1 lg:col-start-2" : ""}`}
            >
              <Icon className="w-9 h-9 text-accent mb-6" strokeWidth={1.5} />
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                <strong className="font-medium text-foreground block mb-2">
                  {item.title}
                </strong>
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
