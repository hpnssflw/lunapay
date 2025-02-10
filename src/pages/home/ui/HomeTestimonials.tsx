import React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge, FlexSection } from "@/ui";

export const HomeTestimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const genStarView = (_: any, index: number) => {
    return (
      <div
        className={`h-6 w-6 rotate-45 ${
          index + 1 === current ? "bg-primary" : "bg-white"
        }`}
      ></div>
    );
  };

  return (
    <FlexSection gap="20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:mr-auto xl:items-center gap-10">
        <Badge>
          <h2>Testimonials</h2>
        </Badge>
        <p>
          Trusted by businesses worldwide. Here’s how Luna Pay is transforming
          payment experiences.
        </p>
      </div>

      <div className="h-[625px] bg-default overflow- rounded-[45px] flex  flex-col">
        {" "}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          // className="lg:w-full lg:max-w-[1240px] relative md:max-w-[760px] max-w-[450px]  mx-auto my-auto flex flex-col lg:gap-28 "
          className="w-full xl:max-w-[1240px] max-w-[460px] relative  mx-auto my-auto flex flex-col gap-28 "
        >
          <CarouselContent className="xl:w-[1860px] md:w-full -ml-0 xl:-ml-80">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" xl:basis-1/3 ">
                <Card className="h-[235px] max-w-[430px] xl:max-w-[100%]  bg-transparent border-primary rounded-[45px] text-white ">
                  <CardContent className="flex flex-col h-full  items-center justify-center ">
                    <span className="font-normal">
                      "We have been working with Positivus for the past year and
                      have seen a significant increase in website traffic and
                      leads as a result of their efforts. The team is
                      professional, responsive, and truly cares about the
                      success of our business. We highly recommend Positivus to
                      any company looking to grow their online presence."
                    </span>
                  </CardContent>
                </Card>
                <div className="text-white mt-10 px-10 font-normal flex flex-col">
                  <span className="text-primary">John Smith </span>
                  <span>Marketing Director at XYZ Corp</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex gap-5 mx-auto mt-[5px] md:mt-100">
            {Array.from({ length: 5 }).map(genStarView)}
          </div>

          <CarouselPrevious className="top-[450px] translate-x-20 xl:translate-x-60 bg-transparent border-0 text-white text-[36px]" />
          <CarouselNext className="top-[450px] -translate-x-20 xl:-translate-x-60 bg-transparent border-0 text-white" />
        </Carousel>
      </div>
    </FlexSection>
  );
};
