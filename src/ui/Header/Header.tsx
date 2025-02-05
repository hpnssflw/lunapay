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
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import luna from "@/assets/imgs/luna-logo.png";

const navLinkClasses = `
  text-black hover:text-primary transition-colors duration-200 
  font-medium px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
`;

export const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center h-20">
      <a href="/" aria-label="Home Page">
        <img
          src={luna}
          alt="Company Name Logo"
          loading="lazy"
          className="h-[88px]"
        />
      </a>

      {/* navs */}
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center gap-4 efault p-4">
          {/* Link 1 */}
          <NavigationMenuItem>
            <NavigationMenuLink className={cn(navLinkClasses)}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Link 2 */}
          <NavigationMenuItem>
            <NavigationMenuLink className={cn(navLinkClasses)}>
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Link 3 */}
          <NavigationMenuItem>
            <NavigationMenuLink className={cn(navLinkClasses)}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Link 4 */}
          <NavigationMenuItem>
            <NavigationMenuLink className={cn(navLinkClasses)}>
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
