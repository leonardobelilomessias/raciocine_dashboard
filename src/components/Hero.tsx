import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LogoBrain from '@/app/assets/logos/brain_logo.webp'
import Image from "next/image";
import { HeroHomeSectionVideo } from "./HeroHomeSectionVideo";
import { HeroHomeSectionImage } from "./HeroHomeSectionImage";

export const Hero = () => {
  return (
   <HeroHomeSectionImage/>
  );
};

function VideoHero(){
  return(
    <iframe
    className="w-[320px] hidden sm:flex h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px]"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
  )
}
function VideoHeroMobile(){
  return(
    <iframe
    className="w-[320px] md:hidden h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px]"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
  )
}

function ImageBacground(){
  return(
  <Image src={LogoBrain}
     alt="logo raciocine" 
     className="absolute right-40 top-10 opacity-[6%] z-0 md:opacity-20"/>
    )
}
