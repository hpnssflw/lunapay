import { Button } from "@/components/ui/button";
import powering from "@/assets/imgs/home/powering.png";
import { DialogWrapper, RegisterDialog } from "@/ui";

export const HomePowering = () => {
  return (
    <section className="rounded-[45px] mt-20 mb-20 h-80  bg-secondary grid grid-cols-1  lg:grid-cols-2 items-center px-[60px]">
      <div className="flex flex-col gap-[26px]">
        <h3>Let’s Power Your Payments</h3>

        <span className="font-normal">
          Ready to elevate your business with fast, secure, and seamless payment
          solutions?
        </span>

        <DialogWrapper
          trigger={
            <Button className="md:w-fit w-full text-sm">Contact Us</Button>
          }
          content={<RegisterDialog />}
        />
      </div>

      <div className="relative  h-full">
        <img
          src={powering}
          alt=""
          className="hidden lg:block lg:absolute -top-40  "
        />
      </div>
    </section>
  );
};
