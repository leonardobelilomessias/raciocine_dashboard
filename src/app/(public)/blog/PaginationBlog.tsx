'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function PaginationBlog({totalPages,page}:{totalPages:any,currentPage:any,page:any}){
    
    const router = useRouter();
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const currentPage = parseInt(searchParams?.get("page") || "1", 10);
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
      };
    const handlePageChange = (page: number) => {
        if (page) {
            params.set('page', String(page));
          } else {
            params.delete('page');
          }
        replace(`${pathname}?${params.toString()}`);
        //  router.push(`?page=${page}`);
      };
    return(
                
        <div className="flex justify-center mt-20 gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <Button 
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                disabled={page === currentPage}
              >
                {page}
              </Button>
            )
          )}
        </div> 
    )
}