export default function Location() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white py-20 ring-1 ring-gray-200/70">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Besuchen Sie unseren Standort
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Mitten in Köln – kommen Sie vorbei oder rufen Sie uns einfach an.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Map */}
          <a
            href="https://maps.app.goo.gl/WifoNjWC6kHdnc9YA?g_st=aw"
            target="_blank"
            className="group block overflow-hidden rounded-2xl border border-gray-200/80 shadow-soft"
          >
            <iframe
              title="Standort Dellbrück Haushaltsgeräte"
              src="https://maps.google.com/maps?q=Dellbr%C3%BCck%20Haushaltsger%C3%A4te%2C%20Bergisch%20Gladbacher%20Str.%20595%2C%2051067%20K%C3%B6ln&output=embed"
              className="block h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </a>

          {/* Details */}
          <div className="card divide-y divide-gray-100 p-2">
            <InfoRow title="Adresse">
              <a href="https://maps.app.goo.gl/WifoNjWC6kHdnc9YA?g_st=aw" target="_blank" className="text-gray-600 transition hover:text-gray-900">
                Bergisch Gladbacher Str. 595, 51067 Köln
              </a>
            </InfoRow>

            <InfoRow title="Öffnungszeiten" icon="clock">
              <p className="text-gray-600">Mo.–Fr. 10–18 Uhr</p>
              <p className="text-gray-600">Sa. 10–16 Uhr</p>
            </InfoRow>

            <InfoRow title="Telefon" icon="phone">
              <a href="tel:+4917684656125" className="text-gray-600 transition hover:text-gray-900">+49 176 84656125</a>
            </InfoRow>

            <InfoRow title="E-Mail" icon="mail">
              <a href="mailto:info@dellbruck.de" className="text-gray-600 transition hover:text-gray-900">info@dellbruck.de</a>
            </InfoRow>

            <InfoRow title="Folgen Sie uns" icon="share">
              <div className="mt-1 flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61552172319852" target="_blank" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-900 hover:text-white">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/dellbruckhaushaltsgerate/" target="_blank" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-900 hover:text-white">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://kleinanzeigen.de/s-bestandsliste.html?userId=134640071" target="_blank" aria-label="Kleinanzeigen" className="flex h-9 items-center justify-center rounded-lg bg-gray-100 px-3 text-gray-600 transition hover:bg-gray-900">
                  <img className="h-4" src="https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg" alt="Kleinanzeigen" />
                </a>
              </div>
            </InfoRow>
          </div>
        </div>
      </div>
    </section>
  );
}

const icons: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
    </>
  ),
  clock: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  mail: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m4 6 8 5 8-5M4 6v12h16V6M4 6h16" />,
  phone: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />,
  share: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />,
};

function InfoRow({
  title,
  icon = "pin",
  children,
}: {
  title: string;
  icon?: keyof typeof icons | string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          {icons[icon] ?? icons.pin}
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-bold tracking-tight text-gray-900">{title}</h3>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </div>
  );
}
