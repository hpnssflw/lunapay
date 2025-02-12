import likelogo from "@/assets/imgs/aboutus/like.png";

import starwhite from "@/assets/imgs/star-white.svg";
import starbig from "@/assets/imgs/aboutus/star-big.svg";

export const AboutBanner = () => (
  <section className="grid grid-cols-1 grid-rows-[1fr_190px] md:grid-rows-1 lg:grid-cols-2 bg-default text-white border-b-[6px] rounded-[45px] p-10">
    <div className="z-10 relative  bottom-[20%] w-[500px] ml-20 hidden md:block">
      <img
        src={likelogo}
        alt=""
        className="w-[387px] relative -left-[7%] z-20"
      />
      <div className="h-[88px] w-[422px] border rounded-[100%] border-primary absolute top-[40%] -left-[10%] -z-10" />
      <div className="h-[88px] w-[422px] border rounded-[100%] border-primary absolute top-[47%] -left-[10%] -z-10" />
      <div className="h-[88px] w-[422px] border rounded-[100%] border-primary absolute top-[54%] -left-[10%] -z-10" />
      <img src={starwhite} alt="" className="absolute top-[65%]" />
      <img
        src={starwhite}
        alt=""
        className="absolute top-[25%] right-[30%] rotate-45"
      />
      <img src={starbig} alt="" className="absolute top-[60%] right-[35%] " />
    </div>

    <div className="flex flex-col gap-10">
      <p className="font-bold text-[26px] xl:text-[41px]">
        “At Luna Pay, we believe that success is powered by integrity,
        flexibility and expertise, allowing us to adapt and innovate in a
        dynamic financial landscape.We are able to unlock the potential of the
        win-win approach, fostering strong, mutually beneficial partnerships”
      </p>

      <p className="font-normal text-[24px]">-Luna Pay Team 🚀</p>
    </div>

    <img
      src={likelogo}
      alt=""
      className="max-w-[387px] min-w-[350px]  w-full relative  block -top-[90px] left-[40px] md:hidden"
    />
  </section>
);
