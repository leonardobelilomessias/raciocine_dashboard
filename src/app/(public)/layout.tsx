import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: '%s | Canp',
    default: 'Raciocine | Desenvolvimento de Software e Marketing Digital em Belo Horizonte',
  },
  description: "Empresa especialista em Criação de sites, desenvolvimento de software, anuncios online, seo, social media e marketing digital em Belo Horizonte.",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  
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
        {children}
        </body>
    </html>
  );
}
