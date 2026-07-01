export default function Prices() {
  return (
    <section id="preise" className="scroll-mt-24 bg-white py-20 ring-1 ring-gray-200/70">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Unsere Preise</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparente Konditionen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Faire Festpreise – ohne versteckte Kosten. Wählen Sie den Service, der zu Ihnen passt.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Standard */}
          <div className="card overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-5">
              <h3 className="text-lg font-bold tracking-tight text-gray-900">Lieferservice</h3>
              <p className="mt-1 text-sm text-gray-500">Zuverlässige Anlieferung in Köln</p>
            </div>
            <div className="px-6 py-2">
              <PriceItem title="Anlieferung in Köln" subtitle="bis zur 3. Etage (erstes Gerät)" cost={45} />
              <PriceItem title="Jedes weitere Gerät" cost={19} prefix="+" />
              <PriceItem title="Ab der 4. Etage" subtitle="ohne Aufzug" cost={10} prefix="zzgl." />
              <PriceItem title="Herd-Anlieferung inkl. Anschluss" subtitle="in Köln" cost={79} />
              <PriceItem title="Anlieferung" subtitle="außerhalb von Köln" cost={49} prefix="ab" />
              <PriceItem title="Altgeräteentsorgung" cost={10} />
            </div>
          </div>

          {/* Premium (highlighted) */}
          <div className="card relative overflow-hidden ring-2 ring-brand-400">
            <span className="absolute right-4 top-4 rounded-full bg-brand-400 px-3 py-1 text-xs font-semibold text-gray-900">
              Beliebt
            </span>
            <div className="border-b border-gray-200 bg-gray-900 px-6 py-5">
              <h3 className="text-lg font-bold tracking-tight text-white">Premium Lieferservice</h3>
              <p className="mt-1 text-sm text-gray-300">Inkl. Anschluss &amp; Montage</p>
            </div>
            <div className="px-6 py-2">
              <PriceItem title="Waschmaschine" subtitle="inkl. Anschluss" cost={69} />
              <PriceItem title="Spülmaschine" subtitle="inkl. Anschluss und Montage" cost={79} prefix="ab" />
              <PriceItem title="Einbauherdset" subtitle="inkl. Anschluss und Montage" cost={99} />
              <PriceItem title="Einbaukühlschrank" subtitle="inkl. Montage, Altgerätemitnahme kostenfrei" cost={99} />
              <PriceItem title="Jedes weitere Gerät" cost={49} prefix="+" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Alle Preise in Euro inkl. MwSt. Abweichungen je nach Aufwand möglich – sprechen Sie uns an.
        </p>
      </div>
    </section>
  );
}

function PriceItem({
  cost,
  title,
  subtitle,
  prefix,
}: {
  cost: number;
  title: string;
  subtitle?: string;
  prefix?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-dashed border-gray-200 py-4 last:border-none">
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        {subtitle && <p className="mt-0.5 text-sm italic text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex shrink-0 items-baseline gap-1 whitespace-nowrap">
        {prefix && <span className="text-sm text-gray-400">{prefix}</span>}
        <span className="text-sm text-gray-400">€</span>
        <span className="text-xl font-bold text-gray-900">{cost}</span>
      </div>
    </div>
  );
}
