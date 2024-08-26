
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TvMinimalPlay } from "lucide-react";
import { VideoAccordion } from "./VideoAcordion";


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
                <div>
                    
                </div>
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