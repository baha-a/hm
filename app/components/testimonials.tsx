'use client';
import { useRef } from 'react';

const reviews = [
  { content: 'Ich brauchte dringend eine neue und günstige Waschmaschine, welche ich auch direkt gefunden habe. Die Lieferung erfolgte sogar noch am gleichen Tag! Die Jungs sind super lieb und sehr kompetent. Ich habe eine einwandfreie generalüberholte Waschmaschine zum kleinen Preis erworben. Gerne wieder!', author: 'Jessica M', link: 'https://g.co/kgs/YNKVx4c', profileColor: '#ab47bc', date: '02-2024' },
  { content: 'Sehr nette und zuverlässige Mitarbeiter, die mir innerhalb von 24h wegen meiner Spülmaschine geholfen haben. Ehrliche Einschätzungen für kleines Geld sind heute viel wert. Geliefert, montiert und die alte sogar mitgenommen – alles innerhalb von 3 Tagen! Kann ich nur weiterempfehlen.', author: 'Sina L', link: 'https://g.co/kgs/wN5bhMH', profileColor: '#8d6e63', date: '10-2023' },
  { content: 'Unsere Spülmaschine ist plötzlich kaputt gegangen. Wir haben am gleichen Abend pünktlich die gewünschte Maschine eingebaut und geliefert bekommen. Und das zu einem unfassbar fairen Preis. Top Service, sehr freundliche Monteure. Alte Spülmaschine wurde wie gewünscht entsorgt. Jederzeit wieder!', author: 'Adnan Mulic', link: 'https://g.co/kgs/5qCjMwM', profileColor: '#7e57c2', date: '10-2023' },
  { content: 'Heute Waschmaschine und Spülmaschine gekauft. Trotz 2.-Hand-Ware Zustand wie neu und zu sehr fairen Preisen. Sehr nettes Personal. Nur zu empfehlen!', author: 'Ned Rashk', link: 'https://g.co/kgs/7Vs4bfY', profileColor: '#ec407a', date: '10-2023' },
  { content: 'Freundlich, zuverlässig und schnell. Bin hochzufrieden mit dem Kontakt, der zeitnahen Lieferung und dem schnellen Einbau einer Spülmaschine! Kann ich zu 100% weiterempfehlen!', author: 'Renate Dorfeld', link: 'https://g.co/kgs/w2KffME', profileColor: '#5c6bc0', date: '10-2023' },
  { content: 'Guter Service, faire Preise und flexibel bei Lieferungen. Sehr schnelle, saubere Arbeit – kann man nur weiterempfehlen. Auch Reparaturen sind kein Problem.', author: 'Anna Foehlisch', link: 'https://g.co/kgs/vHwRmoC', profileColor: '#455a64', date: '10-2023' },
  { content: 'Zuverlässiger Service und freundliche Mitarbeiter.', author: 'Farhad Bilal', link: 'https://g.co/kgs/ksMiYBL', profileColor: '#78909c', date: '01-2024' },
  { content: 'Ich muss sagen, die sind wirklich super. Vielen Dank!', author: 'Ilijana Getos', link: 'https://g.co/kgs/qnHyYuq', profileColor: '#0088d1', date: '04-2024' },
];

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: 'smooth' });
  };

  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl text-center sm:text-left">
          <p className="eyebrow">Referenzen</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Echte Google-Bewertungen – Durchschnitt 5 von 5 Sternen.
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scrollBy(-1)} aria-label="Zurück" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
          </button>
          <button onClick={() => scrollBy(1)} aria-label="Weiter" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <Quote key={r.author} {...r} />
        ))}
      </div>
    </section>
  );
}

function Quote({
  content,
  author,
  link,
  profileColor,
  date,
}: {
  content: string;
  author: string;
  link?: string;
  profileColor: string;
  date: string;
}) {
  return (
    <figure className="card flex w-[320px] flex-none snap-center flex-col p-6 sm:w-[360px]">
      <FiveStars />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
        “{content}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
        <div
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: profileColor }}
        >
          {author.at(0)?.toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">{author}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{date}</span>
            {link && (
              <a href={link} target="_blank" className="underline hover:text-gray-700">
                Quelle
              </a>
            )}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function FiveStars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-brand-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  );
}
