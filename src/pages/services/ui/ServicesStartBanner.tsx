import fintechlogo from "@/assets/imgs/aboutus/fintech.png";
import { Button } from "@/components/ui/button";

export const ServicesStartBanner = () => {
  return (
    <section className="border border-b-[6px] border-black rounded-[45px] items-center p-10 lg:p-0 lg:pl-20 flex lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-5 lg:gap-10">
        <h3>Ready to Simplify Your Payments?</h3>
        <div className="h-[1px] bg-black w-full" />

        <span className="font-normal">
          Discover how Luna Pay can transform your payment processes, improve
          customer satisfaction, and drive business growth.
        </span>

        <p className="font-semibold mt-10">
          Let’s work together to grow your online presence.{" "}
        </p>

        <img src={fintechlogo} alt="Fintech Logo" className="block xl:hidden" />

        <Button variant="primary"> Start My Payment Journey</Button>
      </div>

      <img src={fintechlogo} alt="Fintech Logo" className="hidden xl:block" />
    </section>
  );
};
