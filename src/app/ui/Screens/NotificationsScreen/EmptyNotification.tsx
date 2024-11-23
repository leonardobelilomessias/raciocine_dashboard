import { Card, CardHeader } from "@/components/ui/card";

export function EmptyNotification(){
    return(
        <>
        <div className=" bg-gray-100 p-2 md:p-8 min-h-[400px] my-5">                        
            <Card className=" flex flex-col gap-3 ">
                <CardHeader>
                    <p>
                        você ainda não tem nunhuma notificação.
                    </p>
                </CardHeader>
            </Card>
        </div>
        </>
    )
}