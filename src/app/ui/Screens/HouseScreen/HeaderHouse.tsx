import { IProduct } from "@/app/types/types";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, MapPin } from "lucide-react";

export function HeaderHouse({product}:{product:IProduct}){
    return(
        <>
                  <CardHeader>
                <CardTitle className="flex gap-5 sm:text-4xl  items-end">
                    <Hotel size={36}/>
                    {product.title}l
                </CardTitle>
                <div className="flex items-center gap-1 mb-10">
                    <MapPin width={18} height={18}  className="text-blue-500 text-[0.1rem]"/> 
                    <span className="text-lg">{product.neighborhood} - {product.city}</span>
                </div>
                </CardHeader>
        </>
    )
}