import { navigationElementsAccount, navigationElementsCommunity } from "@/app/common/constants/navegationElements";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";import Link from "next/link";
import { usePathname } from "next/navigation";

export function AsideCommunityButtons(){
    const pathname = usePathname()
    return(
        <>
                <nav className="flex flex-col  gap-1 ">
                <Separator />
                  {navigationElementsCommunity.map((element) => (
                    <Link
                    //   rel="noreferrer noopener"
                      key={element.link}
                      href={element.link}
                      className={clsx(
                        'flex h-[48px] items-center grow gap-2 md:mx-1 rounded-md align-center  text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600 font-bold': pathname === element.link,
                        },
                      )}
                    >
                        <element.icon/>
                      {element.title}
                    </Link>
                  ))}

                </nav>
        </>
    )
}