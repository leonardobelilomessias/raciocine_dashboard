import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: '%s | Raciocine - Soluções em Software e Marketing Digital em Belo Horizonte',
    default: 'Raciocine | Desenvolvimento de Software e Marketing Digital em Belo Horizonte',
  },
  description: "Empresa especialista em Criação de sites, desenvolvimento de software, anuncios online, seo, social media e marketing digital em Belo Horizonte.",
  metadataBase: new URL('https://raciocine.com'),
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"  style={{paddingTop:0,marginTop:0, boxSizing: 'border-box'}}>

      <body className={inter.className}>
      <Toaster />
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
