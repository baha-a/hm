export default function Services() {
  return (
    <section id="services" className="container-page scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Unsere Dienstleistungen</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Alles aus einer Hand
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Ihr Schlüssel zu einer reibungslos funktionierenden Haushaltselektronik.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Service title="Lieferung" content="Geben Sie uns die Verantwortung für die Zustellung. Wir liefern Ihre Geräte am gewünschten Tag bequem nach Hause.">
          <svg className="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
        </Service>
        <Service title="Anschluss / Montage" content="Wählen Sie zwischen Standard-Lieferung und unserer Premium-Lieferung inklusive Anschluss und Montage – ganz nach Ihrem Bedarf.">
          <svg className="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L13 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L3.929 6.343a1 1 0 0 0 0 1.414l.535.536L3.757 10H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </Service>
        <Service title="Service / Reparaturen" content="Unser Reparatur- und Kundenservice zeichnet sich durch Freundlichkeit und Fachkompetenz aus.">
          <svg className="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
          </svg>
        </Service>
        <Service title="Beratung" content="Als Ihr Fachhändler mit Standort in Köln geben wir unser Wissen gerne an Sie weiter. Für Hausbesuche berechnen wir eine Pauschale von 60 € für die Anfahrtskosten.">
          <svg className="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
          </svg>
        </Service>
      </div>
    </section>
  );
}

function Service({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card group flex flex-col p-6 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-400 group-hover:text-gray-900 group-hover:ring-brand-400">
        {children}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{content}</p>
    </div>
  );
}
