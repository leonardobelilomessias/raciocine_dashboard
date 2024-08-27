import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormProfile } from "./FormProfile";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { getUserById } from "@/lib/firebase/getUserById";
import { fakeUserId } from "@/app/mocks/fakeDatabase";
import { notFound } from "next/navigation";

export async function ProfileScreen(){
     const dataUser =  await  getUserById(fakeUserId) 

    try{

    }catch(e){

    }
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4 flex-col">
            <div>

                <CardHeader>
                    <CardTitle className="flex" > 
                    {/* <Rocket className="mr-1"/> */}
                    Editar Perfil
                    </CardTitle>
                    <CardDescription>
                        Aqui estão a lista de todos os produtos
                    </CardDescription>
                </CardHeader>
                <div className=" md:flex gap-2 mb-10 bg-blue-100">
                <Avatar className="w-40 h-40 m-auto ">
                <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </div>
            </div>
            <div className="flex sm:flex-row flex-wrap justify-center ">
                <CardContent className="flex flex-col w-[400px] sm:w-[600px] justify-center">

                    <FormProfile dataUser={dataUser}/>
                </CardContent>
            </div>
                </Card>
        </div>
    )
}