import { Banknote, Group, GroupIcon, LucideGroup, LucideProps, PiggyBank, Users, Users2 } from "lucide-react";
import BusinessManImage2 from '@/app/assets/images/Home/trafego6.webp'

import Image, { StaticImageData } from "next/image";
import { Description } from "@radix-ui/react-toast";
import { ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes } from "react";

export const GreatOfferOne = ({title,description,data,img}:{title:string,description:string,data:DataOffer[],img:StaticImageData}) => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-22 overflow-hidden flex flex-col md:flex-row justify-items-center justify-center content-center items-center my-10"
    >
      <Image src={img} alt="Bussines Man" height={500} width={500} />
      <div className=" flex flex-col p-10 rounded-lg  items-center bg-zinc-100 max-w-[600px]">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-2  text-gray-800">{title}</p>
          <p>{description}</p>
        </div>
        <InfoIcons data={data} />
      </div>

    </section>
  );
};

interface DataOffer { icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>, value: string, label: string }
function InfoIcons({ data }: { data: { icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>, value: string, label: string }[] }) {

  return (
    <div className="flex gap-[2rem] align-center mt-10">
      {
        data.map((element) => (
          <div key={element.label}>
            <element.icon className="text-black-600" size={40} />
            <p className="text-lg md:text-2xl font-bold text-black-600">{element.value}</p>
            <p className="text-md md:text-xl font-regular text-black-600">{element.label}</p>
          </div>
        ))
      }
    </div>
  )
}
