import React from "react";

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

      <div className="h-[625px] bg-black  overflow-hidden rounded-[45px] flex  flex-col">
        {" "}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1240px] relative mx-auto my-auto "
        >
          <CarouselContent className="lg:w-[1860px] md:w-full lg:-ml-80">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-[235px] bg-transparent border-primary rounded-[45px] text-white ">
                  <CardContent className="flex flex-col h-full  items-center justify-center ">
                    <span className="text-3xl font-normal">
                      Some type of content nere
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            onChange={(e) => console.log("e", e)}
            className="top-[350px] translate-x-60 bg-transparent border-0 text-white"
          />

          <CarouselNext
            onChange={(e) => console.log("e", e)}
            className="top-[350px] -translate-x-60 bg-transparent border-0 text-white"
          />
        </Carousel>
      </div>
    </section>
  );
};
