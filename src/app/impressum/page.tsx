import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Dellbrück Haushaltsgeräte",
  description: "Impressum und Anbieterkennzeichnung von Dellbrück Haushaltsgeräte in Köln.",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">Rechtliches</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Dellbrück Haushaltsgeräte
            <br />
            Inhaber: [Vor- und Nachname des Inhabers]
            <br />
            Bergisch Gladbacher Str. 595
            <br />
            51067 Köln
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Kontakt</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Telefon:{" "}
            <a href="tel:+4917684656125" className="font-medium text-gray-900 transition hover:text-brand-600">
              +49 176 84656125
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@dellbruck.de" className="font-medium text-gray-900 transition hover:text-brand-600">
              info@dellbruck.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            [USt-IdNr. eintragen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            [Vor- und Nachname des Inhabers]
            <br />
            Bergisch Gladbacher Str. 595
            <br />
            51067 Köln
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            EU-Streitschlichtung
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 underline decoration-brand-400 decoration-2 underline-offset-2 transition hover:text-brand-600"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
            den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Haftung für Links
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Urheberrecht</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
            die Urheberrechte Dritter beachtet.
          </p>
        </section>
      </div>
    </div>
  );
}
