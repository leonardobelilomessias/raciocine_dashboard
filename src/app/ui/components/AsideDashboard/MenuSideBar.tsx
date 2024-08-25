"use client"
import { INavigationElemets } from "@/app/types/types";
import clsx from "clsx";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";
export  function MenuSideBar({navigationElements}:{navigationElements:INavigationElemets[]}){
    const pathname = usePathname()
    return(
        <>
        {
                navigationElements.map((element)=>(
                    <Link
                    key={element.link}
                    href={element.link}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === element.link,
              },
            )}
                    >
                        <element.icon/>
                        <p>{element.title}</p>
                    </Link>
                ))
            }
        </>
    )
}