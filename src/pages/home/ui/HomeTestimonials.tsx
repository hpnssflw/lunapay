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
import { Badge } from "@/ui";

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

  console.log(" ## carouse", current, count);

  const genStarView = (i, index) => {
    return (
      <div
        className={`h-6 w-6 rotate-45 ${
          index + 1 === current ? "bg-primary" : "bg-white"
        }`}
      ></div>
    );
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Badge>
          <h2>Testimonials</h2>
        </Badge>
        <p>
          Trusted by businesses worldwide. Here’s how Luna Pay is transforming
          payment experiences.
        </p>
      </div>

      <div className="h-[625px] bg-default  overflow-hidden rounded-[45px] flex  flex-col">
        {" "}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1240px] relative  mx-auto my-auto flex flex-col gap-28 "
        >
          <CarouselContent className="lg:w-[1860px] md:w-full lg:-ml-80">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Card className="h-[235px] bg-transparent border-primary rounded-[45px] text-white ">
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
                <div className="text-white mt-10 px-10 fron-norl flex flex-col">
                  <span className="text-primary">John Smith </span>
                  <span>Marketing Director at XYZ Corp</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* <div className="relative "> */}

          <div className="flex gap-5 mx-auto mt-100">
            {Array.from({ length: 5 }).map(genStarView)}
          </div>

          <CarouselPrevious
            onChange={(e) => console.log("e", e)}
            className="top-[450px] translate-x-60 bg-transparent border-0 text-white text-[36px]"
          />

          <CarouselNext
            onChange={(e) => console.log("e", e)}
            className="top-[450px] -translate-x-60 bg-transparent border-0 text-white"
          />
          {/* </div> */}
        </Carousel>
      </div>
    </section>
  );
};
