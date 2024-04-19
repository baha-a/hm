export default function Location() {
  return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold">Besuchen Sie unseren Standort</h2>
          </div>
          <div className="mt-16 lg:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <a href="https://www.google.com/maps/place/Dellbr%C3%BCcker+Hauptstra%C3%9Fe+49,+51069+K%C3%B6ln" target="_blank">
                    <img src="/images/address.png" alt="address map" className="border border-black/20 cursor-pointer rounded-lg object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" />
                  </a>

                  <div>
                      <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                          <div className="py-6">
                              <h3 className="text-lg font-bold flex gap-2 items-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                </svg>
                                Besuchen Sie uns
                              </h3>
                              <a 
                                href="https://www.google.com/maps/place/Dellbr%C3%BCcker+Hauptstra%C3%9Fe+49,+51069+K%C3%B6ln"
                                target="_blank" 
                                className="mt-1 pl-8 text-gray-700 dark:text-gray-400 hover:dark:text-white hover:dark:dark:text-black"
                              >
                                Dellbrücker Hauptstraße 49, 51069 Köln
                              </a>
                          </div>
                          <div className="border-t border-gray-200/25 py-6">
                              <h3 className="text-lg font-bold flex gap-2 items-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>

                                Öffnungszeiten
                              </h3>
                              <p className="mt-1 pl-8 text-gray-700 dark:text-gray-400">Mo.-Fr. 10-18 Uhr</p>
                              <p className="mt-1 pl-8 text-gray-700 dark:text-gray-400">Sa. 10-16 Uhr</p>
                          </div>
                          
                          <div className="border-t border-gray-200/25 py-6">
                              <h3 className="text-lg font-bold flex gap-2 items-center">
                                <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>
                                Telefon
                              </h3>
                              <a href='tel:+4917684656125' className="mt-1 pl-8 text-gray-700 dark:text-gray-400 hover:dark:text-white">
                                +49 176 84656125
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
