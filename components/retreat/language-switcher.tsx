"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-foreground/80 backdrop-blur-sm rounded-full px-1 py-1">
      <button
        onClick={() => setLanguage("ru")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all",
          language === "ru"
            ? "bg-primary-foreground text-foreground"
            : "text-primary-foreground/70 hover:text-primary-foreground"
        )}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all",
          language === "en"
            ? "bg-primary-foreground text-foreground"
            : "text-primary-foreground/70 hover:text-primary-foreground"
        )}
      >
        EN
      </button>
    </div>
  )
}
