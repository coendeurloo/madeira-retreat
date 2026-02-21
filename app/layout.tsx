import React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lora } from "next/font/google"

import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ретрит на Мадейре | Путь к своей мечте",
  description:
    "Трансформационный 5-дневный ретрит для женщин на Мадейре. 22-26 мая 2026. Глубокая внутренняя перезагрузка в закрытой группе из 8 женщин.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
