import starprim from "@/assets/imgs/star-primary.svg";
import { Button } from "@/components/ui/button";
import { Badge, DialogWrapper, RegisterDialog } from "@/ui";

export const ServicesIntroBanner = () => {
  return (
    <section className="w-full relative xl:h-[315px] grid grid-col-1 xl:grid-cols-[30%_1fr] gap-10 xl:gap-20 rounded-[45px] bg-default p-10 xl:pr-40 text-white items-center">
      <img src={starprim} alt="" className="absolute top-8 left-8" />
      <div className="text-black xl:flex justify-between hidden mb-auto mt-7">
        <div className="ml-20">
          {" "}
          <Badge>Payment</Badge>
          <Badge>Optimization</Badge>
        </div>
      </div>
      <p className="text-primary uppercase block xl:hidden text-[26px] ml-16">
        featured
      </p>

      <p className="ml-16 xl:ml-0 text-[26px] block xl:hidden">
        Payment <br /> Optimization
      </p>

      <div className="font-normal flex flex-col  gap-10 ml-16 xl:ml-0">
        <p>
          Transform the way you handle payments. Our optimization strategies
          help increase conversions, reduce declines, and provide a smoother
          transaction experience.
        </p>

        <DialogWrapper
          trigger={
            <Button
              variant="outline"
              className="bg-white text-black p-0 w-[255px] lg:w-full"
            >
              Optimize My Payments
            </Button>
          }
          content={<RegisterDialog />}
        />
      </div>
    </section>
  );
};
