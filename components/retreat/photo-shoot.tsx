"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function PhotoShoot() {
  const { t } = useLanguage(); const copy = t.shoot as unknown as string[]
  return (
    <section className="relative isolate overflow-hidden bg-foreground px-6 py-20 text-white before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-36 before:bg-gradient-to-b before:from-background before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-36 after:bg-gradient-to-t after:from-background after:to-transparent after:content-[''] md:py-28">
      <div className="relative z-20 mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
          <Image
            src="/images/retreat/final-shoot/achadas-da-cruz-golden-hour.jpeg"
            alt="Achadas da Cruz в золотой час"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-medium md:text-5xl">{copy[0]}</h2>
          <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-white/80 md:text-lg">
            <p>{copy[1]}</p>
            <p>{copy[2]}</p>
            <p className="font-medium text-white">{copy[3]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
