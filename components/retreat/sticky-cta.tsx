"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function StickyCTA() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
      <a
        href="#application"
        className="block w-full text-center py-4 bg-primary text-primary-foreground rounded-full font-medium text-base tracking-wide shadow-lg"
      >
        {t.hero.cta}
      </a>
    </div>
  )
}
