import { Card, CardContent } from "@/components/ui/card";
import { FormProfile } from "./FormProfile";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileScreen(){
    return(
        <div className="container flex flex-col justify-center  max-w-[800px]">
            <Card className="mt-10 pt-10">
            <CardContent className="flex flex-col justify-center">

            <div className=" md:flex gap-2 mb-10">
            <Avatar className="w-40 h-40 m-auto ">
            <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
                <FormProfile/>
            </CardContent>
            </Card>
        </div>
    )
}