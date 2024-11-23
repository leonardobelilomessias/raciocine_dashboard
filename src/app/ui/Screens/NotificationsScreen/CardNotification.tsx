import { INotifications } from "@/app/types/types";
import { formatFirebaseDate } from "@/app/util/date";
import { Card, CardHeader } from "@/components/ui/card";

export function CardNotification({notifications}:{notifications:INotifications[]}){
    return(
        <>
                            <div className="flex flex-col bg-gray-50 p-2 md:p-6 min-h-[400px] my-5 gap-2 ">
                            {notifications.map((item)=>(
                                    <Card key={item.id} className=" flex flex-col gap-3 ">
                                        <CardHeader>
                                                <p className="font-bold text-lg">
                                                    {item.title}
                                                </p>
                                                <p>
                                                    {item.message}
                                                </p>
                                                <p className="text-xs text-gray-600 ">
                                                    
                                                    {formatFirebaseDate(item.created_at).date} as {formatFirebaseDate(item.created_at).time}
                                                </p>
                                        </CardHeader>
                                    </Card>
                            ))}
                            

                    </div>
        </>
    )
}
