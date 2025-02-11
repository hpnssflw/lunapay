import { Button } from "@/components/ui/button";

import planet from "@/assets/imgs/home/planet-logo.png";
import star from "@/assets/imgs/star-black.svg";

export const HomeIntro = () => {
  return (
    <section className="lg:grid grid-cols-2 gap-x-10 max-w-[1240px]">
      <div className="flex flex-col gap-10 mt-[80px]">
        <h1>The Future of Payments</h1>
        <img
          src={planet}
          alt="Luna-pay logo"
          className="w-[310px] mx-auto aspect-square  lg:hidden"
        />

        <h4 className="font-normal">
          Empower your business with secure, high-performance payment solution
        </h4>

        <Button className="md:w-fit w-full ">Create Your Account</Button>
      </div>
      <div className="relative hidden lg:block">
        <div className="w-12 h-12 bg-black rounded-full absolute top-[20px] left-[40px]" />
        <div className="w-8 h-8 bg-primary rounded-full absolute top-[90px] left-[120px]" />
        <div className="w-5 h-5 bg-primary rounded-full absolute bottom-[130px] right-[95px]" />
        <img
          src={star}
          alt="Luna-pay logo"
          className="w-20 h-20  rounded-full absolute bottom-[95px] left-[65px]"
        />
        <img
          src={star}
          alt="Luna-pay logo"
          className="w-12 h-12  rounded-full absolute bottom-[55px] right-[165px] rotate-45 "
        />

        <img src={planet} alt="Luna-pay logo" />
      </div>
    </section>
  );
};
