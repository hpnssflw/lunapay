import { Button } from "@/components/ui/button";
import React from "react";

import planet from "@/assets/imgs/home/planet-logo.png";

export const HomeIntro = () => {
  return (
    <section className="lg:grid grid-cols-2 gap-x-10 max-w-[1240px]">
      <div className="flex flex-col gap-10 mt-[80px]">
        <h1>
          Seamless and Secure Payment Processing for <br /> Every Business
        </h1>
        <img
          src={planet}
          alt=""
          className="w-[310px] mx-auto aspect-square  lg:hidden"
        />

        <h4 className="font-normal">
          Fast, reliable, and easy-to-integrate payment solutions tailored for
          online businesses and merchants worldwide.
        </h4>

        <Button className="md:w-fit w-full  ">Open an account</Button>
      </div>
      <div className="">
        <img src={planet} alt="" className="hidden lg:block" />
      </div>
    </section>
  );
};
