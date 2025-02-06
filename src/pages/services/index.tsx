import { Button } from "@/components/ui/button";
import { Badge } from "@/ui";
import React from "react";

import intrologo from "@/assets/imgs/services/intro.png";

const ServicesIntro = () => (
  <div className="grid grid-cols-2 items-center">
    <img src={intrologo} alt="" height={454} />

    <div className="flex flex-col gap-5">
      <h1>
        Expert <br /> Payment <br /> Solutions
      </h1>

      <span className="font-normal">
        Unlock the power of seamless transactions with Luna Pay’s cutting-edge
        payment technology designed to support businesses worldwide.
      </span>
    </div>
  </div>
);

const ServicesIntroBanner = () => {
  return (
    <section className="w-full h-[315px] grid grid-cols-2 rounded-[45px] bg-default p-10 text-white">
      <div className="text-black mx-auto">
        <Badge>
          <h3>Payment</h3>
        </Badge>
        <Badge>
          <h3>Optimization</h3>
        </Badge>
      </div>

      <div className="font-normal flex flex-col gap-10">
        <p>
          Payment optimization is the process of enhancing your business's
          transaction flow to ensure faster, more secure, and efficient
          payments. By streamlining your payment infrastructure, we help reduce
          transaction failures, boost conversion rates, and improve customer
          satisfaction.
        </p>
        <Button> Optimize My Payments</Button>
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
  <div className="h-[240px] rounded-[45px] bg-secondary grid grid-cols-[50px_1fr] gap-20 p-10 items-center">
    <div className="mx-auto">
      <p className="">{"0" + i.step}</p>
    </div>
    <div className="flex flex-col gap-10">
      <h3>{i.title}</h3>
      <p>{i.info}</p>
    </div>
  </div>
);

const ServicesProcess = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex gap-5">
        <Badge>
          <h2>How We Work:SetUp Process</h2>
        </Badge>

        <p className="font-normal max-w-[460px]">
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
      <div className="flex gap-5">
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

      <div className="w-full  p-4 h-80 bg-black rounded-[45px] py-[70px] px-[60px] flex gap-14">
        <div className="flex flex-col text-white justify-between font-normal">
          <h3>E-commerce Businesses</h3>
          <span>Streamline online payments for customers worldwide.</span>

          <Button>Learn more</Button>
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>
        <div className="flex flex-col text-white justify-between font-normal">
          <h3>Subscription Platforms:</h3>
          <span>Automate recurring billing with ease.</span>

          <Button>Learn more</Button>
        </div>
        <div className="h-full w-[1px] bg-white mx-auto"></div>

        <div className="flex flex-col text-white justify-between font-normal">
          <h3>Global Marketplaces</h3>
          <span>
            Support multiple currencies and payment methods seamlessly.
          </span>

          <Button>Learn more</Button>
        </div>
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
    className={`rounded-[45px] p-[50px] grid grid-cols-[1fr_180px] shadow-md border-2 border-black bg-${i.bgColor} w-[600px] h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str) => (
          <Badge bg={i.badgeColor}>
            <h3>{str}</h3>
          </Badge>
        ))}
      </div>

      <div>
        <span>Learn more</span>
      </div>
    </div>

    <div className="bg-blue-500 rounded-xl h-10 w-8"></div>
  </div>
);

const ServicesOtherFeatures = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex gap-10 ">
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
      <div className="grid grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};

const ServicesStartBanner = () => {
  return (
    <section className="border border-black rounded-[45px] p-20 grid grid-cols-2">
      <div className="flex flex-col gap-10">
        <h3>Ready to Simplify Your Payments</h3>
        <div className="h-[1px] bg-black w-full" />

        <span className="font-normal">
          Discover how Luna Pay can transform your payment processes, improve
          customer satisfaction, and drive business growth.
        </span>

        <span className="font-semibold">
          Let’s work together to grow your online presence.{" "}
        </span>

        <Button> Start My Payment Journey</Button>
      </div>

      <div></div>
    </section>
  );
};

export const ServicesPage = () => {
  return (
    <section className="flex flex-col gap-20">
      <ServicesIntro />
      <Button className="w-fit">Back</Button>
      <ServicesIntroBanner />
      <ServicesProcess />
      <ServicesUseCases />
      <ServicesOtherFeatures />
      <ServicesStartBanner />
    </section>
  );
};
