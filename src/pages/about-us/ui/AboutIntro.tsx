import aboutlogo from "@/assets/imgs/aboutus/intro.png";

export const AboutIntro = () => (
  <div className="flex flex-col-reverse lg:grid  lg:grid-cols-2  items-center gap-10">
    <img src={aboutlogo} alt="" height={377} className=" w-[590px]" />

    <div className="flex flex-col gap-5">
      <h1>
        Together for Payment <br /> Success
      </h1>

      <span className="font-normal">
        Luna Pay is more than a payment provider—we’re your strategic partner in
        financial growth. With secure, efficient, and scalable solutions, we
        help businesses thrive in an ever-evolving digital economy.
      </span>
    </div>
  </div>
);
