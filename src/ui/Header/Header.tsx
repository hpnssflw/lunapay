import React from "react";
import { cn } from "@/lib/utils"; // Utility function for class names
import { useLocation } from "react-router";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

import luna from "@/assets/imgs/luna-logo.png";
import { Button } from "@/components/ui/button";
// import {
//   DrawerTrigger,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerClose,
//   Drawer,
// } from "@/components/ui/drawer";
import { Drawer } from "vaul";
import { AlignJustify } from "lucide-react";
import { navLinkClasses, routes } from "@/shared/constants";

export const Header = () => {
  const location = useLocation();

  const activeRoute = (v: string) => location.pathname === v;
  const genLink = (_: any) => (
    <NavigationMenuItem>
      <Link to={_.path}>
        <NavigationMenuLink
          className={cn(navLinkClasses, activeRoute(_.path) && "text-primary")}
        >
          {_.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );

  return (
    <div className="flex flex-row w-full fixed xl:relative xl:flex bg-white z-20 max-w-[1240px] justify-between items-center h-20">
      <a href="/" aria-label="Home Page">
        <img
          src={luna}
          alt="Company Name Logo"
          loading="lazy"
          className="h-[88px] w-full"
        />
      </a>

      <NavigationMenu className="hidden xl:inline-flex cursor-pointer">
        <NavigationMenuList className="flex justify-center gap-4 efault p-4">
          {routes.map(genLink)}
        </NavigationMenuList>

        <Button variant="outline"> Request a quote</Button>
      </NavigationMenu>

      <div className=" xl:hidden">
        <Drawer.Root direction="right">
          <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium  transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
            <AlignJustify />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content
              className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
              style={
                {
                  "--initial-transform": "calc(100% + 8px)",
                } as React.CSSProperties
              }
            >
              {/* navs */}
              <NavigationMenu className="bg-white rounded-[25px] w-[300px] px-10 flex-col flex cursor-pointer">
                <NavigationMenuList className="flex flex-col justify-center gap-4 efault p-4">
                  {routes.map(genLink)}
                </NavigationMenuList>

                <Button variant="outline"> Request a quote</Button>
              </NavigationMenu>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
};
