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

const genFooterNavItem = (i: any) => (
  <NavigationMenuItem>
    <NavigationMenuLink className={cn(navLinkClasses)}>
      {i.path}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full max-w-[1240px] p-5 lg:p-[60px] text-white rounded-tr-[45px] mt-20  rounded-tl-[45px] bg-default ">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full ">
        <img src={luna} alt="Luna Pay logo" className="h-[77px] " />

        <NavigationMenu>
          <NavigationMenuList className=" flex flex-col lg:flex-row justify-center gap-4  p-4">
            {routes.map(genFooterNavItem)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <section className="grid text-center lg:text-left grid-cols-1 lg:grid-cols-[30%_1fr] lg:gap-20 py-10">
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
          className="flex flex-col w-full lg:flex-row bg-[#292A32] p-10 rounded-[25px] my-auto lg:h-[184px] items-center gap-2"
        >
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent border-white lg:h-[68px]  placeholder:text-white placeholder:font-normal"
          />
          <Button variant="primary" className="w-full lg:w-fit">
            Subscribe to news
          </Button>
        </form>
      </section>

      <div className="w-full h-[1px] bg-white mb-10"></div>

      <div className="flex flex-col lg:flex-row text-center lg:text-left mx-auto lg:mx-0 gap-10 font-normal">
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
