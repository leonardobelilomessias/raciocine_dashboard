'use client'
import { formatFirebaseDate } from "@/app/util/date";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { axiosApi } from "@/lib/axios/axios";
import { Timestamp } from "firebase/firestore";
import { Bell, CalendarDays, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import { PaginationButtons } from "../../components/PaginationButtons";

interface INotifications{
    id:string
    id_user:string
    created_at:Date
    title:string
    message:String
}

const fetchNotification = async (pageSize: number, cursor: string | null | undefined, isPrevious:boolean, isFirst?:boolean, stepPage?:number) => {
    const res = await fetch(`/api/getNotificationsUser?pageSize=${pageSize}&isPrevious=${isPrevious}&lastCursor=${cursor || ""}&isFirst=${isFirst||""}&stepPage${stepPage}`);
    const data = await res.json();
    return data;
  };
export function NotificationsScreen(){
    const [lastCursors, setLastCursor] = useState<string>(); // Cursors para cada página
    const [totalPages, setTotalPages] = useState(0);
    const [step,setStep] = useState(0)
    const pageSize = 3;
    const[load,setLoad]= useState(false)
    const [firstCursor,setFirstCusor] = useState<string |null | undefined>()
    const [notifications,setNotifications] = useState([] as INotifications[])
    async function getNotifications(isPrevious:boolean,isFirst:boolean){

        setLoad(true)
        try{
            if(isFirst){
                const notificationsData = await fetchNotification(pageSize, null, isPrevious, isFirst)
                setNotifications( notificationsData.data)
                console.log("passando=>",notificationsData)
                setTotalPages( notificationsData.totalPages);
                setLastCursor( notificationsData.lastCursor)
                setFirstCusor( notificationsData.firstCursor)
                
            }
            if(!isPrevious && !isFirst){
                
                const notificationsData = await fetchNotification(pageSize, lastCursors, isPrevious, isFirst)
                setNotifications( notificationsData.data)
                console.log("passando=>",notificationsData)
                setTotalPages( notificationsData.totalPages);
                setLastCursor( notificationsData.lastCursor)
                setFirstCusor( notificationsData.firstCursor)
                setStep( notificationsData.stepPage)
            }
            if(isPrevious){
                const cursor = notifications[0].id
                const notificationsData = await fetchNotification(pageSize, firstCursor, isPrevious, isFirst)
                setNotifications( notificationsData.data)
                console.log("passando=>",notificationsData)
                setTotalPages( notificationsData.totalPages);
                setLastCursor( notificationsData.lastCursor)
                setFirstCusor( notificationsData.firstCursor)
                setStep( notificationsData.stepPage)
            }

        }catch(e){
            throw(e)
        }finally{
            setLoad(false)
        }
    }
    useEffect(()=>{
        getNotifications(false,true)
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

                        <PaginationButtons execFunction={getNotifications} step={step} totalPages={totalPages}/>
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