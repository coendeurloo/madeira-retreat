"use client"

import { useLanguage } from "@/lib/language-context"

export function ConceptQuote() {
  const { t } = useLanguage()
  const c = t.concept as unknown as string[]
  return <section className="mx-auto max-w-6xl px-6"><div className="border-y border-border py-14 text-center md:py-20"><h2 className="mx-auto max-w-5xl whitespace-pre-line font-serif text-4xl font-medium leading-tight md:text-6xl">{c[0]}</h2><p className="mx-auto mt-10 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground">{c[1]}</p><div className="mx-auto mt-12 max-w-2xl space-y-6 text-left text-base font-light leading-relaxed text-muted-foreground md:text-lg"><p>{c[2]}</p><p className="whitespace-pre-line font-serif text-2xl text-foreground">{c[3]}</p><p>{c[4]}</p></div><p className="mx-auto mt-14 whitespace-pre-line font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">{c[5]}</p></div></section>
}
