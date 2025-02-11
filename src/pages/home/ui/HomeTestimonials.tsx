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

  const carouselContet = [
    {
      author: "Jane Greez",
      agency: "Marketing Director at OTA",
      content:
        "Luna Pay transformed our payment infrastructure. With seamless integration and lightning-fast transactions, our conversion rates skyrocketed by 15%!",
    },
    {
      author: "Anna Barbin",
      agency: "CEO at Educational Platform",
      content:
        "Switching to Luna Pay was the best decision for our international expansion. The multi-currency support and fraud protection gave us the confidence to scale globally.",
    },
    {
      author: "Michael Arras",
      agency: "CFO at FinTech Solutions",
      content:
        "Thanks to Luna Pay’s real-time analytics, we now have full control over our transactions. This transparency has helped us optimize our payment operations like never before.  ",
    },
    {
      author: "Sarah Benne",
      agency: "Head of  Payments at SaaS  Service",
      content:
        "Luna Pay’s fraud prevention system cut our chargebacks in half, giving us peace of mind and improving our bottom line significantly.",
    },
    {
      author: "David Lacan",
      agency: "COO at E-commerce company",
      content:
        "What I love most about Luna Pay is their dedicated support team. They truly understand our business and always provide solutions tailored to our needs.",
    },
  ];

  return (
    <FlexSection gap="20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:mr-auto xl:items-center gap-10">
        <Badge>Reviews</Badge>
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
          className="xl:w-full xl:max-w-[1240px] w-[calc(100dvw_-_40px)] relative  mx-auto my-auto flex flex-col gap-28 "
        >
          <CarouselContent className="xl:w-[1860px] md:w-full -ml-0 xl:-ml-80">
            {carouselContet.map((_, index) => (
              <CarouselItem key={index} className=" xl:basis-1/3 ">
                <Card className="h-[235px] max-w-[calc(100%_-_20px)] xl:max-w-[100%]  bg-transparent border-primary rounded-[45px] text-white ">
                  <CardContent className="flex flex-col h-full  items-center justify-center ">
                    <span className="font-normal">{_.content}</span>
                  </CardContent>
                </Card>
                <div className="text-white mt-10 px-10 font-normal flex flex-col">
                  <span className="text-primary">{_.author} </span>
                  <span>{_.agency}</span>
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
