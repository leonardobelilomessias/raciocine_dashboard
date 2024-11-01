import Image from "next/image";
import { FormSignup } from "./FormSignup";
import Link from "next/link";
import HeroSingup from '@/app/public/images/herosingup.jpg'
export function SingUpScreen(){
    return(
        <>
        <div className="flex flex-row h-full h-screen ">
            <div className="  w-screen flex flex-1    h-50 content-center relative">
            <Image alt="real estate"  fill  style={{objectFit: "fill"}}    src={HeroSingup}/>
            </div>
            <div className="flex gap-4 w-[70%] content-center  justify-items-center items-center flex-1 h-200 mt-20 flex-col ">
                <div className=" flex flex-col w-[70%] ">
                    <h1 className="font-bold text-3xl text-center  ">Participe da maior comunidade focada em aquisição de imoveis na planta.</h1>
                    <p className="text-center" >Se increva e mergulhe no incrivel mercado de imoeveis na plnara. Você pode trilhar um caminho de aprendizado e 
                        suporte na sua hornada de aquisição, atraves de videos, foruns , e conteudos exclusivos.</p>
                </div>
                <div className="  w-[70%] ">
                    <FormSignup/>

                </div>
        <Link  className="w-[70%] mt-6  text-center border-[1px] p-2 rounded border-black " href={'/entrar'}   >Voltar para Login</Link>
            </div>
        </div>
        </>
    )
}