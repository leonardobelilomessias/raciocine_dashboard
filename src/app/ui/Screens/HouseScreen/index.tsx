import { axiosApi } from "@/lib/axios/axios";
import { HouseCarousel } from "../../components/Carousels/HouseCarousel";
import { HouseContainer } from "./HouseContainer";
import { ContactBannerHouse } from "./ContactBannerHouseScreen";
import { CardContent } from "@/components/ui/card";
import { TextContent } from "./TextCantent";
import { ListFeaturesHome } from "./ListFeaturesHome";
import { LocationHouse } from "./LocationHouse";
import { HeaderHouse } from "./HeaderHouse";
import { VideoHouse } from "./VideoHouse";
import { IProduct } from "@/app/types/types";
import { ListAmenitiesHouse } from "./ListAmenitiesHouse";

export async  function HouseScreen({id}:{id:String}){
    const responseProduct = await axiosApi.get(`/api/getProductById?id=${id}`)
    const data = await axiosApi.get(`/api/listImagesByIdProduct?id=${id}`)
    const product = responseProduct.data as IProduct

    const {urls} = data.data
     console.log(product.amenities)
    return(
    <>

    <HouseCarousel  images={urls}/>
    <HouseContainer >
    <HeaderHouse   product={product}/>
        <CardContent>
        <TextContent  text={product.description}/>
        <ListFeaturesHome product={product}/>
        <VideoHouse embedVideo={"https://www.youtube.com/embed/OhagXaxl72k?si=uoYsOfHG1GuVS2NL&amp;controls=0"} />
        <ListAmenitiesHouse amenitiesList={product.amenities as { [key: string]: boolean }[]}/>
        <LocationHouse/>      
        </CardContent>
        <ContactBannerHouse/>
    </HouseContainer>
    </>
)
}