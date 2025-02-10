import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/ui";
import { LinkStyled } from "@/ui/LinkStyled";

export const HomeSuccess = () => {
  return (
    <section className="w-full flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>Real Success Stories</h2>
        </Badge>
        <span className="font-normal">
          Discover how businesses thrive with our advanced payment <br />{" "}
          solutions.
        </span>
      </div>

      <div className="hidden  w-full  p-4 h-fit xl:h-80 bg-default rounded-[45px] py-[70px] px-[60px] xl:flex flex-col xl:flex-row gap-14 font-normal">
        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>
          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
            iconSide="right"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>
          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconSide="right"
            iconTextColor="#81A8CB"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between ">
          <span>
            For a growing e-commerce platform, Luna Pay streamlined payment
            processing, reducing transaction failures by 40% and boosting
            overall sales by 25%
          </span>
          <LinkStyled
            to="/"
            label="Lear more"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
            iconSide="right"
          />
        </div>
      </div>

      <div className="w-full  p-4 h-fit block xl:hidden font-normal">
        <Carousel className="w-full mx-auto border-0">
          <CarouselContent className="border-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="">
                      <div className="flex flex-col text-white justify-between w-full gap-5 p-10 h-fit xl:h-80 bg-default rounded-[45px]">
                        <span>
                          For a growing e-commerce platform, Luna Pay
                          streamlined payment processing, reducing transaction
                          failures by 40% and boosting overall sales by 25%
                        </span>
                        <LinkStyled
                          to="/"
                          label="Lear more"
                          labelColor="text-primary"
                          iconTextColor="#81A8CB"
                          iconSide="right"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
