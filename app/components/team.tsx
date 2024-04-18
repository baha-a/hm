export default function Team() {
  return (
    <>
      <div className="flex flex-wrap justify-center text-center mb-20">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-bold text-center pt-12 p-4 tracking-tight">
            Triff das Team
          </h2>
          <p className="text-lg font-light">
            Wir sind Ihre vertrauenswürdigen Partner für Komfort und Bequemlichkeit im Zuhause
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-20 justify-center">
        <Member
          name='Employee 1'
          role='Founder & Specialist'
          image='https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg'
          phone='+49 176 84656125'
        />

        <Member
          name='Employee 2'
          role='Technician'
          image='https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg'
          phone='+49 176 84656125'
        />
      </div>
    </>
  )
}


function Member({ name, role, image, phone }:{ name: string, role: string, image: string, phone: string}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
    <div className="flex flex-col">
      <a href="#" className="mx-auto">
        <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-64"
         src={image} />
      </a>

      <div className="text-center mt-6">
        <h1 className="text-xl font-bold mb-1">
          {name}
        </h1>

        <div className="font-light mb-2 text-gray-700 dark:text-gray-400">
          {role}
        </div>

        <div className="flex justify-center gap-1 opacity-70 hover:opacity-100 cursor-pointer font-light text-gray-700 dark:text-gray-400">
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
          </svg>
          <span>{phone}</span>
        </div>
      </div>
    </div>
  </div>
  )
}
