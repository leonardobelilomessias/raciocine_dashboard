import { listProducts } from "@/lib/firebase/listProducts";
import { ApartamentContainer } from "./ApartamentContainer";
import { IProduct } from "@/app/types/types";

export  function ApartamentScreen({products}:{products:IProduct[]| undefined}){

    return(
        <>
        <ApartamentContainer products={products}/>
        </>
    )
}