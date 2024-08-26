import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SchedulleDialog } from "./SchedulleDialog";
import { CalendarDays } from "lucide-react";


export function SchedulleScreeen(){
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
                <CardContent>
                    <div className=" bg-gray-100 p-10 min-h-[400px] my-5">
                        <p className="text-blue-500 text-center"> você ainda não a nunhum agendamento.</p>
                        <p className="text-blue-500 text-center"> Clique em <b>novo agendamento</b> para fazer um novo agendamento.</p>

                    </div>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}