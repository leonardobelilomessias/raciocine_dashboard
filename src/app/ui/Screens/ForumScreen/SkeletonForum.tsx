import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonForum(){
    return(
    <div className="flex flex-col gap-2 w-full">
    <ListSkeleton/>
    <ListSkeleton/>
    <ListSkeleton/>

    </div>
    )
}

function ListSkeleton(){
return(
    <div className="flex flex-col gap-5 w-full">
    <div className="flex">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
    <div className="space-y-2 ml-2 ">
      <Skeleton className="h-8 w-[400px]" />
      <Skeleton className="h-4 w-[600px]" />
    </div>
  </div>
)
}