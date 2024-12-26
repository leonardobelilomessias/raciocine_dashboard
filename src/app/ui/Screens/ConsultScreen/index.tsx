import Image from "next/image";
import { FormConsult } from "./FormConsult";
import Link from "next/link";
import HeroSingup from '@/app/public/images/herosingup.jpg'
import ConsultImage from '@/app/assets/images/Home/consult-image.png'
import ConsultImage2 from '@/app/assets/images/Home/consult-image2.png'


export function ConsultScreen(){
    return(
        <>
        <div className="flex flex-row h-full h-screen ">
            <div className="  w-screen hidden md:flex flex-1    h-50 content-center relative">
            <Image alt="real estate"  fill  style={{objectFit: "cover"}}    src={ConsultImage2}/>
            </div>
            <div className="flex gap-4 w-[70%] content-center  justify-items-center items-center flex-1 h-200 mt-20 flex-col ">
                <div className=" flex flex-col w-[70%] ">
                    <h1 className="font-bold text-3xl text-center  ">Consultoria Digital Gratuita.</h1>
                    <p className="text-center" >Preencha o formulário e nós entraremos em contato para fazer o processo de analise do seu nogócio.</p>
                </div>
                <div className="  w-[70%] ">
                    <FormConsult/>

                </div>
        <Link  className="w-[70%] mt-6  text-center border-[1px] p-2 rounded border-black " href={'/'}   >Voltar para pagina incial</Link>
            </div>
        </div>
        </>
    )
}