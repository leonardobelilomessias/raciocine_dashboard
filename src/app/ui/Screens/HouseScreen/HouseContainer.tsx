
import { IProduct } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { BedDouble, BookText, CalendarDays, Car, Download, Hotel, MapPin, MessageCircleQuestion, Ruler, ShowerHead, TvMinimalPlay } from "lucide-react";
import Image from "next/image";


export function HouseContainer({product}:{product:IProduct}){
    const elemtsBooks = [{
        title:"Como financiar seu primeiro imovel",link:"/video/aoksd",category:"fin"},
        {title:"Documentos para o financiamento",link:"/video/aoksd", category:"fin"},
        {title:"partamento tipo vs Area Privativa",link:"/video/aoksd", category:"con"},
        {title:"Qual melhor posição do apartamento",link:"/video/aoksd", category:"con"},
        {title:"São gabriel coração de BH",link:"/video/aoksd", category:"rai"},
        {title:"Nova pampulha - perto de tudo ",link:"", category:"rai"},
        {title:"Como fazer uma grana extra para o ape",link:"", category:"dic"},
        {title:"Melhores planos de pagamento",link:"", category:"dic"},
  
  
      ]
    return(
        <div className="sm:container  mx-2">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5 sm:text-4xl  items-end">
                    <Hotel size={36}/>
                    {product.title}l
                </CardTitle>
                <div className="flex items-center gap-1 mb-10">
                    <MapPin width={18} height={18}  className="text-blue-500 text-[0.1rem]"/> 
                    <span className="text-lg">{product.neighborhood} - {product.city}</span>
                </div>
                <CardDescription className="pb-[50px]">
                    {product.description}
                </CardDescription>
                <CardContent>
                <ListFeaturesHome product={product}/>
                <LocationHouse/>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}


function LocationHouse(){
    return(
        <div className="mb-[50px]">
        <p className="mb-[32px] font-bold text-2xl" >Localização no mapa</p>
        <div style={{ height: '400px', width: '100%' }}>
        <iframe
  width="100%"
  height="100%"
  loading="lazy"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnn_SK-u5M9BYGIJQ8TDTssee0vJ_3v08
  &q=SÃO+GABRIEL,BH&zoom=15">
</iframe>
    </div>
        </div>
    )
}


export  function ListFeaturesHome({product}:{product:IProduct}) {
    // const Demo = styled('div')(({ theme }) => ({
    //   backgroundColor: theme.palette.background.paper,
    // }));
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);
  
    return (
      <div className="flex   mb-[32px] wrap items-center justify-center gap-5" >
              <div className="flex gap-5">
                  <BoxFeature title={`${product.area}M² Area`} >
                        <Ruler className="items-center " color="white" size={"3rem"} style={{fontSize:"3rem"}} />
                  </BoxFeature>
  
                  <BoxFeature title={`${product.bedrooms} Quartos`} >
                        <BedDouble size={"3rem"} color="white" style={{fontSize:"3rem"}} />
                  </BoxFeature >
              </div>
              <div className="flex gap-5">
  
                  <BoxFeature title={`${product.bathrooms} Banheiros`} >
                        <ShowerHead size={"3rem"} color="white" style={{fontSize:"3rem"}} />
                  </BoxFeature >
  
                  <BoxFeature title={`${product.garages} Garagens`} >
                        <Car size={"3rem"} color="white"  />
                  
                  </BoxFeature >
              </div>
      </div>
    );
  }
  
  function BoxFeature({children, title}:{title:string,children:React.ReactNode}){
      return(
          <div className="rounded-full flex radius-100 flex-col m-auto items-center justify-center m-w-[300px] m-w-[140px] " style={{display:"flex", alignContent:'center', justifyContent:'center', justifyItems:"center", alignItems:"center"}}>
          <div className=" rounded-full color-white items-center justify-center bg-primaryPalet w-[4rem] h-[4rem] gap-3" style={{display:"flex",alignContent:'center', justifyContent:'center', justifyItems:"center", alignItems:"center"}} >
              {children}
          </div>
              <p  className=" font-bold text-center text-primaryPalet text=[1.2rem] text-center">{title}</p>
          </div>
      )
  }