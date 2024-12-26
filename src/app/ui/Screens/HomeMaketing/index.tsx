import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import LocationMap from "@/components/LocationMap";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export function HomeMarketing(){
    return(    
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Results/>
      <Features />
      <HowItWorks />
      <Testimonials />
      <About />
      <Services />
      <Cta />
      {/* <Team />
      <Pricing /> */}
      <LocationMap/>
      <Newsletter />
      <Footer />
      <ScrollToTop />

    </>
    )
}