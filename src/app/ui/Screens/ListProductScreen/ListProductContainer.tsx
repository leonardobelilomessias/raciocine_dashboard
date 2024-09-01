
import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Download, Heart, Pencil, Rocket, Trash2 } from "lucide-react";
import { FAvoriteCard } from "../../components/FavoriteCard";
import Image from "next/image";
import axios from "axios";
import { IProduct, IProductResponse } from "@/app/types/types";
import { DeleteProductDialog } from "./DeleteProductDialog";
import Link from "next/link";
import { listProducts } from "@/lib/firebase/listProducts";

 export async function ListProductsContainer(){
    const data =  await listProducts() 
     let products = data as IProductResponse[]
     async function handleDeleteProduct(idToDelete:string){
        await axios.delete(`/api/deleteProduct?id=${idToDelete}`,)
     }
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
    <CardTitle className="flex" > 
        {/* <Rocket className="mr-1"/> */}
         Todos Produtos</CardTitle>
    <CardDescription>
        Aqui estão a lista de todos os produtos
    </CardDescription>
  </CardHeader>



  <div className="flex flex-col flex-wrap gap-3 m-auto">

{
    products.map((item,index)=>(
        

<div key={index} className="w-full flex flex-row gap-5">

<div className="w-[220px]">
<div className="w-[220px] h-[120px] relative " >
    <Image style={{borderRadius:4}} src={item?.cover} alt="img" fill />
</div>
</div>

    <div >
        <CardTitle className=" h-[56px]  text-wrap truncate">{item.title}  </CardTitle>
        <div className="flex gap-3">
            <Link href={`/editar-produto/${item.id}`}>
                <Button className="w-full gap-1 bg-primaryPalet" > <Pencil/> Editar</Button>
            </Link>
            <DeleteProductDialog idToDelete={item.id}/>
        </div>
    </div>
    
</div>    
    ))
}



  </div>

  <CardFooter className="sm:flex p-4 sm:flex-col  justify-center sm:flex-row justify-items-center grid justify-items-center">

<Button className="bg-primaryPalet">Ver Mais</Button>
  </CardFooter>
        </Card>
        </div>
    )
}