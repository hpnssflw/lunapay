import { Button } from "@/components/ui/button";
import { Badge } from "@/ui";
import { LinkStyled } from "@/ui/LInk";
import React from "react";

export const HomeSuccess = () => {
  return (
    <section className="w-full flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>Real Success Stories</h2>
        </Badge>
        <span className="font-normal">
          Discover how businesses thrive with our advanced payment <br />{" "}
          solutions.
        </span>
      </div>

      <div className="w-full  p-4 h-fit lg:h-80 bg-default rounded-[45px] py-[70px] px-[60px] flex flex-col lg:flex-row gap-14 font-normal">
        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>

          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
            iconSide="right"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>
          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconSide="right"
            iconTextColor="#81A8CB"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>

        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>
          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
            iconSide="right"
          />
        </div>
      </div>
    </section>
  );
};
