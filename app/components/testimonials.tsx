export default function Testimonials() {
  return <>

    <div className="flex flex-wrap justify-center text-center pb-8">

      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center pt-12 pb-4 tracking-tight">Referenzen</h2>
      </div>

      <div className="w-full flex flex-col gap-4 justify-center items-center mt-8">

        <Quate
          content='"Ich brauchte dringend eine neue und günstige Waschmaschine, welche ich auch direkt gefunden habe. Die Lieferung erfolgte sogar noch am gleichen Tag! Die Jungs sind super lieb und sehr kompetent. Ich habe eine einwandfreie generalüberholte Waschmaschine zum kleinen Preis erworben. Gerne wieder!"'
          author="Jessica M"
          link="https://g.co/kgs/YNKVx4c"
          profileColor="#ab47bc"
        />

        <Quate
          content='"Sehr nette und zuverlässige Mitarbeiter die mir innerhalb von 24h wegen meiner Spülmaschine geholfen haben. Ehrliche Einschätzungen , für kleines Geld sind heute viel wert . Meine neue Spülmaschine habe ich günstig kaufen können. Die wurde geliefert, montiert und die alte sogar mitgenommen. Das alles innerhalb von 3 Tagen ! Kann ich nur weiter empfehlen. Auch für kleine Reparaturen ist sich hier keiner zu schade ! Top 👍"'
          author="Sina L"
          link="https://g.co/kgs/wN5bhMH"
          profileColor="#8d6e63"
        />

        <Quate
          content='"Unsere Spülmaschine ist plötzlich kaputt gegangen. Wir haben tatsächlich am gleichen Abend pünktlich noch die gewünschte Maschine eingebaut und geliefert bekommen. Und das zu einem unfassbar fairen und guten Preis. Top Service. Monteure waren sehr freundlich. Alles zu unserer Zufriedenheit! Alte Spülmaschine wurde wie gewünscht entsorgt. Jederzeit wieder!"'
          author="Adnan Mulic"
          link="https://g.co/kgs/5qCjMwM"
          profileColor="#7e57c2"
        />

        <Quate
          content='"Heute Wachmaschine und Spülmaschine gekauft. Trotz 2. Hand Ware, Zustand wie neu und zu sehr fairen Preisen. Sehr nettes Personal. Nur zu empfehlen!"'
          author="Ned Rashk"
          link="https://g.co/kgs/7Vs4bfY"
          profileColor="#ec407a"
        />

        <Quate
          content='"Freundlich, zuverlässig und schnell. Bin hochzufrieden mit dem Kontakt, der zeitnahen Lieferung und dem schnellen Einbau einer Spülmaschine!! Kann ich zu 100% weiterempfehlen!!"'
          author="Renate Dorfeld"
          link="https://g.co/kgs/w2KffME"
          profileColor="#5c6bc0"
        />

        <Quate
          content='"Guter Service Faire Preise und flexibel bei Lieferungen Seh Schnelle saubere Arbeit kann man nur weiter empfehlen auch Reparaturen sind kein Problem"'
          author="Anna Foehlisch"
          link="https://g.co/kgs/vHwRmoC"
          profileColor="#455a64"
        />

        <Quate
          content='"Zuverlässiger Service und freundliche Mitarbeiter."'
          author="Farhad Bilal"
          link="https://g.co/kgs/ksMiYBL"
          profileColor="#78909c"
        />

        <Quate
          content='"Ich muss sagen die sind wirklich super Villen dank."'
          author="Ilijana Getos"
          link="https://g.co/kgs/qnHyYuq"
          profileColor="#0088d1"
        />

        <div className="flex gap-4">
          <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>

          <svg className="w-6 h-6 cursor-pointer " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  </>
}

function Quate({
  content,
  author,
  link,
  profileColor = 'bg-black',
}: {
  content: string,
  author: string,
  link?: string,
  profileColor?: string,
}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 w-full md:w-fit md:rounded-lg">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-16">
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-500" viewBox="0 0 24 27" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"></path>
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-xl dark:text-white italic">{content}</p>
          </blockquote>
          <figcaption className="flex justify-between items-baseline">
            <FiveStars />
            <div className="flex justify-between items-center mt-6 space-x-3">
              <div className="w-8 h-8 rounded-full text-white text-center font-bold pt-1" style={{ backgroundColor: profileColor }}>
                {author.at(0)?.toUpperCase()}
              </div>

              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">{author}</div>
                <a href={link} target="_blank" className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 underline">
                  Quelle
                </a>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}


function FiveStars() {
  return (
    <div className="flex items-center justify-center my-5">
      <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">von</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
  )
}
