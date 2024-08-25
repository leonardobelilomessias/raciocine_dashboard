import { Button } from "@/components/ui/button";
import { HeroDashboard } from "./HeroDashboard";
import TableDataFinance from "./TableDataFinance";
import { LaunchContainer } from "./LaunchContainer";
import { SelectedContainer } from "./SelectedContainer";
import { Suspense } from "react";
import { TableDataFinanceSkeleton } from "./TableDataFinanceSkeleton";

export async function DashboardScreen(){


    return(
        
        <div className="sm:container p-2 mt-5">
            
        <HeroDashboard/>
        <Suspense fallback={<TableDataFinanceSkeleton/>}>
            <TableDataFinance  />
        </Suspense>
        <Suspense fallback={<>loading</>}>
            <SelectedContainer />
        </Suspense>
        <Suspense fallback={<>loading</>}>
            <LaunchContainer />
        </Suspense> 
        </div>
    )
}