"use client"

import { useLanguage } from "@/lib/language-context"
import { retreatConfig } from "@/lib/retreat-config"
export function Footer() { const { t } = useLanguage(); const c = t.footer as unknown as string[]; return <footer className="border-t border-border bg-card py-10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p>{c[0]}</p><p>{c[1]}</p><a href={retreatConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-primary">{c[2]}</a></div></footer> }
