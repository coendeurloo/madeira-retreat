"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-6 max-w-4xl">
      <div className="mb-10 text-center reveal-on-scroll">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
          {t.faq.title}
        </h2>
      </div>

      <div className="bg-card border border-border rounded-sm px-6 md:px-8 reveal-on-scroll reveal-delay-100">
        <Accordion type="single" collapsible>
          {t.faq.items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
