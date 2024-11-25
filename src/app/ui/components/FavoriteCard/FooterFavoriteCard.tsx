
'use client'
import { IProduct, IProductResponse } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { axiosApi } from "@/lib/axios/axios";
import { Eye, Heart, MessageSquareMore, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FooterFavoriteCard({product,deleteFavorite}:{product:IProductResponse,deleteFavorite:(id:string)=>void}){


    return(
        <>
                            {/* block butons actions  */}
                    <div className="flex justify-around mt-3 pt-3    w-[250px] " style={{borderTop:'solid', borderTopColor:"silver", borderTopWidth:"0.1px", }}>
                     <div onClick={()=>deleteFavorite(product.id as string)} className="flex flex-col     justify-center">
              <X width={30} height={30} className="m-auto text-red-500" />
          <p className=" m-auto text-center">
                      Excluir
          </p>
          </div>
                        <div className="flex flex-col     justify-center">
                                <DialogContactFooterCard cover={product.cover} city={product.city} id={product.id} neighborhood={product.neighborhood} title={product.title} />
                        </div>
                    </div>
        </>
    )
}


function DialogContactFooterCard({cover,title,neighborhood,city,id}:{cover:string,title:string, neighborhood:string, city:string,id:string|undefined}){
  const [load, setLoad] = useState(false)
  const [created, setCreated] = useState(false)

  useEffect(()=>{
    setCreated(false)
  },[])   
  async function createUserRequest(){
      setLoad(true)
      const product={cover,title,neighborhood,city,id}
      try{

        await axiosApi.post(`/api/createUserRequest`,{product:product})
        setCreated(true)
      }catch{
        alert("erro ao enviar solicitação")
      }finally{
        setLoad(false)
      }
     }
    return(
    <>
    <Dialog>
  <DialogTrigger>
  <div className="flex flex-col     justify-center">
    <MessageSquareMore  width={32} height={30} className="m-auto text-primaryPalet" />
    <p className="text-primaryPalet m-auto text-center">
            Contato
    </p>
</div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
          <DialogTitle className="text-2xl">Solicitar atendimento </DialogTitle>
    </DialogHeader>
          <DialogDescription>

              Clique em enviar e nossa equipe irá entrar em contato para realizar o seu atendimento
          </DialogDescription>
    {(load &&!created )&& <div><p>criando atendimento...</p></div>}
    {(!load &&created )&& <div><p>Atendimento criado</p></div>}

    { (!load&&!created) && <div>
              <div className="flex justify-center gap-2">
                  <Image src={cover} width={150} height={50} alt="image"/>
              <div>
              <p className="text-primaryPalet font-bold">{title}</p>
              <p className="text-xs">
              {city} - 
              {neighborhood}
              </p>
              </div>
              </div>
            <div className="flex gap-3 flex-wrap mt-5 mb-5">
                Olá, tenho interesse no imóvel {title}! 
            </div>
      </div>  
}
    <DialogFooter className="flex flex-row  gap-2">
          <DialogClose asChild>
            <div>

            { (!created &&!load)&&
            <Button type="button" className="w-[150px]" variant="secondary">
                Cancelar
            </Button>
            }
            {created &&
            <Button  className="bg-primaryPalet w-[150px]">Ok</Button>
            
          }
          </div>
    
          </DialogClose>
            { !created &&<Button onClick={()=>{createUserRequest()}} className="bg-primaryPalet w-[150px]">Solicitar Atendimento</Button>}
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
    )
}
