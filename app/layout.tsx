import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Dellbrück Haushaltsgeräte – Geräte, Lieferung & Service in Köln",
  description:
    "Hochwertige, geprüfte Haushaltsgeräte in Köln – inklusive Lieferung, Anschluss, Montage und Reparatur. Namhafte Hersteller wie Miele, Bosch, Siemens & AEG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
