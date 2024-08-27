import { IProductResponse } from "@/app/types/types";
import { EditProductContainer } from "./EditProductContainer";
import { EditProductForm } from "./EditProductForm";

export async  function EditProductScreen({product, images}:{images:any,product:IProductResponse}){
    console.log('id na rota',product.id)
    return(
        <EditProductContainer >
            <EditProductForm images={images} product={product}/>
        </EditProductContainer>
    )
}