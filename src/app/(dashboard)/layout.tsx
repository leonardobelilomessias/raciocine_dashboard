import { Navbar } from "@/components/Navbar"

import "../globals.css";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { NavbarDashboard } from "../ui/Screens/DashboarScreen/NavbarDashboard/NavbarDashboard";
import { Footer } from "@/components/Footer";
import { AsideDashBoard } from "../ui/components/AsideDashboard";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { inter, nunito } from "../ui/fonts";


export const metadata: Metadata = {
  title: {
    template: '%s | Canp',
    default: 'canp Dashboard',
  },
  description: "Comunidade apartamento na planta",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const classAside=[]
  

  return (
    <html lang="pt-br"  style={{paddingTop:0,marginTop:0, boxSizing: 'border-box'}}>

      <body className={`${inter.className} antialiased`}>
      <main>
          <div>
            <NavbarDashboard/>
          <div >

          <AsideDashBoard/>
            <section className="relative md:left-[15%] md:w-[85%]" >
            {children}
            <Toaster />
            <div className="mt-40">

              <Footer/>
            </div>
            </section>
      </div>
    </div>
      </main>
        </body>
    </html>
  )
}
