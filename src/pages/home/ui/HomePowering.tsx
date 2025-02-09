import { Button } from "@/components/ui/button";
import React from "react";
import powering from "@/assets/imgs/home/powering.png";

export const HomePowering = () => {
  return (
    <section className="rounded-[45px] h-80 -z-10 bg-secondary grid grid-cols-1  lg:grid-cols-2 items-center px-[60px]">
      <div className="flex flex-col gap-[26px]">
        <h3>Let’s Power Your Payments</h3>

        <span className="font-normal">
          Ready to elevate your business with fast, secure, and seamless payment
          solutions?
        </span>

        <Button className="w-fit">Get Your Free Payment Proposal</Button>
      </div>

      <div className="relative  h-full">
        <img
          src={powering}
          alt=""
          className="hidden lg:block lg:absolute -top-40 -z-10 "
        />
      </div>
    </section>
  );
};
