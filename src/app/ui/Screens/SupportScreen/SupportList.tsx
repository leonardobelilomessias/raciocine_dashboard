import { Card, CardContent } from "@/components/ui/card";
import { listSupportsByUserId } from "@/lib/firebase/listSupportsByUserId";

export async function SupportList() {
    const supports = await listSupportsByUserId("kpJsmJzlEIc4oBPDitHbDucYMyu1")

    return(
        <div className="w-[400px] h-[500px] ">
            <h6 className="text-bold">
                Lista de Suportes
            </h6>
            <Card >

            {
                supports&&
                supports?.map((element)=>(
                <CardContent key={element.title}>
                    <div>
                        {element.title}
                    </div>
                    <div>
                        {element.message}
                    </div>
                </CardContent>
                ))
            }

            </Card>
        </div>
    )
}