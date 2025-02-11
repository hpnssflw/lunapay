import intrologo from "@/assets/imgs/services/intro.png";

export const ServicesIntro = () => (
  <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-20 lg:py-0">
    <img src={intrologo} alt="" height={454} className="hidden lg:block" />

    <div className="flex flex-col w-full gap-5">
      <h1 className="hidden xl:block">
        Expert <br /> Payment <br /> Solutions
      </h1>

      <h1 className="xl:hidden ">Expert Payment Solutions</h1>

      <img src={intrologo} alt="" className="w-[334px] mx-auto lg:hidden" />

      <span className="font-normal lg:max-w-[453px]">
        Power your transactions with Luna Pay—an advanced solution that
        simplifies payments and keeps your business running without
        interruptions
      </span>
    </div>
  </div>
);
