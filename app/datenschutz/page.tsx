import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Dellbrück Haushaltsgeräte",
  description: "Datenschutzerklärung von Dellbrück Haushaltsgeräte in Köln.",
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Rechtliches</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Datenschutzerklärung
            </h1>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  1. Datenschutz auf einen Blick
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften (insbesondere der DSGVO) sowie dieser
                  Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe
                  personenbezogener Daten möglich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  2. Verantwortliche Stelle
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Dellbrück Haushaltsgeräte
                  <br />
                  [Vor- und Nachname des Inhabers]
                  <br />
                  Bergisch Gladbacher Str. 595
                  <br />
                  51067 Köln
                  <br />
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
                  3. Hosting und Server-Log-Dateien
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch
                  Informationen in sogenannten Server-Log-Dateien erfasst, die Ihr Browser
                  automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
                  Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
                  Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
                  Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                  berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
                  Optimierung seiner Website – hierzu müssen die Server-Log-Dateien erfasst werden.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  4. Kontaktaufnahme
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
                  aller daraus hervorgehenden personenbezogenen Daten (z.&nbsp;B. Name,
                  Kontaktdaten, Inhalt der Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                  uns gespeichert und verarbeitet. Die Verarbeitung erfolgt auf Grundlage von
                  Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                  zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist,
                  andernfalls auf Grundlage unseres berechtigten Interesses an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Ihre
                  Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung
                  nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
                  entgegenstehen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">5. Google Maps</h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Diese Website nutzt den Kartendienst Google Maps zur Darstellung unseres
                  Standorts. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
                  Dublin 4, Irland. Beim Laden der Karte werden Daten (u.&nbsp;a. Ihre IP-Adresse)
                  an Server von Google übertragen und dort gespeichert; dabei kann es auch zu einer
                  Übermittlung in die USA kommen. Die Nutzung von Google Maps erfolgt im Interesse
                  einer ansprechenden Darstellung unseres Online-Angebots und einer leichten
                  Auffindbarkeit unseres Standorts. Dies stellt ein berechtigtes Interesse im Sinne
                  von Art. 6 Abs. 1 lit. f DSGVO dar. Weitere Informationen zum Umgang mit
                  Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 underline decoration-brand-400 decoration-2 underline-offset-2 transition hover:text-brand-600"
                  >
                    https://policies.google.com/privacy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  6. Links zu sozialen Netzwerken und externen Plattformen
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Auf unserer Website befinden sich Links zu unseren Auftritten bei Facebook,
                  Instagram und Kleinanzeigen. Es handelt sich dabei um reine Verlinkungen – erst
                  wenn Sie einen Link anklicken, werden Daten an den jeweiligen Anbieter
                  übermittelt. Für die dortige Datenverarbeitung ist der jeweilige Betreiber der
                  Plattform verantwortlich; es gelten dessen Datenschutzbestimmungen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">7. Ihre Rechte</h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
                  auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten
                  (Art. 15 DSGVO), deren Herkunft und Empfänger sowie den Zweck der
                  Datenverarbeitung, außerdem ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung
                  (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und
                  Datenübertragbarkeit (Art. 20 DSGVO). Einer Verarbeitung auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO können Sie jederzeit widersprechen (Art. 21 DSGVO).
                  Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                  widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
                  jederzeit an uns wenden.
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu. Für Nordrhein-Westfalen ist dies die Landesbeauftragte für
                  Datenschutz und Informationsfreiheit Nordrhein-Westfalen (
                  <a
                    href="https://www.ldi.nrw.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 underline decoration-brand-400 decoration-2 underline-offset-2 transition hover:text-brand-600"
                  >
                    www.ldi.nrw.de
                  </a>
                  ).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  8. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  „http://“ auf „https://“ wechselt, und an dem Schloss-Symbol in Ihrer
                  Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  9. Aktualität dieser Datenschutzerklärung
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2026. Durch
                  die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                  Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
