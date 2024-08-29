import { CardDescription } from "@/components/ui/card";

export function TextContent({text}:{text:string}){
    return(
        <>
                <CardDescription className="pb-[50px]">
                    {text}
                </CardDescription>
        </>
    )
}