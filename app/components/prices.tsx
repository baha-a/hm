export default function Prices() {
  return (
    <div className="flex flex-wrap justify-center text-center pb-8 bg-gray-50 dark:bg-gray-900/60">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-bold text-center pt-12 pb-4 tracking-tight">Unsere Preise</h2>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <div>
          <h3 className="shadow-xl rounded-t-3xl p-4 font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
            Lieferservice
          </h3>
          <div className="w-96 md:w-80 lg:w-96 shadow-lg rounded-b-3xl p-4 dark:bg-gray-800">
            <PriceItem title="Anlieferung in Köln" subtitle="bis zur 3. Etage (erstes Gerät)" cost={39} />
            <PriceItem title="Jedes weitere Gerät" cost={19} prefix="+" />
            <PriceItem title="Ab der 4. Etage" subtitle="ohne Aufzug" cost={10} prefix="zzgl." />
            <PriceItem title="Herd Anlieferung inkl. Anschluss" subtitle="in Köln" cost={59} />
            <PriceItem title="Anlieferung" subtitle="außerhalb von Köln" cost={49} prefix="ab" />
            <PriceItem title="Altgeräteentsorgung" cost={10} />
          </div>
        </div>
        <div>
          <h3 className="shadow-xl rounded-t-3xl p-4 font-bold text-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Premium Lieferservice
          </h3>
          <div className="w-96 md:w-80 lg:w-96 shadow-lg rounded-b-3xl p-4 dark:bg-gray-800">
            <PriceItem className="pt-1 pb-6" title="Waschmaschine" subtitle="inkl. Anschluss" cost={69} />
            <PriceItem className="pt-1 pb-6" title="Spülmaschine" subtitle="inkl. Anschluss und Montage" cost={79} prefix="ab" />
            <PriceItem className="pt-1 pb-6" title="Einbauherdset" subtitle="inkl. Anschluss und Montage" cost={99} />
            <PriceItem className="pt-1 pb-6" title="Einbaukühlschrank" subtitle="inkl. Montage, Altgerätemitnahme kostenfrei" cost={99} />
            <PriceItem className="pt-1 pb-6" title="Jedes weitere Gerät" cost={49} prefix="+" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceItem({ cost, title, subtitle, prefix, className }: {
  cost: number,
  title: string,
  subtitle?: string,
  prefix?: string,
  className?: string,
}) {
  return (
    <div className={`my-4 flex flex-col pb-4 border-b border-dashed border-gray-300 dark:border-gray-700 last:border-none ${className}`}>
      <div className="flex flex-row justify-between">
        <span>
          {title}
        </span>
        <div>
          <span className="text-gray-700 dark:text-gray-500">{prefix} € </span>
          <span className="font-bold text-xl">
            {cost}
          </span>
        </div>
      </div>
      <span className="flex italic text-sm text-gray-700 dark:text-gray-500">
        {subtitle}
      </span>
    </div>
  )
}
