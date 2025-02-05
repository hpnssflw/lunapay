import { Button } from "@/components/ui/button";
import React from "react";

export const HomePowering = () => {
  return (
    <section className="rounded-[45px] h-80 bg-slate-200 grid grid-cols-2 items-center px-[60px]">
      <div className="flex flex-col gap-[26px]">
        <h3>Let’s Power Your Payments</h3>

        <span className="font-normal">
          Ready to elevate your business with fast, secure, and seamless payment
          solutions?
        </span>

        <Button className="w-fit">Get Your Free Payment Proposal</Button>
      </div>

      <div className="bg-blue-500 rounded-xl h-10 w-8"></div>
    </section>
  );
};
