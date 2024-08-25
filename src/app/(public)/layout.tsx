import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: '%s | Canp',
    default: 'Canp | Comuniade apartamento na planta',
  },
  description: "Comunidade apartamento na planta",
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
