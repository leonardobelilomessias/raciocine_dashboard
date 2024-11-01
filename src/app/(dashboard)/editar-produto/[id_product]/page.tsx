import { IProductResponse } from "@/app/types/types";
import { EditProductScreen } from "@/app/ui/Screens/EditProductScreen";
import { axiosApi } from "@/lib/axios/axios";
import axios from "axios";
import { Suspense } from "react";


export default  async function editarproduto({params:{id_product}}:{params:{id_product:string}}){
    const response = await axiosApi.get(`/api/getProductById?id=${id_product}`)
    const imagesResponse = await axiosApi.get(`/api/listImagesByIdProduct?id=${id_product}`);
    const imagens = imagesResponse.data.urls
    const productsResponse = response.data as IProductResponse
    return(
        <Suspense fallback={<p>carregando</p>}>
        <EditProductScreen images={imagens} product={productsResponse} />
      </Suspense>
    )
}