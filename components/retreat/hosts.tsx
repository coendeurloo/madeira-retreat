"use client"

import { Video } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hosts() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Host */}
        <div>
          <h3 className="font-serif text-3xl font-medium tracking-tight mb-6">
            {t.hosts.title}
          </h3>
          <div className="bg-card p-8 border border-border shadow-sm rounded-sm">
            <h4 className="text-xl font-medium text-foreground mb-1">
              {t.hosts.name}
            </h4>
            <p className="text-sm text-primary mb-6">{t.hosts.role}</p>

            <div className="space-y-4 font-light text-muted-foreground leading-relaxed">
              <p>{t.hosts.bio}</p>
              <p className="italic border-l-2 border-muted-foreground/30 pl-4 mt-6">
                {`"${t.hosts.quote}"`}
              </p>
            </div>
          </div>
        </div>

        {/* Visual work */}
        <div>
          <h3 className="font-serif text-3xl font-medium tracking-tight mb-6">
            {t.hosts.visualTitle}
          </h3>
          <div className="bg-card p-8 border border-border shadow-sm rounded-sm h-full flex flex-col justify-center">
            <Video
              className="w-8 h-8 text-muted-foreground/50 mb-4"
              strokeWidth={1.5}
            />
            <div className="space-y-4 font-light text-muted-foreground leading-relaxed">
              <p>{t.hosts.visualP1}</p>
              <p className="font-medium text-foreground mt-4">
                {t.hosts.visualP2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
