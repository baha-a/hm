'use client';

export default function Why() {
  return (
    <section id="staerken" className="container-page scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Unsere Stärken</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Warum Kunden uns vertrauen
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Wenn wir an unsere Stärken glauben, werden wir täglich stärker.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <Reason title="Professionelle Beratung" content="Unser engagiertes Team steht Ihnen mit kompetentem Rat zur Seite – bei der Produktauswahl ebenso wie bei Reparaturen.">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
          </svg>
        </Reason>
        <Reason title="Lieferung & Anschluss" content="In Köln und Umgebung liefern und schließen wir an – und nehmen Ihr Altgerät nach Absprache gerne mit.">
          <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
        </Reason>
        <Reason title="Kostenlose Beratung" content="Wir bieten kostenlose Informationen und Beratung im Geschäft, damit Sie das passende Haushaltsgerät finden.">
          <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 9h8m-8 4h6m-2 7-4-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4Z" />
          </svg>
        </Reason>
        <Reason title="Umfassende Auswahl" content="Über 100 sorgfältig aufbereitete Geräte – unsere erfahrene Werkstatt sorgt dafür, dass jedes Gerät in Top-Zustand ist.">
          <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 4h14M5 4v16m14-16v16M5 20h14M9 8h.01M9 12h.01M9 16h.01M14 4v16" />
          </svg>
        </Reason>
        <Reason title="Namhafte Hersteller" content="Geräte von AEG, Miele, Bosch, Siemens, Liebherr, Neff, Bauknecht u.v.m. – Qualität mit Garantie zu fairen Preisen.">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.538 1.88-1.052 4.887-2.081l.572-.196C10.405 2.268 11.19 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.03 4.51 1.543 4.887 2.081C21 5.62 21 7.22 21 10.417c0 .483 0 1.007 0 1.575C21 17.63 16.761 20.366 14.101 21.527c-.72.315-1.082.473-2.101.473-1.02 0-1.38-.158-2.101-.473C7.239 20.366 3 17.63 3 11.992c0-.568 0-1.092 0-1.575Z" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m9 12 2 2 4-4" />
          </svg>
        </Reason>
        <Reason title="Schneller Service" content="Oft noch am selben Tag: viele Kunden berichten von Lieferung, Einbau und Altgerätemitnahme innerhalb kürzester Zeit.">
          <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Reason>
      </div>
    </section>
  );
}

function Reason({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        {children}
      </div>
      <div>
        <h3 className="text-base font-bold tracking-tight text-gray-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{content}</p>
      </div>
    </div>
  );
}
