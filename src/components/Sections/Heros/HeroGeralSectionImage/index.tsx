
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import robotHero from '@/app/assets/images/Home/robotHero.webp'
import Image, { StaticImageData } from "next/image";
import { TitleHero } from "./TitleHero";

export const HeroGeralSectionImage = ({ title, highlightPink, highlightBlue ,description, img}: { title: string, highlightPink: string, highlightBlue: string,description:string,img:StaticImageData }) => {

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-6 md:py-30 gap-10 ">
      <ImageBackground />
      <div className="text-center lg:text-start space-y-6 z-10">
        <TitleHero highlightBlue={highlightBlue} title={title} highlightPink={highlightPink} />
        <ImageHeroMobile img={img} />
        <p>{description}</p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link className="w-full flex gap-2  border-[1px] p-2 rounded border-black text-center text-white bg-black items-center align-center justify-center"
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de anúncios online.">
            <FaWhatsapp size={24} />
            Chamar no Whatsapp
          </Link>
          <Link className="w-full border-[1px] p-2 rounded border-black text-center" href={'/consultoria-digital-em-belo-horizonte'}>
            Solicitar consultoria (Gratis)
          </Link>
        </div>
      </div>
      <div className="z-10">
        <ImageHero img={img}/>
      </div>
    </section>
  );
};

function ImageHero({img}:{img:StaticImageData}) {
  return (<Image className="hidden md:block" src={img} alt="image hero" width={500} height={500} />)
}
function ImageHeroMobile({img}:{img:StaticImageData}) {
  return (<Image className="md:hidden" src={img} alt="image hero" width={600} height={600} />)
}

function ImageBackground() {
  return (
    <Image src={robotHero}
      alt="logo raciocine"
      className="absolute right-40 top-10 opacity-[6%] z-0 md:opacity-5" />
  )
}



