import { navigationElementsCommunity, navigationElementsTools } from "@/app/common/constants/navegationElements";
import { Separator } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AsideProductsButtons(){
    const pathname = usePathname()
    return(
        <>
                      
                  {navigationElementsTools.map((element) => (
                    <Link
                    //   rel="noreferrer noopener"
                      key={element.link}
                      href={element.link}
                      className={clsx(
                        'flex h-[48px] items-center grow gap-2 md:mx-1 rounded-md align-center  text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === element.link,
                        },
                      )}
                    >
                        <element.icon/>
                      {element.title}
                    </Link>
                  ))}

        </>
    )
}