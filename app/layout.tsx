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
  title: "Ретрит «Без масок» | Мадейра, 5–10 ноября 2026",
  description: "Пять дней на Мадейре, чтобы отвлечься от привычных обязанностей, разобраться в своих желаниях и честно посмотреть на свою жизнь. Всего 6 участниц.",
  openGraph: {
    title: "Ретрит «Без масок» | Мадейра, 5–10 ноября 2026",
    description: "Пять дней на Мадейре, чтобы отвлечься от привычных обязанностей, разобраться в своих желаниях и честно посмотреть на свою жизнь. Всего 6 участниц.",
    url: "/",
    siteName: "Ретрит «Без масок»",
    images: [{
      url: "/images/hero-madeira-poster.jpg",
      width: 1280,
      height: 720,
      alt: "Ретрит «Без масок» на Мадейре",
    }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ретрит «Без масок» | Мадейра, 5–10 ноября 2026",
    description: "Пять дней на Мадейре, чтобы отвлечься от привычных обязанностей, разобраться в своих желаниях и честно посмотреть на свою жизнь. Всего 6 участниц.",
    images: ["/images/hero-madeira-poster.jpg"],
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
