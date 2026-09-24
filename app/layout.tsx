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
  metadataBase: new URL("https://madeira-retreat.vercel.app"),
  title: "Без масок - ретрит на Мадейре, 5–10 ноября 2026",
  description:
    "Камерный женский ретрит на Мадейре: океан, приватная вилла, работа с собой и профессиональная съёмка.",
  openGraph: {
    title: "Без масок - Madeira 2026",
    description: "Пять дней, в которых тебе не нужно быть ни для кого.",
    images: ["/images/hero-madeira.jpg"],
    locale: "ru_RU",
    type: "website",
  },
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
