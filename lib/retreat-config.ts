export const retreatConfig = {
  title: "Без масок",
  location: "Мадейра",
  dates: "5–10 ноября 2026",
  seats: 6,
  earlyPrice: 1590,
  regularPrice: 1680,
  earlyPriceEndsAt: "2026-09-30T23:59:59+02:00",
  whatsappNumber: "37129834866",
  whatsappMessage:
    "Привет, Элия! Меня заинтересовал ретрит «Без масок» на Мадейре. Хочу узнать подробности",
  instagramUrl:
    "https://www.instagram.com/elly_love_suzai?stkn=aG1vejEzeHAzNG5w&utm_source=qr",
} as const

export function whatsappHref() {
  if (!retreatConfig.whatsappNumber) return "#whatsapp-not-configured"
  return `https://wa.me/${retreatConfig.whatsappNumber}?text=${encodeURIComponent(retreatConfig.whatsappMessage)}`
}

export function isEarlyPriceActive(now = new Date()) {
  return now.getTime() <= new Date(retreatConfig.earlyPriceEndsAt).getTime()
}
