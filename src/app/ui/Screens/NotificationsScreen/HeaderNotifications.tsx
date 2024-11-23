import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export function HeaderNotifications(){
    return(

    <CardHeader>
        <CardTitle className="flex gap-5">
            <Bell/>
            Suas Notificações
        </CardTitle>
        <CardDescription>
            Fique atento sempre enviamos promoções e novidades.
        </CardDescription>
    </CardHeader>
    )
}