import { Button } from "@/components/ui/button";
import { Badge } from "@/ui";
import React from "react";

export const HomeSuccess = () => {
  return (
    <section className="w-full flex flex-col gap-20">
      <div className="flex items-center gap-10">
        <Badge>
          <h2>Real Success Stories</h2>
        </Badge>
        <span className="font-normal">
          Discover how businesses thrive with our advanced payment <br />{" "}
          solutions.
        </span>
      </div>

      <div className="w-full  p-4 h-80 bg-black rounded-[45px] py-[70px] px-[60px] flex gap-14">
        <div className="flex flex-col text-white justify-between font-normal">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>

          <Button>Learn more</Button>
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between font-normal">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>

          <Button>Learn more</Button>
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>

        <div className="flex flex-col text-white justify-between font-normal">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>

          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
};
