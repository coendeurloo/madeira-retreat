import Image from "next/image"

const images = [
  { src: "/images/hero-madeira.jpg", alt: "Madeira coastline" },
  { src: "/images/levada-walk.jpg", alt: "Levada forest trail" },
  { src: "/images/ocean-cliffs.jpg", alt: "Ocean cliffs" },
  { src: "/images/madeira-sunrise.jpg", alt: "Madeira sunrise" },
]
const revealDelays = ["", "reveal-delay-100", "reveal-delay-200", "reveal-delay-300"]

export function Gallery() {
  return (
    <section className="w-full bg-card py-12 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden h-64 md:h-80 rounded-sm reveal-on-scroll ${
                revealDelays[i % revealDelays.length]
              } ${i % 2 !== 0 ? "md:mt-12" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
