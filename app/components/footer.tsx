export default function Footer() {
  return (
    <>


      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -11 14.75 13">
                <path d="M 0 -1 L 3 -1 L 3 2 L 0 2 L 0 -1 M 0 -2 L 0 -5 L 7 -5 L 7 2 L 4 2 L 4 -2 L 0 -2 M 0 -6 L 3 -6 L 3 -8 L 8 -8 L 8 -11 L 2 -11 L 0 -11 L 0 -6 M 8 -11 C 17 -11 17 2 8 2 L 8 -1 C 13 -1 13 -8 8 -8 Z" fill="#FFCC00" />
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dellbrück Haushaltsgeräte</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Über uns</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Datenschutzerklärung</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Kontakt</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:mt-24 lg:mb-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 by <a href="https://github.com/baha-a" target="_blank" className="hover:underline">baha-a</a></span>
        </div>
      </footer>
    </>
  )
}
