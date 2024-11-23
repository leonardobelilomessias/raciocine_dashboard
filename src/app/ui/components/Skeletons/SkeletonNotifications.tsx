import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonNotifications(){
    return(
    <div className="flex flex-col gap-2 w-full">
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
    <div className="flex flex-col flex-wrap gap-5 w-full p-4 bg-gray-50">
    <div className="space-y-2 ">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[200px]" />

    </div>
  </div>
)
}