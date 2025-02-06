import React from "react";
import luna from "@/assets/imgs/luna-logo-white.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const genFooterNavItem = (i: any, index: number) => (
  <NavigationMenuItem>
    <NavigationMenuLink className={cn(navLinkClasses)}>
      {i.path}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-[60px] text-white rounded-tr-[45px] mt-20  rounded-tl-[45px] bg-default ">
      <div className="flex w-full ">
        <img src={luna} alt="Luna Pay logo" className="h-[77px]" />

        <NavigationMenu>
          <NavigationMenuList className="flex  justify-center gap-4 efault p-4">
            {routes.map(genFooterNavItem)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <section className="grid grid-cols-2 py-10">
        <div className="w-full flex flex-col gap-5 font-normal">
          <p>Contact us:</p>
          <p>Email: info@lunapay.com</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
          <p></p>
        </div>

        <form
          action=""
          className="flex bg-gray-800 p-10 rounded-[25px] my-auto h-[184px] items-center gap-2"
        >
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent border-white placeholder:text-white placeholder:font-normal"
          />
          <Button variant="ghost">Subscribe to news</Button>
        </form>
      </section>

      <div className="w-full h-[1px] bg-white mb-10"></div>

      <div className="flex gap-10 font-normal">
        <span>© 2025 LunaPay. All Rights Reserved.</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export const routes = [
  {
    path: "about-us",
  },
  {
    path: "services",
  },
  {
    path: "use-cases",
  },
  {
    path: "pricing",
  },
  {
    path: "blog",
  },
];
const navLinkClasses = `
    text-white hover:text-primary transition-colors duration-200 
    font-normal uppercase  rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
  `;
