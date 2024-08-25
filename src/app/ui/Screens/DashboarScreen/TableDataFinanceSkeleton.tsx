import { Skeleton } from "@/components/ui/skeleton"

export function TableDataFinanceSkeleton() {
  return (
    <div className=" flex flex-col justify-center m-auto w-full">
        <div className=" px-10 pt-10 mb-5  flex flex-col justify-center w-full gap-3  ">
            <Skeleton className=" h-4 w-[60%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-[500px] w-[100%] rounded-xl" />
        </div>
        <div className=" px-10 pt-10 mb-5  flex flex-col justify-center w-full gap-3  ">
            <Skeleton className=" h-4 w-[60%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-[500px] w-[100%] rounded-xl" />
        </div>
    </div>
  )
}
