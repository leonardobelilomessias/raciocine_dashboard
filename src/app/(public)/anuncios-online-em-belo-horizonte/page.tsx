import React from "react";
import { FeacturesSection } from "./FeacturesSection";
import { Benneficies } from "./Benneficies";
import { Pricing } from "@/components/Pricing";
import { PricingSites } from "@/app/(public)/criacao-de-site-em-belo-horizonte/PricingSites";
import { SitesTypes } from "./SitesTypes";
import { HeroSites } from "./HeroSites";

export default  function WebDevelopmentOffer  () {
  return (
      <main>
        <HeroSites/>
        <SitesTypes/>
        {/* <Benneficies/> */}
        <FeacturesSection/>
        <PricingSites /> 
      </main>
  );
};
