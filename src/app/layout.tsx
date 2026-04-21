import type { Metadata } from "next";
import { Overpass, Roboto } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const overpass = Overpass({ subsets: ["latin"], variable: "--font-overpass", display: "swap" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AniFinder",
    template: "%s | AniFinder",
  },
  description: "Descubra anime com busca e filtros usando o catálogo Kitsu.",
  openGraph: {
    title: "AniFinder",
    description: "Descubra anime com busca e filtros usando o catálogo Kitsu.",
    url: siteUrl,
    siteName: "AniFinder",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AniFinder",
    description: "Descubra anime com busca e filtros usando o catálogo Kitsu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${overpass.variable} ${roboto.variable} min-h-screen overflow-x-hidden bg-gradient-to-br from-[#e8edf4] via-[#dce5f0] to-[#e2e9f2] bg-fixed font-[family-name:var(--font-overpass)] text-slate-900 antialiased`}
      >
        <Providers>
          <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
