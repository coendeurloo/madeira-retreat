"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { whatsappHref } from "@/lib/retreat-config"

export function StickyHeader() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll) }, [])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? "border-b border-border bg-background/95 text-foreground backdrop-blur" : "text-white"}`}><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"><span className="font-serif text-xl font-medium tracking-tight">БЕЗ МАСОК</span><a href={whatsappHref()} className={`rounded-full px-4 py-2 text-sm font-medium transition ${scrolled ? "bg-primary text-white" : "bg-white text-foreground"}`}>{t.nav}</a></div></header>
}
