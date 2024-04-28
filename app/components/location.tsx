export default function Location() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold">Besuchen Sie unseren Standort</h2>
      </div>
      <div className="mt-16 lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <a href="https://maps.app.goo.gl/h76gkPCjhokxwnrp7" target="_blank" className="relative">
            <img src="/images/address-dark.png" alt="address map" className="border border-black/20 cursor-pointer rounded-lg object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 opacity-0 dark:opacity-100 absolute" />
            <img src="/images/address.png" alt="address map" className="border border-black/20 cursor-pointer rounded-lg object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 dark:hidden" />
          </a>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="py-4">
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                  </svg>
                  Besuchen Sie uns
                </h3>
                <a
                  href="https://maps.app.goo.gl/h76gkPCjhokxwnrp7"
                  target="_blank"
                  className="mt-1 pl-8 text-gray-700 dark:text-gray-400 hover:dark:text-white hover:dark:dark:text-black"
                >
                  Dellbrücker Hauptstraße 49, 51069 Köln
                </a>
              </div>
              <div className="border-t border-dashed border-gray-200/25 py-4">
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Öffnungszeiten
                </h3>
                <p className="mt-1 pl-8 text-gray-700 dark:text-gray-400">Mo.-Fr. 10-18 Uhr</p>
                <p className="mt-1 pl-8 text-gray-700 dark:text-gray-400">Sa. 10-16 Uhr</p>
              </div>
              <div className="border-t border-dashed border-gray-200/25 py-4">
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z" />
                  </svg>
                  Mail
                </h3>
                <a href='mailto:info@dellbruck.de' className="mt-1 pl-8 text-gray-700 dark:text-gray-400 hover:dark:text-white">
                  info@dellbruck.de
                </a>
              </div>
              <div className="border-t border-dashed border-gray-200/25 py-4">
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                  </svg>
                  Telefon
                </h3>
                <a href='tel:+4917684656125' className="mt-1 pl-8 text-gray-700 dark:text-gray-400 hover:dark:text-white">
                  +49 176 84656125
                </a>
              </div>
              <div className="border-t border-dashed border-gray-200/25 py-4">
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Folgen Sie uns
                </h3>
                <div className="flex gap-6 mt-2 pl-8">
                  <a href="https://www.facebook.com/profile.php?id=61552172319852" target="_blank" className="shadow-lg cursor-pointer rounded bg-blue-600 pl-1 opacity-70 dark:opacity-50 hover:opacity-100">
                    <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/dellbruckhaushaltsgerate/" target="_blank" className="shadow-lg cursor-pointer rounded bg-red-500 opacity-70 dark:opacity-50 px-0.5 hover:opacity-100">
                    <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://kleinanzeigen.de/s-bestandsliste.html?userId=134640071" target="_blank" className="shadow-lg cursor-pointer rounded bg-green-600 py-1 px-2.5 opacity-70 dark:opacity-50 hover:opacity-100">
                    <img className="h-6" src="https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg" alt="ebay link" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
