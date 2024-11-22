
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TvMinimalPlay } from "lucide-react";
import { VideoAccordion } from "./VideoAcordion";
import { VideoPlayer } from "../../components/Videoplayer";


export function VideosScreen(){
    return(
        <div className="sm:container pt-10 mx-2">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <TvMinimalPlay/>
                    Videos
                </CardTitle>
                <CardDescription>
                    Melhores videos para você está por dentro do tudo!
                </CardDescription>
                {/* <div className="bg-grat-50 gap-4 flex p-4 ">
                    <VideoCard/>
                    <VideoCard/>

                </div> */}
                <CardContent>
                <VideoAccordion/>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}

function VideoCard(){
    return(
        <div>
            <div className="bg-gray-200 h-[170px] w-[300px] rounded"></div>
            <p className="px-1">como financiar o primeiro imovel</p>
        </div>
    )
}