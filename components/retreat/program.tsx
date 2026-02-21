"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const revealDelays = ["", "reveal-delay-100", "reveal-delay-200", "reveal-delay-300", "reveal-delay-400"]

export function Program() {
  const { t } = useLanguage()
  const days = t.program.days
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const frameRef = useRef<number | null>(null)
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  useEffect(() => {
    const calculate = () => {
      const focusY = window.innerHeight * 0.45
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const midpoint = rect.top + rect.height * 0.5
        const distance = Math.abs(midpoint - focusY)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveDayIndex(closestIndex)
      frameRef.current = null
    }

    const scheduleCalculate = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(calculate)
    }

    scheduleCalculate()
    window.addEventListener("scroll", scheduleCalculate, { passive: true })
    window.addEventListener("resize", scheduleCalculate)

    return () => {
      window.removeEventListener("scroll", scheduleCalculate)
      window.removeEventListener("resize", scheduleCalculate)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [days.length])

  return (
    <section className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
          {t.program.title}
        </h2>
      </div>

      <div className="relative border-l border-muted-foreground/30 ml-4 md:ml-6 space-y-12 pb-8">
        {days.map((day, i) => {
          const isActive = i === activeDayIndex
          const dayColor = isActive
            ? "hsl(var(--primary))"
            : "hsl(var(--muted-foreground))"
          return (
            <div
              key={i}
              ref={(node) => {
                itemRefs.current[i] = node
              }}
              className={`relative pl-8 md:pl-12 reveal-on-scroll ${revealDelays[i % revealDelays.length]}`}
            >
              <div
                className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full shadow-[0_0_0_8px_hsl(var(--background))]"
                style={{ backgroundColor: dayColor }}
              />
              <span
                className="text-sm font-medium tracking-widest uppercase mb-2 block transition-colors duration-300"
                style={{ color: dayColor }}
              >
                {day.day}
              </span>
              <h3
                className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3 transition-all duration-300"
                style={{
                  color: dayColor,
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {day.title}
              </h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                {day.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center reveal-on-scroll reveal-delay-200">
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
