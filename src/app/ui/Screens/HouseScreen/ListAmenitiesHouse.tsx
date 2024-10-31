import { IAmenities, IProduct } from "@/app/types/types";
import { GiConfirmed } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";

export function ListAmenitiesHouse({amenitiesList}:{amenitiesList:{ [key: string]: boolean }[]}){
    const amenities: IAmenities = mergeAmenities(amenitiesList);
    return(
        <div className="my-20">
            <p className=" font-bold text-2xl">Amenidades</p>
            <div className="flex flex-row gap-4 w-1000 flex-wrap bg-sky-50 p-4">

            <div className="flex flex-row items-center space-x-1 flex-wrap  ">{amenities.pool?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Piscina</p></div>
            
            <div className="flex flex-row items-center space-x-1 ">{amenities.porter?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Portaria</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.gym?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Academia</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.private_area?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Area Privativa</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.sauna?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Sauna</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.playground?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>PlayGround</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.bike_rack?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Bicicletario</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.coworking?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Coworking</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.handicapped?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Acessibilidade</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.service_area?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Area de serviço</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.pet_place?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Pet Place</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.salon_party?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Salão de festas</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.lift?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Elevador</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.washing?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Area de LAvar</p></div>
            <div className="flex flex-row items-center space-x-1 ">{amenities.backyard?<GiConfirmed color="blue" fontSize={16} className=" leading-4" />:<GiCancel color="red" />}<p>Quintal</p></div>


            

            </div>
        </div>
    )
}
const mergeAmenities = (amenities: { [key: string]: boolean }[]): IAmenities => {
    return amenities.reduce((acc: IAmenities, current: { [key: string]: boolean }) => {
      return { ...acc, ...current };
    }, {});
  };