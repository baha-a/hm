
const brands = [
  { name: "Samsung", image: "/images/brands/samsung.svg" },
  { name: "Beko", image: "/images/brands/beko.svg" },
  { name: "AEG", image: "/images/brands/aeg.svg" },
  { name: "Siemens", image: "/images/brands/siemens.svg" },
  { name: "Neff", image: "/images/brands/neff.svg" },
  { name: "Miele", image: "/images/brands/miele.svg" },
  { name: "Bosch", image: "/images/brands/bosch.svg" },
  { name: "Bauknecht", image: "/images/brands/bauknecht.svg" },
]

export default function Brands() {
  return (
  <>
    <div className="relative flex overflow-x-hidden py-20 my-8 dark:bg-gray-900/50 bg-gray-50 shadow">
      <div className="px-10 flex gap-20 animate-marquee whitespace-nowrap">
        {brands.map(x => <img className="w-32" key={'a-' + x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'x-'+x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'x2-'+x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'x2-'+x.image} src={x.image} alt={x.name} />)}
      </div>
      <div className="px-10 flex gap-20 animate-marquee2 whitespace-nowrap">
        {brands.map(x => <img className="w-32" key={'y-'+x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'z-'+x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'z2-'+x.image} src={x.image} alt={x.name} />)}
        {brands.map(x => <img className="w-32" key={'z2-'+x.image} src={x.image} alt={x.name} />)}
      </div>
    </div>
  </>
  )
}
