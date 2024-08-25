import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { SupportForm } from "./SupportForm";
import { SupportList } from "./SupportList";

;

export function SupportContainer(){
    return(
        <div className="md:p-10">
            <Card className="mb-10 p-4">
                <CardHeader>
                    <CardTitle className="flex" > 
                    {/* <Rocket className="mr-1"/> */}
                    Cria Chamado de suporte</CardTitle>
                    <CardDescription>
                    Crie um chamado e em breve nos entraremos em contato.
                    </CardDescription>
                </CardHeader>
                <div className="flex flex-row flex-wrap gap-3 m-auto">
                    <SupportForm/>
                    <SupportList/>
                </div>
            </Card>
        </div>
    )
}