"use client"

import { Calendar, MapPin, Users, CheckCircle, XCircle, Wallet } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Logistics() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="container mx-auto px-6 max-w-5xl">
      <div className="mb-12 text-center reveal-on-scroll">
        <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">
          {t.logistics.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Info cards */}
        <div className="lg:col-span-5 space-y-6 reveal-on-scroll">
          <div className="bg-card p-6 border border-border rounded-sm shadow-sm flex items-start gap-4">
            <Calendar className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-medium text-foreground mb-1">{t.logistics.dates.label}</h4>
              <p className="font-light text-muted-foreground">{t.logistics.dates.value}</p>
            </div>
          </div>
          <div className="bg-card p-6 border border-border rounded-sm shadow-sm flex items-start gap-4">
            <MapPin className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-medium text-foreground mb-1">{t.logistics.location.label}</h4>
              <p className="font-light text-muted-foreground">
                {t.logistics.location.value}
                <br />
                {t.logistics.location.value2}
              </p>
            </div>
          </div>
          <div className="bg-card p-6 border border-border rounded-sm shadow-sm flex items-start gap-4">
            <Users className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-medium text-foreground mb-1">{t.logistics.group.label}</h4>
              <p className="font-light text-muted-foreground">{t.logistics.group.value}</p>
            </div>
          </div>
        </div>

        {/* Right: Pricing card */}
        <div className="lg:col-span-7 bg-card p-8 md:p-10 border border-border rounded-sm shadow-sm reveal-on-scroll reveal-delay-100">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-6 whitespace-pre-line">
            {t.logistics.pricingLead}
          </p>
          <h3 className="font-serif text-2xl font-medium tracking-tight mb-6 text-foreground">{t.logistics.pricingTitle}</h3>
          <div className="space-y-4">
            {t.logistics.earlyBird.label || t.logistics.earlyBird.price ? (
              <div className="flex justify-between items-center p-6 bg-muted/35 border border-border rounded-sm opacity-70">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-1 block">
                    {t.logistics.earlyBird.label}
                  </span>
                  {t.logistics.earlyBird.spots ? (
                    <span className="text-sm text-muted-foreground">
                      {t.logistics.earlyBird.spots}
                    </span>
                  ) : null}
                </div>
                {t.logistics.earlyBird.price ? (
                  <div className="font-serif text-3xl font-medium tracking-tight text-foreground">
                    {t.logistics.earlyBird.price}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="p-6 md:p-7 bg-[hsl(25_70%_97%)] border-2 border-primary/45 rounded-sm shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="text-lg font-medium text-foreground">
                  {t.logistics.current.label}
                </div>
                <div className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  {t.logistics.current.price}
                </div>
              </div>
              {t.logistics.current.note ? (
                <p className="mt-2 text-sm md:text-base text-foreground/80">
                  {t.logistics.current.note}
                </p>
              ) : null}
            </div>

            {t.logistics.regular.label || t.logistics.regular.price ? (
              <div className="flex justify-between items-center px-6 py-5 bg-background border border-border/70 rounded-sm">
                <span className="text-lg font-medium text-muted-foreground">{t.logistics.regular.label}</span>
                <div className="font-serif text-3xl text-foreground/85">{t.logistics.regular.price}</div>
              </div>
            ) : null}
          </div>

          <p className="mt-6 text-lg md:text-xl font-serif font-medium text-foreground">{t.logistics.spots}</p>

          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-sm border border-primary/35 bg-[hsl(25_75%_96%)] text-foreground">
            <Wallet className="w-5 h-5 text-primary shrink-0" />
            <p className="text-lg md:text-xl font-medium whitespace-pre-line">{t.logistics.installment}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-border space-y-6">
            <div>
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> {t.logistics.included.title}
              </h4>
              <ul className="space-y-2 font-light text-muted-foreground text-sm">
                {t.logistics.included.items.map((item, i) => (
                  <li key={i}>{"- "}{item}</li>
                ))}
              </ul>
              {t.logistics.priceNote ? (
                <p className="mt-4 text-sm font-light text-muted-foreground italic">{t.logistics.priceNote}</p>
              ) : null}
              <p className="mt-4 font-serif text-xl text-foreground">{t.logistics.pricePositioning}</p>
            </div>

            <div className="space-y-4 text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              <p className="text-foreground">{t.logistics.deposit}</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground/50" /> {t.logistics.notIncluded.title}
              </h4>
              <ul className="space-y-2 font-light text-muted-foreground text-sm">
                {t.logistics.notIncluded.items.map((item, i) => (
                  <li key={i}>{"- "}{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-light text-muted-foreground italic">{t.logistics.notIncluded.note}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA after pricing */}
      <div className="mt-12 text-center space-y-4 reveal-on-scroll reveal-delay-200">
        <a
          href="#application"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 shadow-lg text-lg font-medium tracking-wide"
        >
          {t.logistics.cta}
        </a>
      </div>

      {/* B2B */}
      <div className="mt-10 text-center bg-background p-6 rounded-sm border border-border reveal-on-scroll reveal-delay-300">
        <p className="text-sm font-light text-muted-foreground">
          <strong className="font-medium text-foreground">B2B: </strong>
          {t.logistics.b2b}
        </p>
      </div>
    </section>
  )
}
