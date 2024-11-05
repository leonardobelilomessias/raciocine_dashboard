import { truncateText } from "@/app/util/textTrincate";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { listSupportsByUserId } from "@/lib/firebase/listSupportsByUserId";
import { SupportCard } from "./SupportCard";

export async function SupportList() {
    const supports = await listSupportsByUserId("kpJsmJzlEIc4oBPDitHbDucYMyu1")

    return(
        <section className="flex flex-col ">
            <h6 className="font-bold  text-lg">
                Lista de Suportes
            </h6>
            
            <div className="flex flex-wrap gap-3 flex-1">

            {
                supports&&
                supports?.map((element)=>(
                    
                    <SupportCard  message={element.message} status={element.status} title={element.title}  key={element.title}/>
                ))
            }
            </div>

            
        </section>
    )
}

