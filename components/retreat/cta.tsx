"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")
    setMessage("")

    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { ok?: boolean; message?: string }

      if (!response.ok || !data.ok) {
        throw new Error(data.message || t.finalCta.form.error)
      }

      setStatus("success")
      setMessage(t.finalCta.form.success)
      setForm({ name: "", phone: "", email: "" })
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : t.finalCta.form.error)
    }
  }

  return (
    <section id="application" className="container mx-auto px-6 max-w-4xl pb-20 pt-10">
      <div className="bg-foreground text-white rounded-sm p-12 md:p-16 text-center shadow-2xl relative overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(25_8%_20%),_hsl(25_8%_12%),_hsl(25_8%_10%))] z-0" />

        <div className="relative z-10 space-y-8">
          <p className="text-2xl md:text-3xl font-serif text-white/80">{t.finalCta.spots}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            {t.finalCta.title}
            <br />
            {t.finalCta.titleLine2}
          </h2>

          <div className="pt-4 flex flex-col items-center gap-4">
            <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="application-name" className="block text-sm text-white/80 text-center">
                    {t.finalCta.form.nameLabel}
                  </label>
                  <Input
                    id="application-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={t.finalCta.form.namePlaceholder}
                    className="h-12 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="application-phone" className="block text-sm text-white/80 text-center">
                    {t.finalCta.form.phoneLabel}
                  </label>
                  <Input
                    id="application-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder={t.finalCta.form.phonePlaceholder}
                    className="h-12 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="application-email" className="block text-sm text-white/80 text-center">
                  {t.finalCta.form.emailLabel}
                </label>
                <Input
                  id="application-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder={t.finalCta.form.emailPlaceholder}
                  className="h-12 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full md:w-auto px-10 py-5 h-auto bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-lg text-lg font-medium tracking-wide"
                >
                  {status === "submitting" ? t.finalCta.form.submitting : t.finalCta.button}
                </Button>
              </div>

              {message ? (
                <p
                  className={`text-sm text-center ${
                    status === "success" ? "text-emerald-200" : "text-red-200"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </form>

            <p className="text-sm md:text-base font-light text-white/60 max-w-2xl mx-auto">
              {t.finalCta.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
