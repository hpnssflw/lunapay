import { Button } from "@/components/ui/button";
import { Badge, FlexSection } from "@/ui";

import intrologo from "@/assets/imgs/services/intro.png";

import stardark from "@/assets/imgs/services/Stardark.svg";
import fintechlogo from "@/assets/imgs/aboutus/fintech.png";
import starprim from "@/assets/imgs/star-primary.svg";

import { LinkStyled } from "@/ui/LinkStyled";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ServicesIntro = () => (
  <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-20 lg:py-0">
    <img src={intrologo} alt="" height={454} className="hidden lg:block" />

    <div className="flex flex-col w-full gap-5">
      <h1 className="hidden xl:block">
        Expert <br /> Payment <br /> Solutions
      </h1>

      <h1 className="xl:hidden ">Expert Payment Solutions</h1>

      <img src={intrologo} alt="" className="w-[334px] mx-auto lg:hidden" />

      <span className="font-normal lg:max-w-[453px]">
        Unlock the power of seamless transactions with Luna Pay’s cutting-edge
        payment technology designed to support businesses worldwide.
      </span>
    </div>
  </div>
);

const ServicesIntroBanner = () => {
  return (
    <section className="w-full relative xl:h-[315px] grid grid-col-1 xl:grid-cols-[30%_1fr] gap-10 xl:gap-20 rounded-[45px] bg-default p-10 xl:pr-40 text-white items-center">
      <img src={starprim} alt="" className="absolute top-8 left-8" />
      <div className="text-black xl:flex justify-between hidden mb-auto mt-5">
        <div className="ml-20">
          {" "}
          <Badge>
            <h3>Payment</h3>
          </Badge>
          <Badge>
            <h3>Optimization</h3>
          </Badge>
        </div>
      </div>
      <p className="text-primary uppercase block xl:hidden text-[26px] ml-20">
        featured
      </p>

      <p className="ml-20 xl:ml-0 text-[26px] block xl:hidden">
        Payment <br /> Optimization
      </p>

      <div className="font-normal flex flex-col gap-10 ml-20 xl:ml-0">
        <p>
          Payment optimization is the process of enhancing your business's
          transaction flow to ensure faster, more secure, and efficient
          payments. By streamlining your payment infrastructure, we help reduce
          transaction failures, boost conversion rates, and improve customer
          satisfaction.
        </p>
        <Button variant="outline" className="bg-white text-black">
          Optimize My Payments
        </Button>
      </div>
    </section>
  );
};

const setupCards = [
  {
    step: 1,
    title: "Account Setup & Consultation",
    info: "We start with understanding your business needs, ensuring Luna Pay aligns perfectly with your goals.",
  },
  {
    step: 2,
    title: "Integration & Customization",
    info: "Quick and easy API integration with flexible payment options tailored to your business model.",
  },
  {
    step: 3,
    title: "Transaction Management",
    info: "Real-time transaction tracking, data analytics, and performance monitoring to keep your payments optimized.",
  },
  {
    step: 4,
    title: "Reporting & Insights",
    info: "Comprehensive reporting tools to help you make data-driven decisions and improve your financial performance.",
  },
  {
    step: 5,
    title: "Continuous Optimization",
    info: "Regular updates and performance enhancements to ensure your business stays ahead in the competitive payment landscape.",
  },
];

const genSetupCard = (i: any) => (
  <div className="lg:h-[240px] rounded-[45px] -z-10 bg-secondary grid grid-cols-[25px_1fr] lg:grid-cols-[50px_1fr] gap-20 lg:gap-40 p-10 items-center">
    <div className="mx-auto lg:w-[138px] lg:h-[138px] w-[46px] h-[46px] relative mb-auto mt-2 lg:mt-auto flex">
      <img src={stardark} alt="" className="absolute -z-10" />
      <p className="lg:text-[60px] text-[18px] text-primary mx-auto my-auto z-50">
        {"0" + i.step}
      </p>
    </div>
    <div className="flex flex-col gap-7">
      <h3>{i.title}</h3>
      <p>{i.info}</p>
    </div>
  </div>
);

const ServicesProcess = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>How We Work:SetUp Process</h2>
        </Badge>

        <p className="font-normal lg:max-w-[460px]">
          Our step-by-step setup process ensures your payment system is fully
          optimized, secure, and ready to handle transactions effortlessly,
          helping your business grow globally.
        </p>
      </div>

      <div className="grid gap-5">{setupCards.map(genSetupCard)}</div>
    </section>
  );
};

const ServicesUseCases = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>Use cases</h2>
        </Badge>

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

const servicesCards = [
  {
    title: "Recurring Billing, & Subscriptions",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Real-Time Analytics , & Reporting ",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Chargeback, Management",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Secure Tokenization, for Data Protection ",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "B2C , Masspayments",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "API Integration, & Developer Tools",
    img: "",
    bgColor: "secondary",
    badgeColor: "white",
  },
];

const genCard = (i: any) => (
  <div
    className={`rounded-[45px] border-b-[6px] p-[50px] grid grid-cols-1 lg:grid-cols-[1fr_180px] shadow-md border-2 border-black bg-${i.bgColor} max-w-[600px] w-full lg:h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str: string) => (
          <Badge bg={i.badgeColor}>
            <h3>{str}</h3>
          </Badge>
        ))}
      </div>
      <img
        src={intrologo}
        alt=""
        className="z-10 w-80 mx-auto lg:hidden block"
      />

      <LinkStyled
        to="/"
        label="Lear more"
        iconBg="bg-black"
        iconTextColor="#81A8CB"
      />
    </div>

    <img src={intrologo} alt="" height={454} className="z-10 hidden lg:block" />
  </div>
);

const ServicesOtherFeatures = () => {
  return (
    <section className="flex flex-col gap-10 my-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge bg="primary">
          <h2>Other Luna Pay Features</h2>
        </Badge>

        <span className="font-normal max-w-[580px]">
          At Luna Pay, we offer a comprehensive range of payment services
          designed to help businesses of all sizes grow, scale, and succeed in
          the global marketplace. These services include:
        </span>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};

const ServicesStartBanner = () => {
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

export const ServicesPage = () => {
  return (
    <FlexSection>
      <ServicesIntro />
      <LinkStyled
        to="/"
        label="Back"
        iconBg="bg-black"
        iconTextColor="#fff"
        className="mr-auto"
      />
      <ServicesIntroBanner />
      <ServicesProcess />
      <ServicesUseCases />
      <ServicesOtherFeatures />
      <ServicesStartBanner />
    </FlexSection>
  );
};
