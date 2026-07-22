import Link from "next/link";
const footerLinks = [
  { label: "Service", href: "/#services" },
  { label: "Preise", href: "/#preise" },
  { label: "Team", href: "/#team" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <Link href="/#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900">
              <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -11 14.75 13">
                <path d="M 0 -1 L 3 -1 L 3 2 L 0 2 L 0 -1 M 0 -2 L 0 -5 L 7 -5 L 7 2 L 4 2 L 4 -2 L 0 -2 M 0 -6 L 3 -6 L 3 -8 L 8 -8 L 8 -11 L 2 -11 L 0 -11 L 0 -6 M 8 -11 C 17 -11 17 2 8 2 L 8 -1 C 13 -1 13 -8 8 -8 Z" fill="#FBBF24" />
              </svg>
            </span>
            <span className="text-base font-bold tracking-tight text-gray-900">
              Dellbrück <span className="font-medium text-gray-500">Haushaltsgeräte</span>
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-gray-900">{l.label}</a>
              </li>
            ))}
            <li><a href="/datenschutz" className="transition hover:text-gray-900">Datenschutz</a></li>
            <li><a href="/impressum" className="transition hover:text-gray-900">Impressum</a></li>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <span>© 2026 Dellbrück Haushaltsgeräte · Bergisch Gladbacher Str. 595, Köln</span>
          <span>
            Erstellt von{" "}
            <a href="https://github.com/baha-a" target="_blank" className="font-medium text-gray-700 transition hover:text-gray-900">
              baha-a
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
