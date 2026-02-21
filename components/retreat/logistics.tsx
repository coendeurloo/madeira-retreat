"use client"

import { Calendar, MapPin, Users, CheckCircle, XCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Logistics() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-5xl">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">
          {t.logistics.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Info cards */}
        <div className="lg:col-span-5 space-y-6">
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
        <div className="lg:col-span-7 bg-card p-8 md:p-10 border border-border rounded-sm shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 mb-10 pb-10 border-b border-border">
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> {t.logistics.included.title}
              </h4>
              <ul className="space-y-2 font-light text-muted-foreground text-sm">
                {t.logistics.included.items.map((item, i) => (
                  <li key={i}>{"— "}{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground/50" /> {t.logistics.notIncluded.title}
              </h4>
              <ul className="space-y-2 font-light text-muted-foreground text-sm">
                {t.logistics.notIncluded.items.map((item, i) => (
                  <li key={i}>{"— "}{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-light text-muted-foreground italic">
                {t.logistics.notIncluded.note}
              </p>
            </div>
          </div>

          {/* Price blocks */}
          <h3 className="font-serif text-2xl font-medium tracking-tight mb-6 text-foreground">{t.logistics.pricingTitle}</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-6 bg-background border border-border rounded-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-1 block">
                  {t.logistics.earlyBird.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t.logistics.earlyBird.spots}
                </span>
              </div>
              <div className="font-serif text-3xl font-medium tracking-tight text-foreground">
                {t.logistics.earlyBird.price}
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-lg font-medium text-muted-foreground">
                {t.logistics.regular.label}
              </span>
              <div className="font-serif text-2xl text-muted-foreground">
                {t.logistics.regular.price}
              </div>
            </div>

            <p className="text-sm font-light text-muted-foreground italic border-t border-border pt-6">
              {t.logistics.priceNote}
            </p>

            <div className="pt-4 space-y-2 text-sm font-light text-muted-foreground">
              <p>
                <strong className="font-medium">{t.logistics.deposit}</strong>
              </p>
              <p>{t.logistics.installment}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA after pricing */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-lg font-serif font-medium text-foreground">{t.logistics.spots}</p>
        <a
          href="#application"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 shadow-lg text-lg font-medium tracking-wide"
        >
          {t.logistics.cta}
        </a>
        <p className="text-sm font-light text-muted-foreground">
          {t.logistics.ctaNote}
        </p>
      </div>

      {/* B2B */}
      <div className="mt-10 text-center bg-background p-6 rounded-sm border border-border">
        <p className="text-sm font-light text-muted-foreground">
          <strong className="font-medium text-foreground">B2B: </strong>
          {t.logistics.b2b}
        </p>
      </div>
    </section>
  )
}
