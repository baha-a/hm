export default function Prices() {
  return (
    <>
      <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-bold text-center pt-12 pb-4 tracking-tight">Unsere Preise</h2>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 px-20 md:px-10 lg:px-40">
        <h3>Lieferservice</h3>
        <ul>
          <li>Anlieferung in Köln€ 39,00</li>
          <li>bis zur 3. Etage (erstes Gerät)</li>
          <li>Jedes weitere Gerät+ € 19,00</li>
          <li>Ab der 4. Etagezzgl. € 10,00ohne Aufzug</li>
          <li>Herd Anlieferung inkl. Anschluss€ 59,00 in Köln</li>
          <li>Anlieferungab € 49,00 außerhalb von Köln</li>
          <li>Altgeräteentsorgung€ 10,00</li>
        </ul>

        <h3>Premium Lieferservice</h3>
        <ul>
          <li>Waschmaschine€ 69,00 inkl. Anschluss</li>
          <li>Spülmaschineab € 79,00 inkl. Anschluss und Montage</li>
          <li>Einbauherdset€ 99,00 inkl.    Anschluss und Montage</li>
          <li>Einbaukühlschrank€ 99,00 inkl. Montage, Altgerätemitnahme kostenfrei</li>
          <li>Jedes weitere Gerät+ € 49,00</li>
        </ul>
      </div>
    </div>
    </>
  )
}
