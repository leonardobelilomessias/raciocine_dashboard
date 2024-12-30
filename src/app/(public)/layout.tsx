import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

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
    <html lang="pt-BR"  style={{paddingTop:0,marginTop:0, boxSizing: 'border-box'}}>
            <head>

        <meta name="facebook-domain-verification" content="sofmw23mr36z94i6ffw62rlw3xc3x8" />
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700|Poppins:400,500,600,700|Rubik:400,500,600,700|Inter:wght@300;400;500;600;700;800|Roboto:wght@300;400;500;700&display=swap" />

      </head>
      <body className={inter.className}>
      <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSHNKBQH" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <Toaster />
      <Navbar/>
        {children}
        <Footer/>
        <Script  strategy="afterInteractive" id="google-tag-manager" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MSHNKBQH');`}}/>
        </body>
    </html>
  );
}
