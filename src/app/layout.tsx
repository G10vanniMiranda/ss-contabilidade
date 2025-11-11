import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SS Contabilidade",
  description: "Escritorio de Contabilidade especialista em Importação",
  metadataBase: new URL("https://www.contabilidadess.com.br"),
  openGraph: {
    title: "SS Contabilidade",
    description: "Escritório de Contabilidade especialista em incentivos fiscais, créditos tributários e consultoria.",
    url: "https://www.contabilidadess.com.br",
    siteName: "SS Contabilidade",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Contabilidade",
    description: "Incentivos fiscais, créditos tributários e consultoria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-brandGray-600 text-white`}>
        <Menu />
        <main className="pt-20 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
