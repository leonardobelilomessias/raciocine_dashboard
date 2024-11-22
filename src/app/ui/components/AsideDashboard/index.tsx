"use client"
import { navigationDev, navigationElementsAccount, navigationElementsCommunity, navigationElementsTools } from "@/app/common/constants/navegationElements";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AsideAccountButtons } from "./AsideAccountButtons";
import { AsideCommunityButtons } from "./AsideCommunityButtons";
import { AsideProductsButtons } from "./AsideProductsButtons";

export function AsideDashBoard(){
const pathname = usePathname();

return(
            <aside className="w-[14.9%] hidden md:block fixed border-r h-full border-gray-200    overflow-y-scroll pb-20">
            <p className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3'>Comunidade</p>
            <Separator />
            <AsideCommunityButtons/>

                                {/* navigation community */}
            <p className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3'>Comunidade</p>
            <Separator />

                <AsideAccountButtons/>
            
            {/* menu tools */}
                <p className='flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3'>Produtos</p>
                <Separator />
                <AsideProductsButtons/>
            {/* menu dev */}
            <p className='flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3'>Desenvolvimento</p>
            <Separator/>
            {
                navigationDev.map((element)=>(
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
        </aside>
    )
}