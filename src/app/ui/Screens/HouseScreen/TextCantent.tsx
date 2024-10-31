import { CardDescription } from "@/components/ui/card";

export function TextContent({text}:{text:string}){
    return(
        <>
                <CardDescription style={{ whiteSpace: "pre-wrap" }} className="pb-[50px]">
                    {text}
                </CardDescription>
        </>
    )
}