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
import { Link } from "react-router";

import luna from "@/assets/imgs/luna-logo.png";
import { Button } from "@/components/ui/button";

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
      <NavigationMenu className="cursor-pointer">
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

        <Button> Request a quote</Button>
      </NavigationMenu>
    </div>
  );
};
