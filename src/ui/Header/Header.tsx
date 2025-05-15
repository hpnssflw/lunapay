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
import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileDialog, setShowMobileDialog] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const activeRoute = (v: string) => location.pathname === v;
  const genLink = (_: { path: string; label: string }) => (
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

  const handleMobileDialogOpen = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      setShowMobileDialog(true);
    }, 100);

    if (menuTriggerRef.current) {
      menuTriggerRef.current.click();
    }
  };

  return (
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
          trigger={
            <Button variant="outline" className="font-semibold">
              {" "}
              Contact Us Now{" "}
            </Button>
          }
          content={<RegisterDialog />}
        />
      </NavigationMenu>

      <Dialog
        open={showMobileDialog}
        onOpenChange={setShowMobileDialog}
        modal={true}
      >
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <RegisterDialog />
        </DialogContent>
      </Dialog>

      <NavigationMenu className="block xl:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              ref={menuTriggerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AlignJustify />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-4">
              <NavigationMenu className="bg-white w-full max-w-[350px] rounded-[25px] h-full py-20 flex-col flex cursor-pointer">
                <NavigationMenuList className="flex flex-col justify-center gap-4 efault p-4">
                  {routes.map(genLink)}
                </NavigationMenuList>
                <NavigationMenuItem>
                  <Button
                    variant="outline"
                    className="font-semibold"
                    onClick={handleMobileDialogOpen}
                  >
                    {" "}
                    Contact Us Now{" "}
                  </Button>
                </NavigationMenuItem>
              </NavigationMenu>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
