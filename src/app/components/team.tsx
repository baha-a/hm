export default function Team() {
  return (
    <section id="team">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Triff das Team</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Die Menschen hinter dem Service
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Wir sind Ihre vertrauenswürdigen Partner für Komfort und Bequemlichkeit im Zuhause.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-8">
        <Member
          name="Ibrahim"
          role="Eigentümer"
          image="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
          phone="+49 176 84656125"
        />
        <Member
          name="Ayad"
          role="Eigentümer"
          image="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
          phone="+49 176 84656125"
        />
      </div>
    </section>
  );
}

function Member({ name, role, image, phone }: { name: string; role: string; image: string; phone: string }) {
  return (
    <div className="card w-full max-w-xs p-6 text-center hover:-translate-y-1 hover:shadow-lift">
      <img
        className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-brand-100"
        src={image}
        alt={name}
      />
      <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-900">{name}</h3>
      <p className="text-sm font-medium text-brand-600">{role}</p>
      <a
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
      >
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
        </svg>
        {phone}
      </a>
    </div>
  );
}
