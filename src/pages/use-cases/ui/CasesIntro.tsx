import planet from "@/assets/imgs/home/planet-logo.png";

export const CasesIntro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 rounded-[45px] p-10 bg-secondary">
      <div className="">
        <img src={planet} alt="" className=" hidden lg:block" />
      </div>
      <div className="flex flex-col gap-10 mt-[80px]">
        <h1>Proven Success Stories</h1>
        <img src={planet} alt="" className=" block lg:hidden w-80 mx-auto" />
        <h4 className="font-normal w-[454px]">
          Discover how Luna Pay’s advanced payment solutions have transformed
          businesses across various industries. From e-commerce to global
          enterprises, our use cases showcase real-world success powered by
          secure, fast, and scalable payment technologies. Explore how we help
          businesses grow, optimize transactions, and achieve their financial
          goals.
        </h4>
      </div>
    </section>
  );
};
