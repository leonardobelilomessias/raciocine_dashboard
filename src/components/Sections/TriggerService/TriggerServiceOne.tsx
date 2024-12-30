import { Banknote, Group, GroupIcon, LucideGroup, PiggyBank, Users, Users2 } from "lucide-react";
import AdstrackingImage from '@/app/assets/images/services/ads/adstracking.webp'

import Image, { StaticImageData } from "next/image";

export const TriggerServiceOne = ({img, title,description,link}:{img:StaticImageData,title:string,description:string,link:string}) => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-22 overflow-hidden flex flex-col md:flex-row justify-items-center justify-center content-center items-center my-10"
    >
      <Image src={img} alt="Bussines Man" height={500} width={500}/>
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

