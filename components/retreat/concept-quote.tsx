"use client"

import { useLanguage } from "@/lib/language-context"

export function ConceptQuote() {
  const { t } = useLanguage()
  const c = t.concept as unknown as string[]
  return <section className="mx-auto max-w-6xl px-6"><div className="border-y border-border py-12 text-center md:py-20"><h2 className="-mx-3 whitespace-pre-line font-serif text-[21px] font-medium leading-[1.2] tracking-[-0.03em] min-[375px]:mx-auto min-[375px]:text-2xl md:mx-auto md:max-w-5xl md:text-6xl md:tracking-normal">{c[0]}</h2><p className="mx-auto mt-8 max-w-2xl whitespace-pre-line text-base leading-6 text-muted-foreground md:mt-10 md:text-lg md:leading-relaxed">{c[1]}</p><div className="mx-auto mt-9 max-w-2xl space-y-6 text-left text-base font-light leading-relaxed text-muted-foreground md:mt-12 md:text-lg"><p>{c[2]}</p><p className="font-serif text-xl leading-snug text-foreground min-[375px]:text-2xl md:text-2xl">{c[3]}</p><p>{c[4]}</p></div><p className="mx-auto mt-10 whitespace-pre-line font-serif text-[24px] font-medium leading-tight text-primary md:mt-14 md:text-4xl">{c[5]}</p></div></section>
}
