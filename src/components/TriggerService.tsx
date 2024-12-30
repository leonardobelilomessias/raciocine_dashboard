import { Banknote, Group, GroupIcon, LucideGroup, PiggyBank, Users, Users2 } from "lucide-react";
import AdstrackingImage from '@/app/assets/images/services/ads/adstracking.webp'

import Image, { StaticImageData } from "next/image";

export const TriggerService = ({img, title,description,link}:{img:StaticImageData,title:string,description:string,link:string}) => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-22 overflow-hidden flex flex-col md:flex-row-reverse md:flex-row justify-items-center justify-center content-center items-center my-10"
    >
      <Image loading="lazy" src={AdstrackingImage} alt="Bussines Man" height={500} width={500}/>
      <div className=" flex flex-col p-10 rounded-lg  items-center bg-zinc-100 max-w-[600px]">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2  text-gray-800">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
          {/* <InfoIcons/> */}
      </div>
      
    </section>
  );
};

function InfoIcons(){
  return(
    <div className="flex gap-[2rem] align-center mt-10">

        <div>
          <Users2 className="text-black-600" size={40}/>
          <p  className="text-lg md:text-2xl font-bold text-black-600">639K</p>
          <p className="text-md md:text-xl font-regular text-black-600">Novos Leads</p>
        </div>
        <div>
          <PiggyBank className="text-black-600" size={40}/>
          <p className="text-lg md:text-2xl font-bold text-black-600">96%</p>
          <p className="text-md md:text-xl font-regular text-black-600">Menos Custos</p>
        </div>
        <div>
        <Banknote className="text-black-600" size={40} />
          <p className="text-lg md:text-2xl font-bold text-black-600">236% </p>
          <p className="text-md md:text-xl font-regular text-black-600">Mais Vendas</p>
        </div>
      </div>
  )
}