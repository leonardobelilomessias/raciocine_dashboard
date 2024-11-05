'use client'
import { formatFirebaseDate } from "@/app/util/date";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { axiosApi } from "@/lib/axios/axios";
import { Timestamp } from "firebase/firestore";
import { Bell, CalendarDays, Folder } from "lucide-react";
import { useEffect, useState } from "react";

interface INotifications{
    id:string
    id_user:string
    created_at:Date
    title:string
    message:String
}


export function NotificationsScreeen(){
    const [notifications,setNotifications] = useState([] as INotifications[])
    async function getNotifications(){
        const response = await axiosApi.get(`/api/getNotificationsUser`)
        setNotifications(response.data)
        console.log(response.data)
        // const {date} = formatFirebaseDateToDate(response.data[0].created_at)
        // console.log(date)
    }
    useEffect(()=>{
        getNotifications()
    },[])
    const notificatiosn:any[] =[1,2]
    return(
        <div className="container pt-10">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <Bell/>
                    Suas Notificações
                </CardTitle>
                <CardDescription>
                    Fique atento sempre enviamos promoções e novidades.
                </CardDescription>
                <div>
                </div>
            
                    {
                        notificatiosn&&
                    <div className="flex flex-col   pt-1 min-h-[400px] gap-2 ">
                            {notifications.map((item)=>(
                                    <Card key={item.id} className=" flex flex-col gap-3 ">
                                        <CardHeader>
                                                <p className="font-bold text-lg">
                                                    {item.title}
                                                </p>
                                                <p>
                                                    {item.message}
                                                </p>
                                                <p className="text-sm">
                                                    {formatFirebaseDate(item.created_at).date} as {formatFirebaseDate(item.created_at).time}
                                                </p>
                                        </CardHeader>
                                    </Card>
                            ))}
                        {!!(notifications.length<=0)&&<Card className=" flex flex-col gap-3 ">
                            <CardHeader>
                                <p>
                                    você ainda não tem nunhuma notificação.
                                </p>
                            </CardHeader>
                        </Card>}

                                                
                        <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                        </Pagination>

                    </div>
                    
                    }
                {
                        notificatiosn.length===0&&
                    <div className=" bg-gray-100 p-10 min-h-[400px] my-5">
                        <p className="text-blue-500 text-center text-bold"> você ainda não tem nunhuma notificação.</p>
                        

                    </div>
                
                }
            
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}