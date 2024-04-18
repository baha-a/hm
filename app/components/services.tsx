export default function Services() {
  return (
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-bold text-center pt-12 pb-4 tracking-tight">Unsere Dienstleistungen</h2>
        <p className="text-lg font-light">
          Ihr Schlüssel zu einer reibungslos funktionierenden Haushaltselektronik
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 px-20 md:px-10 lg:px-40">
        <Service title="Lieferung" content="Geben Sie uns die Verantwortung für die Zustellung. Wir werden Ihnen die von uns erworbenen Geräte an dem von Ihnen gewünschten Tag nach Hause liefern" />
        <Service title="Anschluss / Montage" content="Zwei Versandoptionen stehen zur Auswahl – für jeden Bedarf das Passende! Entscheiden Sie sich entweder für unsere Standard-Lieferung oder genießen Sie den Komfort unserer Premium-Lieferung, die auch Anschluss und Montage beinhaltet. Wir streben danach, unseren Kunden den bestmöglichen Service zu bieten"/>
        <Service title="Service / Reparaturen" content="Unser Reparatur- und Kundenservice zeichnet sich durch Freundlichkeit und Fachkompetenz aus"/>
        <Service title="Beratung" content="Als Ihr Fachhändler in Köln behalten wir stets die neuesten Entwicklungen und Innovationen im Auge. Gerne teilen wir Ihnen die benötigten Informationen mit"/>
      </div>
    </div>
  );
}

function Service({
  title,
  content
}: {
  title: string,
  content: string,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="/images/9.jpg" alt="" />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </div>
  </div>
  )
}
