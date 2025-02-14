import { Button } from "@/components/ui/button";
import { DialogWrapper, RegisterDialog } from "@/ui";

import intro1x from "@/assets/imgs/home/intro1x.png";

export const HomeIntro = () => {
  return (
    <section className="lg:grid grid-cols-2 gap-x-10 max-w-[1240px] pt-10 lg:pt-20 xl:pt-0">
      <div className="flex flex-col gap-20 mt-[80px]">
        <h1>The Future of Payments</h1>
        <img
          src={intro1x}
          alt="Luna-pay logo"
          className="w-[360px] mx-auto aspect-square  lg:hidden"
        />

        <h4 className="font-normal">
          Empower your business with secure, high-performance payment solution
        </h4>

        <DialogWrapper
          trigger={
            <Button className="md:w-fit w-full">Create Your Account</Button>
          }
          content={<RegisterDialog />}
        />
      </div>
      <div className="relative hidden lg:block">
        <img src={intro1x} alt="Luna-pay logo" />
      </div>
    </section>
  );
};
