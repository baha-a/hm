import Carousel from "./carousel";

const carouselImages = [
  "/images/carousel/0.webp",
  "/images/carousel/1.webp",
  "/images/carousel/2.webp",
  "/images/carousel/3.webp",
  "/images/carousel/4.webp",
  "/images/carousel/5.webp",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft amber glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-105 bg-linear-to-b from-brand-100/70 to-transparent"
      />

      <div className="pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            Ihr Fachhändler in Köln
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Haushaltsgeräte – geliefert,{" "}
            <span className="text-brand-500">angeschlossen</span> und montiert.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-gray-600">
            Über 100 sorgfältig geprüfte Geräte namhafter Hersteller – mit Garantie,
            fairem Preis und persönlicher Beratung. Vom Kauf bis zur Montage alles aus einer Hand.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+4917684656125" className="btn-primary">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
              </svg>
              Jetzt anrufen
            </a>
            <a href="#kontakt" className="btn-secondary">
              Standort &amp; Öffnungszeiten
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </span>
              5/5 bei Google
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span>100+ geprüfte Geräte</span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span>Lieferung in Köln &amp; Umgebung</span>
          </div>
        </div>

        <div className="mt-12">
          <Carousel images={carouselImages} />
        </div>
      </div>
    </section>
  );
}
