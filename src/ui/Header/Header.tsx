import React from "react";
import { cn } from "@/lib/utils"; // Utility function for class names
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

const navLinkClasses = `
  text-black hover:text-primary transition-colors duration-200 
  font-medium px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
`;

export const Header = () => {
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

      {/* navs */}
      <NavigationMenu className="hidden xl:inline-flex cursor-pointer">
        <NavigationMenuList className="flex justify-center gap-4 efault p-4">
          {/* Link 1 */}
          <NavigationMenuItem>
            <Link to="/about-us">
              <NavigationMenuLink className={cn(navLinkClasses)}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Link 2 */}
          <NavigationMenuItem>
            <Link to="/services">
              <NavigationMenuLink className={cn(navLinkClasses)}>
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Link 3 */}
          <NavigationMenuItem>
            <Link to="/blog">
              <NavigationMenuLink className={cn(navLinkClasses)}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <Button variant="outline"> Request a quote</Button>
      </NavigationMenu>

      <div className=" xl:hidden">
        <Drawer.Root direction="right">
          <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
            Open Drawer
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
                  {/* Link 1 */}
                  <NavigationMenuItem>
                    <Link to="/about-us">
                      <NavigationMenuLink className={cn(navLinkClasses)}>
                        About us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Link 2 */}
                  <NavigationMenuItem>
                    <Link to="/services">
                      <NavigationMenuLink className={cn(navLinkClasses)}>
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Link 3 */}
                  <NavigationMenuItem>
                    <Link to="/blog">
                      <NavigationMenuLink className={cn(navLinkClasses)}>
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
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
