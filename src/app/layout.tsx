import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { businessData } from "../config/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Melhor Lavajato em Anápolis | Lavajato do Paulinho",
  description: "Procurando o melhor lava rápido em Anápolis? Lavagem completa, estética automotiva, lavagem detalhada, cera e motor. Agende sua lavagem no Lavajato do Paulinho.",
  keywords: ["Melhor lavajato", "Estética automotiva Anápolis", "Lavagem de carro detalhada", "Lava rápido em Anápolis", "Lava Jato", "Lavar motor", "Lavar por baixo", "Guariba"],
  openGraph: {
    title: "Melhor Lavajato em Anápolis | Lavajato do Paulinho",
    description: "Procurando o melhor lava rápido em Anápolis? Lavagem completa, estética automotiva e lavagem detalhada.",
    images: ["/logo.jpg"],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: '/logo.jpg', // Forçando o uso da logo como favicon
    apple: '/logo.jpg'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Lavajato do Paulinho",
  "image": "https://lavajato-snowy.vercel.app/logo.jpg",
  "@id": "",
  "url": "https://lavajato-snowy.vercel.app",
  "telephone": businessData.displayPhone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Brasil Norte, 1310 - Q 22",
    "addressLocality": "Anápolis",
    "addressRegion": "GO",
    "postalCode": "75080-240",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.3267,
    "longitude": -48.9528
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$" 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
