import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LogoBrain from '@/app/assets/logos/brain_logo.webp'
import robotHero from '@/app/assets/images/Home/robotHero.webp'

import Image from "next/image";

export const HeroHomeSectionImage = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-6 md:py-30 gap-10 ">
      <ImageBacground/>
      <div className="text-center lg:text-start space-y-6 z-10">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            Especialistas em&nbsp; &#10;
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Software
            </span>{" "}
          </h1>{" "}
          e{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#0064e9] text-transparent bg-clip-text">
              Marketing Digital
            </span>{" "} em Belo Horizonte, Minas Gerais.
          </h2>
        </main>
        <ImageHeroMobile/>
        <p>Transforme seu negócio com estratégias de <strong>software</strong>  e <strong>Marketing Digital em Belo Horizonte</strong>. Ajudamos empresas mineiras a alcançar mais clientes e expandir sua presença online.</p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            className="w-full flex gap-2  border-[1px] p-2 rounded border-black text-center text-white bg-black items-center align-center justify-center"
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços."
          >
            <FaWhatsapp size={24}/>
            Chamar no Whatsapp 
          </Link>
          <Link
            className="w-full border-[1px] p-2 rounded border-black text-center"
            href={'/consultoria-digital-em-belo-horizonte'}
          >
            Solicitar consultoria (Gratis)
          </Link>
        </div>
      </div>
      <div className="z-10">
      <ImageHero/>
      </div>
    </section>
  );
};

function ImageHero(){
  return(
    <Image className="hidden md:block" src={robotHero} alt="image hero" width={500} height={500}/>
  )
}
function ImageHeroMobile(){
  return(
    <Image className="md:hidden" src={robotHero} alt="image hero" width={600} height={600}/>
  )
}

function ImageBacground(){
  return(
  <Image src={robotHero}
     alt="logo raciocine" 
     className="absolute right-40 top-10 opacity-[6%] z-0 md:opacity-5"/>
    )
}
