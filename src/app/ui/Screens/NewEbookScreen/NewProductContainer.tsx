import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { NewEbookForm } from "./NewEbookForm";
;

export function NewProductContainer(){
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
    <CardTitle className="flex" > 
        {/* <Rocket className="mr-1"/> */}
         Novo Ebook</CardTitle>
    <CardDescription>
        Aqui estão a lista de todos os produtos
    </CardDescription>
  </CardHeader>



  <div className="flex flex-col flex-wrap gap-3 m-auto">
    <NewEbookForm/>

  </div>

        </Card>
        </div>
    )
}