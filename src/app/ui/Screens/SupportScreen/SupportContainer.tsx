import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { SupportForm } from "./SupportForm";
import { SupportList } from "./SupportList";

;

export function SupportContainer(){
    return(
        <div className="md:p-10 min-h-[100vh] ">
            <Card className="mb-10 p-4 min-h-[80vh]">
                <CardHeader>
                    <CardTitle className="flex" > 
                    {/* <Rocket className="mr-1"/> */}
                    Cria Chamado de suporte</CardTitle>
                    <CardDescription>
                    Crie um chamado e em breve nos entraremos em contato.
                    </CardDescription>
                </CardHeader>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-2 ">
                    <SupportForm/>
                    <SupportList/>
                </div>
            </Card>
        </div>
    )
}