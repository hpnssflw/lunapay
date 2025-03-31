import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { navLinkClasses, routes } from "@/shared/constants";
import luna from "@/assets/imgs/luna-logo.png";
import { DialogWrapper, RegisterDialog } from "../Dialogs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    <Dialog>
      <div className="flex flex-row w-full fixed xl:relative xl:flex bg-secondary md:bg-opacity-100 xl:bg-opacity-20 z-20 max-w-[1240px] justify-between items-center h-20 rounded-xl">
        <a href="/" aria-label="Home Page">
          <img
            src={luna}
            alt="Company Name Logo"
            loading="lazy"
            className="h-[88px] w-[344px]"
          />
        </a>

        <NavigationMenu className="hidden xl:inline-flex cursor-pointer">
          <NavigationMenuList className="flex justify-center gap-4 efault p-4">
            {routes.map(genLink)}
          </NavigationMenuList>

          <DialogWrapper
            trigger={<Button variant="outline"> Contact Us Now </Button>}
            content={<RegisterDialog />}
          />
        </NavigationMenu>

        <NavigationMenu className="block xl:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <AlignJustify />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4">
                <NavigationMenu className="bg-white w-full max-w-[350px] rounded-[25px] h-full py-20 flex-col flex cursor-pointer">
                  <NavigationMenuList className="flex flex-col justify-center gap-4 efault p-4">
                    {routes.map(genLink)}
                  </NavigationMenuList>
                  <NavigationMenuItem>
                    <DialogTrigger asChild>
                      <Button variant="outline"> Contact Us Now </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <RegisterDialog />
                    </DialogContent>
                  </NavigationMenuItem>
                </NavigationMenu>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Dialog>
  );
};
