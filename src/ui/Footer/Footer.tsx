import luna from "@/assets/imgs/luna-logo-white.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

import { Link, useLocation } from "react-router";
import { navLinkClasses, routes } from "@/shared/constants";
import { Badge } from "../Badge/Badge";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const location = useLocation();

  const activeRoute = (v: string) => location.pathname === v;
  const genLink = (_: { path: string; label: string }) => (
    <NavigationMenuItem>
      <Link to={_.path}>
        <NavigationMenuLink
          className={cn(
            navLinkClasses,
            "text-white underline",
            activeRoute(_.path) && "text-primary"
          )}
        >
          {_.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );

  return (
    <footer className="flex flex-col w-full max-w-[1240px] p-5 lg:p-[60px] text-white md:rounded-tr-[45px] mt-20 md:rounded-tl-[45px] bg-default">
      {/* Блок с логотипом, навигацией и соцсетями */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
        <a href="/" aria-label="Home Page">
          <img
            src={luna}
            alt="Company Name Logo"
            loading="lazy"
            className="h-[88px] w-[344px]"
          />
        </a>

        {/* Контейнер для навигации и соцсетей */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <NavigationMenu className="cursor-pointer">
            <NavigationMenuList className="flex justify-center items-center flex-col md:flex-row gap-4 p-4">
              {routes.map(genLink)}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Ссылки на соцсети с иконками */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.linkedin.com/company/luna-pay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573044662567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Секция с контактами и формой подписки */}
      <section className="grid text-center lg:text-left grid-cols-1 lg:grid-cols-[30%_1fr] gap-10 lg:gap-20 py-10">
        {/* Левая колонка: Контакты */}
        <div className="w-full flex flex-col gap-5 items-center lg:items-start font-normal">
          <Badge className="text-black font-medium" text="20px">
            Contact us
          </Badge>
          <p className="font-normal">
            Email:{" "}
            <a
              href="mailto:account@luna-pay.com"
              className="underline text-white"
            >
              hello@luna-pay.com
            </a>
          </p>
          <p className="font-normal">
            Address:{" "}
            <a
              href="https://www.google.com/maps/place/Epworth+House+25+City+Road+London+England+EC1Y+1AA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              Office 211, Epworth House 25 City Road, London, England, EC1Y 1AA
            </a>
          </p>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white mb-10" />

      <div className="flex flex-col lg:flex-row text-center items-center lg:text-left mx-auto lg:mx-0 gap-10 font-normal">
        <span>© 2025 LunaPay. All Rights Reserved.</span>
        <a
          href="/docs/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="https://luna-pay.com/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Declaration
        </a>
      </div>
    </footer>
  );
};
