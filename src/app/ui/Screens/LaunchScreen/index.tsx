import { IProduct } from "@/app/types/types";
import { LaunchContainer } from "./LaunchContainer";
import { listProducts } from "@/lib/firebase/listProducts";

export async  function LaunchScreen(){
    const products = await listProducts()

    return(
        <>
        <LaunchContainer products={products} />
        </>
    )
}