import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LinkStyled, Badge } from "@/ui";

export const ServicesUseCases = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center ju xl:text-left text-center xl:items-center gap-10">
        <Badge className="xl:mb-auto">Use cases</Badge>

        <p className="font-normal max-w-[580px]">
          Discover how businesses across industries have transformed their
          payment operations with Luna Pay. Our case studies showcase real
          success stories driven by our secure, scalable, and innovative payment
          solutions
        </p>
      </div>

      <div className="w-full  p-4 lg:h-80 hidden  bg-default rounded-[45px] py-[70px] px-[60px] xl:grid grid-cols-1 xl:grid-cols-[1fr_1px_1fr_1px_1fr] gap-16">
        <div className="flex flex-col text-white justify-between font-normal">
          <h3>E-commerce Businesses</h3>
          <span>Streamline online payments for customers worldwide.</span>

          <LinkStyled
            to="/"
            label="Learn more"
            iconSide="right"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between font-normal">
          <h3>Subscription Platforms:</h3>
          <span>Automate recurring billing with ease.</span>

          <LinkStyled
            to="/"
            label="Learn more"
            iconSide="right"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
          />
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>

        <div className="flex flex-col text-white justify-between font-normal">
          <h3>Global Marketplaces</h3>
          <span>
            Support multiple currencies and payment methods seamlessly.
          </span>

          <LinkStyled
            to="/"
            label="Learn more"
            iconSide="right"
            labelColor="text-primary"
            iconTextColor="#81A8CB"
          />
        </div>
      </div>

      <div className="md:max-w-[600px] max-w-[400px] w-fit mx-auto  h-fit block xl:hidden font-normal">
        <Carousel className="w-full mx-auto border-0">
          <CarouselContent className="border-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
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
