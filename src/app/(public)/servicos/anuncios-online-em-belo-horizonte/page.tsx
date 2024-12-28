import React from "react";
import { FeacturesSection } from "./FeacturesSection";
import { Benneficies } from "./Benneficies";
import { AdsPlataforms } from "./AdsPlataforms";
import { HeroAds } from "./HeroAds";
import { Metadata } from "next";
import { GreatOffer } from "./GreatOffer";
import { AdsTracking } from "./AdsTracking";
import { NewsRepport } from "./NewsRepport";
import HowItWorks from "./HowItWorks";
import { ProductDelivery } from "./ProductDelivery";
import { ServiceTestimonials } from "./ServiceTestimonials";
import { Timer } from "./Timer";
import FaqService from "./FaqService";
export const metadata: Metadata = {
  title: 'Anúncios online em Belo Hozionte',
  keywords: "anuncios online, trafego pago, gestao de trafego, anúncios online Belo Horizonte, publicidade digital BH, marketing online BH, anúncios em Belo Horizonte, propaganda online BH"
};
export default function WebDevelopmentOffer() {
  return (
    <section>
      <HeroAds />
      <GreatOffer />
      <NewsRepport />
      <AdsPlataforms />
      {/* <Benneficies/> */}
      <HowItWorks />
      <AdsTracking />
      <FeacturesSection />
      <ProductDelivery />
      <Timer/>
      <ServiceTestimonials/>
      <FaqService/>
    </section>
  );
};

