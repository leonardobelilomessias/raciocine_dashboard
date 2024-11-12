'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarPlus2 } from "lucide-react"
import { FaPhone, FaPhoneSquare, FaVideo, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa"
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SchedulleCalendar } from "./ScedullerCalendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import clsx from "clsx"
import { axiosApi } from "@/lib/axios/axios"

interface IAppointment {
  user_id:string,
  date:Date |undefined |null
  type:string
  status:"confirmed"| "awaiting" |"canceled"
}
export function SchedulleDialog({getAppointments}:{getAppointments:()=>void}) {
  const [date,setDate] = useState<Date | null>()
  const [appointment,setAppointment] = useState({} as IAppointment) 
  const [channel, setChannel] = useState("whatsapp")
  const [messageChannel,setMessageChannel] = useState('Agende seu horario no melhos dia e forma de sua preferência.')
  function handleChannel(thisChannel:string){
    setChannel(thisChannel)
    if('whatsapp'==thisChannel) setMessageChannel( "Vamos manda uma mensage para você no whatsapp no horário marcado")
    if('call'==thisChannel)  setMessageChannel( "Vamos fazer  uma ligação para entrar em contato com você  no horário marcado")
    if('video'==thisChannel)  setMessageChannel( "Vamos fazer uma reunião de video com você no whatsapp no horário marcado")
    if('visit'==thisChannel)  setMessageChannel( "Vamos te esperar  para o seu atendimento na visita agendada no horário marcado")

  }
   async function sendAppointment({type, date }:{type:string, date:Date|undefined|null}){
    try{
      const appointment = {status:"awaiting", type:channel, date:date}
      await axiosApi.post('/api/createAppointment',{appointment:appointment})
      getAppointments()
    }catch{
      alert("erro ao enviar agendamento")
    }

  }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button  className="flex gap-3 bg-primaryPalet">
                        
                        <CalendarPlus2/>
                        Novo Agendamento
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Agendamento</DialogTitle>

        </DialogHeader>
        <div className="flex gap-3 justify-center">

            <label htmlFor="r1" onClick={()=>handleChannel('whatsapp')} className=" flex flex-col justify-center " style={{borderRadius:'8px'}}> 
                <IoLogoWhatsapp  style={{fontSize:75, border:channel==='whatsapp'?"2px solid #1169F0":"1px solid #1169F0", borderRadius:'8px',padding:'8px'}} className={clsx("  text-primaryPalet ",{
            "text-primaryPalet bg-blue-200 ":channel ==='whatsapp'
            })} />
                <p className="text-primaryPalet text-xs text-center" style={{fontWeight:channel==="whatsapp" ?'bold':""}}   >Whatsapp</p>
            </label>
            <label htmlFor="r2" onClick={()=>handleChannel('call')} className=" flex flex-col justify-center" style={{borderRadius:'8px'}}> 
                <FaPhone width={50} height={50} style={{fontSize:75,  border:channel==='call'?"2px solid #1169F0":"1px solid #1169F0", borderRadius:'8px',padding:'8px'}} className={clsx("  text-primaryPalet ",{
            "text-primaryPalet bg-blue-200 ":channel ==='call'
            })} />
                <p className="text-primaryPalet text-xs text-center" style={{fontWeight:channel==="call" ?'bold':""}}>Ligação</p>
            </label>
            <label htmlFor="r3" onClick={()=>handleChannel('video')} className=" flex flex-col justify-center" style={{borderRadius:'8px'}}> 
                <FaVideo width={50} height={50} style={{fontSize:75, border:channel==='video'?"2px solid #1169F0":"1px solid #1169F0", borderRadius:'8px',padding:'8px'}} className={clsx("  text-primaryPalet ",{
            "text-primaryPalet bg-blue-200 ":channel ==='video'
            })} />
                <p className="text-primaryPalet text-xs text-center" style={{fontWeight:channel==="video" ?'bold':""}}>Cham.Video</p>
            </label>
            
            <label htmlFor="r4" onClick={()=>handleChannel('visit')} className=" flex flex-col justify-center" style={{borderRadius:'8px'}}> 
            <FaBuildingCircleCheck width={50} height={50} style={{fontSize:75,  border:channel==='visit'?"2px solid #1169F0":"1px solid #1169F0", borderRadius:'8px',padding:'8px'}} className={clsx("  text-primaryPalet ",{
            "text-primaryPalet bg-blue-200 ":channel ==='visit'
            })} />

                <p className="text-primaryPalet text-xs text-center" style={{fontWeight:channel==="visit" ?'bold':""}}>Visita</p>
            </label>
        </div>
        <DialogDescription>
            {messageChannel}
          </DialogDescription>
        <div className="flex justify-center py-4">
            <SchedulleCalendar setDate={setDate}/>
          
        </div>
        <DialogFooter>
          <DialogClose asChild  >
          <Button onClick={()=> sendAppointment({type:channel,date:date})} className="bg-primaryPalet">Salvar Agendamento</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
