import { listProducts } from "@/lib/firebase/listProducts";
import { ApartamentContainer } from "./ApartamentContainer";
import { IProduct, IProductResponse } from "@/app/types/types";

export  function ApartamentScreen({products}:{products:IProductResponse[]| undefined}){

    return(
        <>
        <ApartamentContainer products={products}/>
        </>
    )
}