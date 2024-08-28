import { axiosApi } from "@/lib/axios/axios";
import { HouseCarousel } from "../../components/Carousels/HouseCarousel";
import { HouseContainer } from "./HouseContainer";

export async  function HouseScreen({id}:{id:String}){
    const data = await axiosApi.get(`/api/listImagesByIdProduct?id=${id}`)
    const responseProduct = await axiosApi.get(`/api/getProductById?id=${id}`)
    const product = responseProduct.data

    const {urls} = data.data
    console.log(product)
    return(
    <>

    <HouseCarousel  images={urls}/>
    <HouseContainer product={product}/>
    </>
)
}