import React from "react";
import { cn } from "@/lib/utils"; // Utility function for class names
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center h-20">
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
            <Link to="/use-cases">
              <NavigationMenuLink className={cn(navLinkClasses)}>
                Use Cases
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Link 4 */}
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
          <Drawer.Portal >
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content
              className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
              // The gap between the edge of the screen and the drawer is 8px in this case.
              style={
                {
                  "--initial-transform": "calc(100% + 8px)",
                } as React.CSSProperties
              }
            >
              <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-2 text-zinc-900">
                    It supports all directions.
                  </Drawer.Title>
                  <Drawer.Description className="text-zinc-600 mb-2">
                    This one specifically is not touching the edge of the
                    screen, but that&apos;s not required for a side drawer.
                  </Drawer.Description>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
};
