import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Lavajato do Paulinho | Experiência Premium",
  description: "Lavagem detalhada de carros a partir de R$ 50. Cuidado automotivo, brilho absoluto e precisão técnica em Anápolis - GO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${oswald.variable}`}>
      <body className="antialiased bg-slate-950 text-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
