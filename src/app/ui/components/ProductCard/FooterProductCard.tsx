
'use client'
import { IProduct } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { axiosApi } from "@/lib/axios/axios";
import { Eye, Heart, MessageSquareMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function FooterProductCard({address,amenities,area,bathrooms,bedrooms,city,cover,description,garages,neighborhood,price,title,zip,id}:IProduct){
    const [isFavorite,setIsFavorite]=useState(false)
    async function handleFavorite(product:IProduct){
        if(isFavorite){    
            setIsFavorite(!true)
            await axiosApi.post('/api/createFavorite',{product:product})
        }else{
            await axiosApi.delete(`/api/deleteFavorite?product_id=${product.id}`)
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
                                <MessageSquareMore  width={30} height={30} className="m-auto text-primaryPalet " />
                            <p className="text-primaryPalet m-auto text-center">
                                Contato
                            </p>
                        </div>
                <DialogFooterCardProduct product={{address,amenities,area,bathrooms,bedrooms,city,cover,description,garages,neighborhood,price,title,zip,id}}/>
                    </div>
        </>
    )
}

function DialogFooterCardProduct({product}:{product:IProduct}){
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

    <DialogFooter className="sm:justify-start gap-2">
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