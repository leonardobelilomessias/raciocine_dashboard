import { Button } from "@/components/ui/button";

export function PaginationButtons({step,execFunction,totalPages}:{step:number, execFunction:(isPrevious:boolean,isFirst:boolean)=>Promise<void>, totalPages:number}){
    return(
        <div className="flex gap-3 border rounded p-2">
        
        <Button
        className="flex gap-3 rounded p-2"
          disabled={step<=0}
          onClick={() => execFunction(true,false)}
          
        >
          Anterior
        </Button>
        <Button
        className="flex gap-3 rounded p-2"
          disabled={totalPages==step+1}
          onClick={() => execFunction(false,false)}
          
        >
          Proxima
        </Button>
  
    </div>
    )
}