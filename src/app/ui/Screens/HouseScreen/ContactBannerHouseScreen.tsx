import { Button } from "@/components/ui/button";

export function ContactBannerHouse(){
    return(
        <div className=" flex bg-primaryPalet  flex-wrap">
            <p className="text-white text-center text-3xl sm:max-w-[50%] font-bold  p-10">Gostou do imóvel?
                Entre em contato com um Agente Especializado Agora!
            </p>
            <div className=" flex bg-white  flex-1 p-10 justify-center">
                <Button className="m-auto">
                    Entrar em contato
                </Button>
            </div>
        </div>
    )
}