"use client"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
export function LanguageSwitcher() { const { language, setLanguage } = useLanguage(); return <div className="fixed bottom-4 right-4 z-50 flex rounded-full bg-foreground/85 p-1 text-white backdrop-blur"><button onClick={() => setLanguage("ru")} className={cn("rounded-full px-3 py-1.5 text-xs", language === "ru" && "bg-white text-foreground")}>RU</button><button onClick={() => setLanguage("en")} className={cn("rounded-full px-3 py-1.5 text-xs", language === "en" && "bg-white text-foreground")}>EN</button></div> }
