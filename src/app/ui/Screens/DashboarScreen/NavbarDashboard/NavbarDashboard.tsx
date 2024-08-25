'use server'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";


import {  Hotel, LogOut, PowerIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavMenuMobile } from "./NavMenuMobile";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { ButtonDignOut } from "./ButtonSignOut";


export const NavbarDashboard = () => {

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/dashboard"
              className="ml-2 font-bold text-xl flex"
            >
              <Hotel />
              CANP
            </a>
          </NavigationMenuItem>
          <div className="flex gap-5">

          <NavMenuMobile/>

        <ButtonDignOut/>

          </div>

          
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
