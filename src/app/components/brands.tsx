const brands = [
  { name: "Samsung", image: "/images/brands/samsung.svg" },
  { name: "Beko", image: "/images/brands/beko.svg" },
  { name: "AEG", image: "/images/brands/aeg.svg" },
  { name: "Siemens", image: "/images/brands/siemens.svg" },
  { name: "Neff", image: "/images/brands/neff.svg" },
  { name: "Miele", image: "/images/brands/miele.svg" },
  { name: "Bosch", image: "/images/brands/bosch.svg" },
  { name: "Bauknecht", image: "/images/brands/bauknecht.svg" },
];

export default function Brands() {
  return (
    <section>
      <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
        Marken, denen Sie vertrauen
      </p>

      <div className="relative mt-8 flex overflow-x-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-stone-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-stone-50 to-transparent" />

        <div className="flex animate-marquee items-center gap-16 whitespace-nowrap px-8">
          {brands.map((x) => (
            <img key={"a-" + x.name} className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src={x.image} alt={x.name} />
          ))}
          {brands.map((x) => (
            <img key={"a2-" + x.name} className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src={x.image} alt={x.name} />
          ))}
        </div>
        <div className="flex animate-marquee2 items-center gap-16 whitespace-nowrap px-8">
          {brands.map((x) => (
            <img key={"b-" + x.name} className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src={x.image} alt={x.name} />
          ))}
          {brands.map((x) => (
            <img key={"b2-" + x.name} className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src={x.image} alt={x.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
