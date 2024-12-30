
import DiarioLogo from '@/app/assets/logos/news/logo-diario-comercio.webp'
import G1Logo from '@/app/assets/logos/news/logo-g1.webp'
import TempoLogo from '@/app/assets/logos/news/logo-tempo.webp'
import NewsImage from '@/app/assets/logos/news/noticia.webp'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type dataNewsTypes= {
  title: string;
  description: string;
  font: string;
  link: string;
  img: StaticImageData;
}[]
export const NewsRepportOne = ({title,description,data,cover,reverse}:{title:string,description:string,data:dataNewsTypes,cover:StaticImageData,reverse?:boolean}) => {

  return (
    <section
      id="sponsors"
      className={` container my-32 sm:py-30 overflow-hidden flex flex-col md:flex-row justify-items-center justify-center content-center items-center  ${reverse===true? "flex-row-reverse":""} `}
    >

      <Image  src={cover} alt="Bussines Man" height={500} width={500}/>

      <div className=" bg-blue-600 flex flex-col p-10   items-center max-w-[600px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2  text-white">{title}</h2>
          <div className="flex flex-col gap-8">
            {
              data.map((item)=>(
                <div key={item.title} className="flex flex-col md:flex-row   md:gap-4">
                <Image className='rounded-full border-4 border-blue-900' src={item.img} alt="example" width={110} height={110}/>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-white text-sm">{item.description}</p>
                  <h4 className="text-white text-sm underline">Link da Fonte: <Link href={item.link}>{item.font}</Link></h4>
                </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};