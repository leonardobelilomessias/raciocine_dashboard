'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SchedulleDialog } from "./SchedulleDialog";
import { CalendarDays, FileText, Trash2, X } from "lucide-react";
import { axiosApi } from "@/lib/axios/axios";
import { useEffect, useState } from "react";
import { IAppointment } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";


export function SchedulleScreeen(){
    const [appointments,setAppointments] = useState<IAppointment[]>([]) 
    async function getApointments(){
        const response  = await axiosApi.get(`/api/getAppointmentsByUserId`)
        setAppointments(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        getApointments()
    },[])
    return(
        <div className="container pt-10">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <CalendarDays/>
                    Seus Agendamentos
                </CardTitle>
                <CardDescription>
                    Aqui esta a lista do seu agendamentos
                </CardDescription>
                <div>
                    <SchedulleDialog />
                </div>
                <CardContent className=" flex bg-gray-50">
                    { !!(appointments.length<=0)&&<EmptyAppointments/>}
                    <div className=" flex flex-row flex-wrap   my-5 gap-3">
                        {
                            appointments.map((item)=>(
                                <div key={item.type} className="flex flex-col bg-white min-w-[180px] rounded p-3 gap-2 border ">
                                    {transformIconAppointment(item.type)}
                                    <div className={`${ColorStatus(item.status)} text-xs  text-end justify-self-end font-bold`}>
                                             {transformTextStatus(item.status)}
                                    </div>
                                    <div >
                                        <p className="font-bold ">
                                        {transformTextType(item.type)}
                                        </p>
                                        <p className="text-xs">Data: vila das flores</p>
                                        <p className="text-xs">Horario: vila das flores</p>

                                        <p className="text-xs">Empreendimento: vila das flores</p>
                                        <p className="text-xs">Corretor: Leonardo Belilo</p>

                                    </div>
                                    <div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Button  className="flex  gap-2 bg-white text-black border border"  >
                                            <X size={14}/>
                                            Cancelar
                                        </Button>
                                        
                                        </div>
                                    </div>
                              </div>
                            ))
                        }

                    </div>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}

function EmptyAppointments(){
    return(
        <div className=" bg-gray-50 p-10 min-h-[400px] my-5">
        <p className="text-blue-500 text-center"> você ainda não a nunhum agendamento.</p>
        <p className="text-blue-500 text-center"> Clique em <b>novo agendamento</b> para fazer um novo agendamento.</p>

        </div>
    )

}
 function ColorStatus(status:"awaiting"|"confirmed"|"cancelled"|"done"){
    if(status.toUpperCase()==='awaiting'.toUpperCase()) return  "text-yellow-500"
    if(status.toUpperCase()==='confirmed'.toUpperCase()) return "text-green-500"
    if(status.toUpperCase()==='cancelled'.toUpperCase()) return "text-red-200"
    if(status.toUpperCase()==='done'.toUpperCase()) return ""


      // if(status.toUpperCase()==='Em Análise'.toUpperCase()) return "text-blue-500"
    return""
  }

  function transformTextType(status:"whatsapp"|"call"|"video"|"visit"){
    if(status.toUpperCase()==='whatsapp'.toUpperCase()) return "Whatsapp"
    if(status.toUpperCase()==='call'.toUpperCase()) return "Ligação"
    if(status.toUpperCase()==='video'.toUpperCase()) return "Video"
    if(status.toUpperCase()==='visit'.toUpperCase()) return "Visita"

      // if(status.toUpperCase()==='Em Análise'.toUpperCase()) return "text-blue-500"
    return"Whatsapp"
  }
  function transformTextStatus(status:"awaiting"|"confirmed"|"cancelled"|"done"){
    if(status.toUpperCase()==='awaiting'.toUpperCase()) return "Aguardando confirmação"
    if(status.toUpperCase()==='confirmed'.toUpperCase()) return "Confirmado"
    if(status.toUpperCase()==='cancelled'.toUpperCase()) return "Cancelado"

      // if(status.toUpperCase()==='Em Análise'.toUpperCase()) return "text-blue-500"
    return"Não definido"
  }

  function transformIconAppointment(status:"whatsapp"|"call"|"video"|"visit"){

    if(status.toUpperCase()==='whatsapp'.toUpperCase()) return <IoLogoWhatsapp/>
    if(status.toUpperCase()==='call'.toUpperCase()) return     <FaPhone/>
    if(status.toUpperCase()==='video'.toUpperCase()) return     <FaVideo/>
    if(status.toUpperCase()==='visit'.toUpperCase()) return     <FaBuildingCircleCheck/>
    

  }