import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export function EditProductContainer({children}:{children:ReactNode}){
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
    <CardTitle className="flex" > 
        {/* <Rocket className="mr-1"/> */}
         Editar Produto</CardTitle>
    <CardDescription>
        Aqui você pode editar os seus produtos
    </CardDescription>
  </CardHeader>



  <div className="flex flex-col flex-wrap gap-3 m-auto">
{children}


  </div>

        </Card>
        </div>
    )
}