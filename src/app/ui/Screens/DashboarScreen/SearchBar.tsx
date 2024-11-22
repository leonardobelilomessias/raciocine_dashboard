'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { axiosApi } from "@/lib/axios/axios";
import { useEffect, useState } from "react";

type Cities={
    name:string
    bairros:string[]
}
export function SearchBar(){
    const [cities,setCities] = useState<Cities[]>([])
    const [neigthborhood,setNeigthborhood] = useState<string[]>([])
    async function getData(){
        const response = await  axiosApi.get(`/api/getCities`)
        console.log(response.data)
        setCities(response.data)
    }
    function handleValueFile(e:string){
        const result = cities.filter(city=>{ 
            if (city.name==e) return {elemnt: city.bairros}
        })
        setNeigthborhood(result[0].bairros)
        console.log(result)
    }
    useEffect(()=>{
        getData()
    },[false])
    return(
        <div className="flex gap-2 p-4 w-full items-center bg-gray-50 justify-center">
              <div className="flex flex-col gap-3 flex-wrap mt-10 mb-8 ">
              <Label>Faça a Busca do seu imóvel</Label>
        <div className=" flex flex-row gap-3 flex-wrap  w-full">
              <div className=" flex gap-2  flex-wrap  ">
                <div className="flex w-[250px] ">

                    <Select  onValueChange={(e)=>handleValueFile(e)}  >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Escolha a cidade " />
                    </SelectTrigger>
                    <SelectContent  >
                        {
                            cities.map((city)=>(
                                <SelectItem key={city.name} value={city.name}>{city.name.split('_').join(" ").toUpperCase()}</SelectItem>
                            ))
                        }
                        
                    </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[250px] ">

                        <Select onValueChange={(e)=>{}} >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Escolha um Bairro" />
                        </SelectTrigger>
                        <SelectContent  >
                            { neigthborhood.length>0&&
                                neigthborhood.map((item)=>(
                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                ))
                            }
                            
                        </SelectContent>
                        </Select>
                </div>
                <div className="flex w-[250px] ">

                <Select onValueChange={()=>{}} >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Escolha Status" />
                  </SelectTrigger>
                  <SelectContent  >
                             <SelectItem value="constucting">Em Contrução</SelectItem>
                            <SelectItem value="done">Pronto</SelectItem>
                            <SelectItem value="plant">Na Planta</SelectItem>



                  </SelectContent>
                </Select>
                </div>
              </div>
            <div>

            </div>
            <Button className="bg-primaryPalet text-white flex">Buscar</Button>
        </div>
        </div>
        </div>
    )
}