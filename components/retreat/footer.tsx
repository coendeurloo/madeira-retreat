"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-muted-foreground font-light text-sm md:text-base">
        <p>{t.footer.copy}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="mailto:hello@example.com"
            className="hover:text-primary transition-colors"
          >
            {t.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  )
}
