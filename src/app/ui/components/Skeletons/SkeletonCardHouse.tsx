import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardHouse(){
    return(
    <div className="flex flex-col md:flex-row flex-wrap gap-2 w-full bg-gray-50">
    <ListSkeleton/>
    <ListSkeleton/>
    <ListSkeleton/>
    <ListSkeleton/>
    <ListSkeleton/>
    <ListSkeleton/>
    </div>
    )
}

function ListSkeleton(){
return(
    <div className="flex flex-col  gap-5  p-4 ">
    <div className="space-y-2 ">
      <Skeleton className="h-8 w-[280px] h-[150px]" />
      <Skeleton className="h-4 w-[280px]" />
      <Skeleton className="h-4 w-[280px]" />
      <Skeleton className="h-4 w-[280px]" />
      <Skeleton className="h-12 w-[280px]" />
    </div>
  </div>
)
}