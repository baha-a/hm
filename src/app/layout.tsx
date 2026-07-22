import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Dellbrück Haushaltsgeräte – Geräte, Lieferung & Service in Köln",
  description:
    "Hochwertige, geprüfte Haushaltsgeräte in Köln – inklusive Lieferung, Anschluss, Montage und Reparatur. Namhafte Hersteller wie Miele, Bosch, Siemens & AEG.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-gray-900 antialiased`}>
        <Navbar />
        <main className="container-page py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
