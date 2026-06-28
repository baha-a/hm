'use client';
import { useState } from 'react';

const links = [
  { label: 'Service', href: '#services' },
  { label: 'Preise', href: '#preise' },
  { label: 'Stärken', href: '#staerken' },
  { label: 'Team', href: '#team' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5">
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
          <a href="tel:+4917684656125" className="btn-primary">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
            </svg>
            Anrufen
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
              <a href="tel:+4917684656125" onClick={() => setOpen(false)} className="btn-primary w-full">
                Anrufen: +49 176 84656125
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
