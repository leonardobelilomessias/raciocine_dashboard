'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { PaginationButtons } from "../../components/PaginationButtons";
import { EmptyNotification } from "./EmptyNotification";
import { INotifications } from "@/app/types/types";
import { CardNotification } from "./CardNotification";
import { HeaderNotifications } from "./HeaderNotifications";
import { SkeletonNotifications } from "../../components/Skeletons/SkeletonNotifications";
import { set } from "date-fns";

export function NotificationsScreen(){
    const fetchNotification = async (pageSize: number, cursor: string | null | undefined, isPrevious:boolean, isFirst?:boolean, ) => {
        const res = await fetch(`/api/getNotificationsUser?pageSize=${pageSize}&isPrevious=${isPrevious}&lastCursor=${cursor || ""}&isFirst=${isFirst||""}&stepPage=${step}`);
        const data = await res.json();
        return data;
      };
    const [lastCursors, setLastCursor] = useState<string>(); // Cursors para cada página
    const [totalPages, setTotalPages] = useState(0);
    const [step,setStep] = useState(0)
    const pageSize = 5;
    const[load,setLoad]= useState(false)
    const [firstCursor,setFirstCusor] = useState<string |null | undefined>()
    const [notifications,setNotifications] = useState([] as INotifications[])
    async function getNotifications(isPrevious:boolean,isFirst:boolean){
        setNotifications([])
        setLoad(true)
        try{
            if(isFirst){
                const notificationsData = await fetchNotification(pageSize, null, isPrevious, isFirst)
                setNotifications(notificationsData.data)
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
    })
    return(
        <div className="container pt-10">
            <Card className="mt-4">
                <HeaderNotifications/>
                <CardContent>
                    {load && <SkeletonNotifications/>}
                    {notifications.length === 0 && load === false && <EmptyNotification />}
                    {notifications.length>0 &&<CardNotification notifications={notifications}/>}
                </CardContent>
                <CardFooter>
                    <PaginationButtons execFunction={getNotifications} step={step} totalPages={totalPages}/>
                </CardFooter>
                
            </Card>

        </div>
    )
}
