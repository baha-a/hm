export default function Services() {
  return (
    <div className="flex flex-wrap justify-center text-center mb-8">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center pt-12 pb-4 tracking-tight">Unsere Dienstleistungen</h2>
        <p className="text-lg font-light">
          Ihr Schlüssel zu einer reibungslos funktionierenden Haushaltselektronik
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 px-10 lg:px-40">
        <Service title="Lieferung" content="Geben Sie uns die Verantwortung für die Zustellung. Wir werden Ihnen die von uns erworbenen Geräte an dem von Ihnen gewünschten Tag nach Hause liefern">
          <svg className="py-4 w-40 text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
          </svg>
        </Service>
        <Service title="Anschluss / Montage" content="Zwei Versandoptionen stehen zur Auswahl – für jeden Bedarf das Passende! Entscheiden Sie sich entweder für unsere Standard-Lieferung oder genießen Sie den Komfort unserer Premium-Lieferung, die auch Anschluss und Montage beinhaltet. Wir streben danach, unseren Kunden den bestmöglichen Service zu bieten">
          <svg className="py-4 w-40 text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>
        </Service>
        <Service title="Service / Reparaturen" content="Unser Reparatur- und Kundenservice zeichnet sich durch Freundlichkeit und Fachkompetenz aus">
          <svg className="py-4 w-40 text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="1" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
          </svg>
        </Service>
        <Service title="Beratung" content="Als Ihr Fachhändler in Köln behalten wir stets die neuesten Entwicklungen und Innovationen im Auge. Gerne teilen wir Ihnen die benötigten Informationen mit">
          <svg className="py-4 w-40 text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
          </svg>
        </Service>
      </div>
    </div>
  );
}

function Service({
  title,
  content,
  children,
}: {
  title: string,
  content: string,
  children: any,
}) {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-900 flex flex-col items-center">
      {children}
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </div>
  </div>
  )
}
