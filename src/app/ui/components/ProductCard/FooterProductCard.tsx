
'use client'
import { IProduct, IProductResponse } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { axiosApi } from "@/lib/axios/axios";
import { Eye, Heart, MessageSquareMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function FooterProductCard({address,amenities,area,bathrooms,bedrooms,city,cover,description,garages,neighborhood,price,title,zip,id}:IProductResponse){
    const [isFavorite,setIsFavorite]=useState(false)
    async function handleFavorite(product:IProductResponse){
        if(isFavorite){    
            setIsFavorite(!true)
            await axiosApi.post('/api/createFavorites',{product:product})
        }else{
            await axiosApi.delete(`/api/deleteFavorites?product_id=${product.id}`)
            setIsFavorite(!false)

        }
        
        
    }
    return(
        <>
                            {/* block butons actions  */}
                            <div className="flex justify-around mt-3 pt-3    w-[250px] " style={{borderTop:'solid', borderTopColor:"silver", borderTopWidth:"0.1px", }}>
                        <div onClick={()=>handleFavorite({address,amenities,area,bathrooms,bedrooms,city,cover,description,garages,neighborhood,price,title,zip,id})} className="flex flex-col      justify-center">
                                <Heart width={30} fill={isFavorite?"#1169F0":"transparent"} height={30} className="m-auto color-primaryPalet text-primaryPalet" />
                            <p className=" text-primaryPalet m-auto text-center">
                                {isFavorite?"Favorito":"Favoritar"}
                            </p>
                        </div>
                        <div className="flex flex-col     justify-center">
                                <DialogContactFooterCard cover={cover} city={city} id={id} neighborhood={neighborhood} title={title} />
                        </div>
                <DialogFooterCardProduct product={{address,amenities,area,bathrooms,bedrooms,city,cover,description,garages,neighborhood,price,title,zip,id}}/>
                    </div>
        </>
    )
}


function DialogContactFooterCard({cover,title,neighborhood,city,id}:{cover:string,title:string, neighborhood:string, city:string,id:string|undefined}){

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
      <DialogDescription>

        Clique em enviar e nossa equipe irá entrar em contato para realizar o seu atendimento
      </DialogDescription>
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
    </DialogHeader>
    <div className="flex gap-3 flex-wrap mt-5 mb-5">
        Olá, tenho interesse no imóvel {title}! 
    </div>

    <DialogFooter className="flex flex-row  gap-2">
          <DialogClose asChild>
                <Button type="button" className="w-[150px]" variant="secondary">
                Cancelar
                </Button>
          </DialogClose>
        <Link href={``}>
            <Button className="bg-primaryPalet w-[150px]">Solicitar Atendimento</Button>
        </Link>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
    )
}
function DialogFooterCardProduct({product}:{product:IProductResponse}){
    const amenitiesFields = [
        {label:'pool',name:'Piscina'},
        {label:'porter',name:'Portaria 24hrs'},
        {label:'gym',name:'Academia'},
        {label:'private_area',name:'Area privativa'},
        {label:'lift',name:'Elevador'},
        {label:'salon_party',name:'Salão de festas'},
        {label:'playground',name:'Playground'},
        {label:'sauna',name:'Sauna'},
        {label:'bike_rack',name:'Bicicletario'},
        {label:'coworking',name:'Coworking'},
        {label:'washing',name:'Area de lavar'},
        {label:'handicapped',name:'Acessibilidade'},
        {label:'backyard',name:'Varanda'},
        {label:'pet_place',name:'Pet place'},
        {label:'service_area',name:'Area de serviço'}
      ];
    //   console.log(product.amenities)
    const filteredamenities = product.amenities.filter((item)=> {return Object.values(item)[0]===true})
     .map((item)=>  (Object.keys(item)[0]))
    return(
    <>
    <Dialog>
  <DialogTrigger>
  <div className="flex flex-col     justify-center">
    <Eye width={32} height={30} className="m-auto text-primaryPalet" />
    <p className="text-primaryPalet m-auto text-center">
            olhadinha
    </p>
</div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-2xl">{product.title} </DialogTitle>
    <div className="flex justify-center">

    <Image src={product.cover} width={300} height={200} alt="image"/>
    </div>
      <DialogDescription>

        {product.description}
      </DialogDescription>
    </DialogHeader>
    <div className="flex gap-3 flex-wrap mt-5 mb-5">
        {amenitiesFields.map((item)=>{
    
            return(
                <div key={item.label} className="flex items-center gap-2">
                <Checkbox  checked={filteredamenities.includes(item.label)}/>
                <Label className="font-bold" >{item.name}</Label>
    
                </div>
        )
        })}
    </div>

    <DialogFooter className="flex flex-row  gap-2">
          <DialogClose asChild>
                <Button type="button" className="w-[150px]" variant="secondary">
                Fechar
                </Button>
          </DialogClose>
        <Link href={`/imovel/${product.id}`}>
            <Button className="bg-primaryPalet w-[150px]">Ver Completo</Button>
        </Link>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
    )
}