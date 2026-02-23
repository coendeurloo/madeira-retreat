"use client"

import Image from "next/image"
import { Video } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hosts() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Host */}
        <div className="reveal-on-scroll">
          <h3 className="font-serif text-3xl font-medium tracking-tight mb-6">
            {t.hosts.title}
          </h3>
          <div className="bg-card border border-border shadow-sm rounded-sm overflow-hidden h-full flex flex-col">
            <div className="relative h-72 md:h-80 border-b border-border bg-white p-3 reveal-on-scroll reveal-delay-100">
              <Image
                src="/images/elija.jpg"
                alt={t.hosts.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/70 to-transparent" />
            </div>

            <div className="p-8 flex-1">
            <h4 className="text-xl font-medium text-foreground mb-1">
              {t.hosts.name}
            </h4>
            <p className="text-sm text-primary mb-6">{t.hosts.role}</p>

            <div className="space-y-4 font-light text-muted-foreground leading-relaxed">
              <p>{t.hosts.bio}</p>
              <p>{t.hosts.bio2}</p>
              <p className="italic border-l-2 border-muted-foreground/30 pl-4 mt-6">
                {`"${t.hosts.quote}"`}
              </p>
              <p className="text-sm text-muted-foreground/80">{t.hosts.credential}</p>
            </div>
            </div>
          </div>
        </div>

        {/* Visual work */}
        <div className="reveal-on-scroll reveal-delay-100">
          <h3 className="font-serif text-3xl font-medium tracking-tight mb-6">
            {t.hosts.visualTitle}
          </h3>
          <div className="relative overflow-hidden border border-border shadow-sm rounded-sm h-full flex flex-col bg-[radial-gradient(circle_at_top_right,_hsl(25_70%_92%),_hsl(35_50%_97%),_hsl(0_0%_100%))]">
            <div className="absolute inset-x-0 top-0 h-1 bg-primary/60" />
            <div className="relative h-72 md:h-80 border-b border-border bg-white p-3 reveal-on-scroll reveal-delay-200">
              <Image
                src="/images/olga.jpg"
                alt={t.hosts.visualPhotographerAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/70 to-transparent" />
            </div>

            <div className="p-8 flex-1">
              <h4 className="text-xl font-medium text-foreground mb-1">
                {t.hosts.visualName}
              </h4>
              <p className="text-sm text-primary mb-6">{t.hosts.visualRole}</p>
              <Video
                className="w-8 h-8 text-primary/70 mb-4"
                strokeWidth={1.5}
              />
              <div className="space-y-4 font-light text-muted-foreground leading-relaxed relative z-10">
                <p>{t.hosts.visualP1}</p>
                <p className="font-medium text-foreground mt-4 whitespace-pre-line">
                  {t.hosts.visualP2}
                </p>
                <p>{t.hosts.visualP3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
