import { Badge } from "@/ui";
import React from "react";
import blogintro from "@/assets/imgs/blog/intro.png";

export const BlogPage = () => {
  return (
    <section className="flex flex-col gap-10 w-full py-10">
      <section className="rounded-[45px] bg-secondary grid grid-cols-2 items-center ">
        <img src={blogintro} alt="" />

        <div className="flex flex-col gap-10 pr-40">
          <Badge>
            <p>Fintech Trends</p>
          </Badge>
          <h2>The Future of Fintech: Top Trends to Watch in 2025</h2>

          <span className="font-normal">
            As innovation accelerates, so does the potential for fintech to
            reshape the way people and businesses interact with their finances.
            The numbers speak volumes — according to Market Data Forecast, the
            global fintech market is expected to reach $1264.6 billion by 2032,
            fueled by rising demand for digital payments, personalized financial
            solutions, and streamlined regulatory compliance.
          </span>
        </div>
      </section>
    </section>
  );
};
