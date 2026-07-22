'use client';
import { useState } from 'react';

const links = [
  { label: 'Service', href: '/#services' },
  { label: 'Preise', href: '/#preise' },
  { label: 'Stärken', href: '/#staerken' },
  { label: 'Team', href: '/#team' },
  { label: 'Kontakt', href: '/#kontakt' },
];

const Logo = () => (
  <a href="/#top" className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900">
      <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -11 14.75 13">
        <path d="M 0 -1 L 3 -1 L 3 2 L 0 2 L 0 -1 M 0 -2 L 0 -5 L 7 -5 L 7 2 L 4 2 L 4 -2 L 0 -2 M 0 -6 L 3 -6 L 3 -8 L 8 -8 L 8 -11 L 2 -11 L 0 -11 L 0 -6 M 8 -11 C 17 -11 17 2 8 2 L 8 -1 C 13 -1 13 -8 8 -8 Z" fill="#FBBF24" />
      </svg>
    </span>
    <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900">
      Dellbrück <span className="font-medium text-gray-500">Haushaltsgeräte</span>
    </span>
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-stone-50/80 backdrop-blur supports-[backdrop-filter]:bg-stone-50/70">
      <nav className="container-page flex items-center justify-between py-3.5">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="https://wa.me/4917684656125"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group w-full"

          >
            <svg className="h-6 w-6 group-hover:fill-green-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.94L2 22l5.2-1.36A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.87 14.16c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.05.22-.24.65-.76.83-.97.18-.21.35-.17.6-.1.24.08 1.53.72 1.79.85.26.13.44.2.5.31.06.11.06.65-.18 1.34Z" />
            </svg>
            <span>
              Anrufen
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-expanded={open}
          aria-label="Menü öffnen"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200/70 bg-stone-50 md:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-base font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-2 pt-2">
              <a
                href="https://wa.me/4917684656125"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full"

              >
                <svg className="h-8 w-8 group-hover:fill-green-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.94L2 22l5.2-1.36A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.87 14.16c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.05.22-.24.65-.76.83-.97.18-.21.35-.17.6-.1.24.08 1.53.72 1.79.85.26.13.44.2.5.31.06.11.06.65-.18 1.34Z" />
                </svg>
                <span className="text-lg">
                  +49 176 84656125
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
