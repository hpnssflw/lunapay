import { Button } from "@/components/ui/button";
import planet from "@/assets/imgs/home/planet-logo.png";
import React from "react";
import { Badge } from "@/ui";
import { HomeTestimonials } from "../home/ui/HomeTestimonials";

export const CasesIntro = () => {
  return (
    <section className="grid grid-cols-2 gap-x-10 rounded-[45px] bg-secondary">
      <div className="">
        <img src={planet} alt="" className="" />
      </div>
      <div className="flex flex-col gap-10 mt-[80px]">
        <h1>Proven Success Stories</h1>
        <h4 className="font-normal w-[454px]">
          Discover how Luna Pay’s advanced payment solutions have transformed
          businesses across various industries. From e-commerce to global
          enterprises, our use cases showcase real-world success powered by
          secure, fast, and scalable payment technologies. Explore how we help
          businesses grow, optimize transactions, and achieve their financial
          goals.
        </h4>
      </div>
    </section>
  );
};

const CasesSuccessStory = () => {
  return (
    <section className="bg-default rounded-[45px] p-20 grid grid-cols-2">
      <div className="flex flex-col gap-10 text-white">
        <Badge>
          <h2>Featured Success Story</h2>
        </Badge>

        <h3>
          Scaling Success for a <br /> Leading E-Commerce Brand
        </h3>

        <span className="font-normal">
          Through seamless payment processing and optimized checkout
          experiences, Luna Pay helped this e-commerce brand increase
          transaction success rates, reduce cart abandonment, and boost customer
          satisfaction.
        </span>

        <Button className="w-fit">Read</Button>
      </div>

      <div className="grid grid-cols-2 gap-5 text-center">
        <div className="bg-white rounded-[45px] p-5">
          <h2>200%</h2>
          <span>increase in successful transactions</span>
        </div>
        <div className="bg-white rounded-[45px] p-5">
          <h2>150%</h2>
          <span>growth in customer retention</span>
        </div>
        <div className="bg-white rounded-[45px] p-5">
          <h2>95%</h2>
          <span>reduction in payment processing errors</span>
        </div>
        <div className="bg-white rounded-[45px] p-5">
          <h2>300%</h2>
          <span>improvement in conversion rates</span>
        </div>
      </div>
    </section>
  );
};

const storiesCards = [
  {
    title: "Global E-Commerce Platform",
    info: "Luna Pay streamlined payment workflows, enabling multi-currency transactions, reducing payment failures by 40%, and increasing revenue by 150% within six months.",
    link: "",
  },
  {
    title: "Subscription-Based SaaS Company",
    info: "By integrating recurring payment features, Luna Pay helped automate billing cycles, resulting in a 300% increase in subscription renewals and reduced churn rates.",
    link: "",
  },
  {
    title: "Healthcare Provider Network",
    info: "With secure payment gateways and compliance-focused solutions, Luna Pay enabled fast, secure billing for healthcare services, increasing patient payment efficiency by 180%.",
    link: "",
  },
  {
    title: "Freelance & Gig Economy Platform",
    info: "Luna Pay facilitated fast, secure mass payouts for freelancers worldwide, reducing transaction delays by 70% and enhancing user satisfaction with flexible payment options.",
    link: "",
  },
  {
    title: "Logistics and Supply Chain Company",
    info: "Luna Pay optimized B2B payment processing, improving cash flow and reducing late payments by 60%, while providing real-time financial analytics.",
    link: "",
  },
  {
    title: "Travel and Hospitality Business",
    info: "By implementing dynamic currency conversion and secure mobile payment options, Luna Pay helped a global travel brand increase booking conversions by 250% and streamline cross-border payments.",
    link: "",
  },
];

const genStoryCard = (i: any) => (
  <div className="flex flex-col gap-10">
    <h3>{i.title}</h3>
    <p>{i.info}</p>
    <Button>Learn more</Button>
  </div>
);

const CasesAllStories = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Badge>
          <h2>All Success Stories</h2>
        </Badge>
        <span>
          Explore Real-Life Examples of Our <br /> Payment Success through Our
          Case Studies
        </span>
      </div>

      <div className="border border-black rounded-[45px] p-10 grid gap-20 grid-cols-3">
        {storiesCards.map(genStoryCard)}
      </div>
    </section>
  );
};

const CasesBanner = () => {
  return (
    <section className="grid grid-cols-2 border border-black p-10 rounded-[45px] bg-primary shadow-lg">
      <div className="flex flex-col gap-5">
        <h3>Let’s Create Your Next Success Story</h3>
        <span>
          Ready to revolutionize your payment processes? Contact us today to
          learn how Luna Pay can help your business grow, streamline
          transactions, and achieve lasting success.
        </span>
        <Button className="w-fit">Get Your Free Payment Proposal</Button>
      </div>

      <div></div>
    </section>
  );
};

export const UseCasesPage = () => {
  return (
    <section className="flex flex-col py-10  gap-20">
      <CasesIntro />
      <CasesSuccessStory />
      <CasesAllStories />
      <HomeTestimonials />
      <CasesBanner />
    </section>
  );
};
