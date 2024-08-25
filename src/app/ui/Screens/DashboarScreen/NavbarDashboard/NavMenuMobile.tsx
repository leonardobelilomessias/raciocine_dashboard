'use client'
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface RouteProps {
    href: string;
    label: string;
  }
const routeList: RouteProps[] = [
    {
      href: "/suporte",
      label: "Suporte",
    },
    {
      href: "/perfil",
      label: "Perfil",
    },
    {
      href: "/notificacoes",
      label: "Notificaçoes",
    },
  ];
import { Bell, BotOff, Hotel, LogOut, Menu } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { LogoIcon } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationElementsAccount, navigationElementsCommunity, navigationElementsTools } from "@/app/common/constants/navegationElements";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NavMenuMobile(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname()
    return(
        <>
                  {/* mobile */}
                  <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  {/* <span className="sr-only">Menu Icon</span> */}
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
    
                {/* navigation account */}
                <nav className="flex flex-col  gap-2 mt-0">
                <p className='flex h-[32px] grow  rounded-md  p-3 text-sm font-medium   md:flex-none  md:p-2 md:px-3'>Conta</p>
                <Separator />
                  {navigationElementsAccount.map((element) => (
                    <Link
                      rel="noreferrer noopener"
                      key={element.link}
                      href={element.link}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'flex h-[48px] grow gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === element.link,
                        },
                    )}
                    >
            
                        <element.icon/>
                      {element.title}
                    </Link>
                  ))}

                </nav>

                {/* navigation comunidade */}
                <nav className="flex flex-col  gap-2 mt-4">
                <p className='flex h-[32px] grow   gap-2 rounded-md  p-3 text-sm font-medium   md:flex-none  md:p-2 md:px-3'>Comunidade</p>
                <Separator />
                  {navigationElementsCommunity.map((element) => (
                    <Link
                      rel="noreferrer noopener"
                      key={element.link}
                      href={element.link}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'flex h-[48px] grow gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === element.link,
                        },
                      )}
                    >
                        <element.icon/>
                      {element.title}
                    </Link>
                  ))}

                </nav>
            
                {/* navigation tools */}
                <nav className="flex flex-col  gap-2 mt-4">
                <p className='flex h-[32px] grow   gap-2 rounded-md  p-3 text-sm font-medium   md:flex-none  md:p-2 md:px-3'>Produtos</p>
                <Separator />
                  {navigationElementsTools.map((element) => (
                    <Link
                      rel="noreferrer noopener"
                      key={element.link}
                      href={element.link}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'flex h-[48px] grow gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === element.link,
                        },
                      )}
                    >
                        <element.icon/>
                      {element.title}
                    </Link>
                  ))}

                </nav>
                
              </SheetContent>
            </Sheet>
          </span>
                  {/* desktop */}
        <div className="flex hidden md:flex gap-2">

                  <nav >
                    {routeList.map((route: RouteProps, i) => (
                        <a
                        rel="noreferrer noopener"
                        href={route.href}
                        key={i}
                        className={`text-[17px] ${buttonVariants({
                            variant: "ghost",
                        })}`}
                        >
                        {
                          route.href==='/notificacoes'?<Bell className="align-center" width={20} height={16}/>:
                        route.label
                        }
                      </a>
                    ))}
                  </nav>

                  <div className="hidden md:flex gap-2">
                  <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                    {/* <ModeToggle /> */}
                  </div>
        
        </div>
        </>
    )
}