import { axiosApi } from "@/lib/axios/axios";
import { HouseCarousel } from "../../components/Carousels/HouseCarousel";
import { HouseContainer } from "./HouseContainer";
import { ContactBannerHouse } from "./ContactBannerHouseScreen";
import { CardContent } from "@/components/ui/card";
import { TextContent } from "./TextCantent";
import { ListFeaturesHome } from "./ListFeaturesHome";
import { LocationHouse } from "./LocationHouse";
import { HeaderHouse } from "./HeaderHouse";

export async  function HouseScreen({id}:{id:String}){
    const data = await axiosApi.get(`/api/listImagesByIdProduct?id=${id}`)
    const responseProduct = await axiosApi.get(`/api/getProductById?id=${id}`)
    const product = responseProduct.data

    const {urls} = data.data
    console.log(product)
    return(
    <>

    <HouseCarousel  images={urls}/>
    <HouseContainer >
    <HeaderHouse   product={product}/>
        <CardContent>
        <TextContent  text={product.description}/>
        <ListFeaturesHome product={product}/>
        <LocationHouse/>      
        </CardContent>
        <ContactBannerHouse/>
    </HouseContainer>
    </>
)
}