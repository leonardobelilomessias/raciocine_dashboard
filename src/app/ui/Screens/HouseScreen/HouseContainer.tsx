
import { IProduct } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { BedDouble, BookText, CalendarDays, Car, Download, Hotel, MapPin, MessageCircleQuestion, Ruler, ShowerHead, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import { LocationHouse } from "./LocationHouse";
import { ListFeaturesHome } from "./ListFeaturesHome";
import { HeaderHouse } from "./HeaderHouse";
import { TextContent } from "./TextCantent";
import { ReactNode } from "react";


export function HouseContainer({children}:{children:ReactNode}){

    return(
        <div className="sm:container  mx-2">
            <Card className="mt-4">
                {children}
            </Card>

        </div>
    )
}


