'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Folder, PersonStanding, Plus, User, Users } from "lucide-react";
import { DocummentsTable } from "./DocumentsTable";
import { FaPerson } from "react-icons/fa6";
import { GiRamProfile } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ParticipantDialog } from "./ParcipantDialog";


export function DocumentsScreeen(){
    const [participant,setPArticipant] = useState([] as any[])
    const documents = {cpf:'17-06-2024.pdf'}
    function IsEmpty(obj: Record<string, any>): boolean {
        return Object.values(obj).every(valor => 
          valor === null || valor === undefined || valor === ''
        );
      }
      const documentsIsEmpty = IsEmpty(documents)
    return(
        <div className="container pt-10">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <Folder/>
                    Seus Documentos
                </CardTitle>
                <CardDescription>
                    Mantenha seus documentos atualizados para ter mais chances de aprovação.
                </CardDescription>
                <div>
                </div>
                <CardContent>
                    {
                        documentsIsEmpty&&
                    <div className=" bg-gray-100 p-10 min-h-[400px] my-5">
                        <p className="text-blue-500 text-center"> você ainda não a nunhum agendamento.</p>
                        <p className="text-blue-500 text-center"> Clique em <b>novo agendamento</b> para fazer um novo agendamento.</p>

                    </div>
                    
                    }
            <div className="flex gap-2 ">
            <Button variant={'ghost'} className="border rounded p-2 flex item-center">
                <User size={16}/>
              <p className="text-sm">Titular </p>
            </Button>
        { 
            participant.length>0&&
            <Button variant={'ghost'} className="border rounded p-2 flex item-center">
                <Users size={16}/>
              <p className="text-sm">Participante </p>
            </Button>
            }
            <ParticipantDialog/>
          </div>
                    <DocummentsTable/>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}