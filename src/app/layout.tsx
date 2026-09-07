import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { businessData } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
const siteUrl = "https://lavajato-snowy.vercel.app";
const title = "Lavajato do Paulinho | Lavagem de carro em Anápolis";
const description = `Lavajato em Anápolis, no Cidade Jardim. Carros a partir de R$${businessData.prices.car}, SUVs e caminhonetes a partir de R$${businessData.prices.suv}. Confira os serviços e agende pelo WhatsApp.`;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: [
    "lavajato em Anápolis",
    "lava jato Anápolis",
    "lavagem automotiva",
    "lavagem de carro Anápolis",
    "lavagem de SUV Anápolis",
    "Cidade Jardim",
    "Lavajato do Paulinho",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: businessData.name,
    images: [
      {
        url: "/images/hero-1536.webp",
        width: 1536,
        height: 1024,
        alt: "Lavajato do Paulinho, imagem ilustrativa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-1536.webp"],
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};
export const viewport: Viewport = {
  themeColor: "#080b0d",
  width: "device-width",
  initialScale: 1,
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "@id": `${siteUrl}/#lavajato`,
  name: businessData.name,
  image: `${siteUrl}/logo.jpg`,
  url: siteUrl,
  telephone: `+${businessData.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Brasil Norte, 1310 - Q 22 - Cidade Jardim",
    addressLocality: "Anápolis",
    addressRegion: "GO",
    postalCode: "75080-240",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Anápolis" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lavagens e adicionais",
    itemListElement: [
      {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: businessData.prices.car,
          priceCurrency: "BRL",
        },
        itemOffered: {
          "@type": "Service",
          name: "Lavagem de carros de passeio",
        },
      },
      {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: businessData.prices.suv,
          priceCurrency: "BRL",
        },
        itemOffered: {
          "@type": "Service",
          name: "Lavagem de SUVs e caminhonetes",
        },
      },
      {
        "@type": "Offer",
        price: businessData.prices.wax,
        priceCurrency: "BRL",
        itemOffered: {
          "@type": "Service",
          name: "Adicional opcional de cera em pasta",
        },
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
