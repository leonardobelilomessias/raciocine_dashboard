
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import LogoBrain from '@/app/assets/logos/brain_logo.webp'
import Image, { StaticImageData } from "next/image";
import { TitleHero } from "./TitleHero";

export const HeroGeralSectionVideo = ({ title, highlightPink, highlightBlue,description }: { title: string, highlightPink: string, highlightBlue: string ,description:string}) => {

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-6 md:py-30 gap-10 ">
      <ImageBacground/>
      <div className="text-center lg:text-start space-y-6 z-10">
      <TitleHero highlightBlue={highlightBlue} title={title} highlightPink={highlightPink} />

        <VideoHeroMobile/>
        <p>{description}</p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            className="w-full flex gap-2  border-[1px] p-2 rounded border-black text-center text-white bg-black items-center align-center justify-center"
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços."
          >
            <FaWhatsapp size={24}/>
            Chamar no Whatsapp 
          </Link>
          <Link
            className="w-full  border-[1px] p-2 rounded border-black text-center"
            href={'/consultoria-digital-em-belo-horizonte'}
          >
            Solicitar consultoria (Gratis)
          </Link>
        </div>
      </div>
      <div className="z-10">
      <VideoHero/>
      </div>
    </section>
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
