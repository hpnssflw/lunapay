import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro from "@/assets/imgs/blog/intro.png";
import { LinkStyled } from "@/ui/LinkStyled";
import { Button } from "@/components/ui/button";

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
    <LinkStyled
      to="/"
      label="Learn more"
      iconBg="bg-primary"
      iconTextColor="#000"
    />
  </div>
);

const CasesAllStories = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <Badge>
          <h2>All Success Stories</h2>
        </Badge>
        <span>
          Explore Real-Life Examples of Our <br /> Payment Success through Our
          Case Studies
        </span>
      </div>

      <div className="border border-black rounded-[45px] p-10 grid gap-20 grid-cols-1 lg:grid-cols-3">
        {storiesCards.map(genStoryCard)}
      </div>
    </section>
  );
};

const BlogLongRead = () => {
  const [fontSize, setFontSize] = useState({ header: "36px", content: "28px" });

  return (
    <FlexSection>
      <div className="flex gap-0 ml-auto">
        <Button
          onClick={() => setFontSize({ header: "36px", content: "28px" })}
          variant="ghost"
          className="text-[30px]"
        >
          A
        </Button>
        <Button
          onClick={() => setFontSize({ header: "32px", content: "24px" })}
          variant="ghost"
          className="text-[24px]"
        >
          A
        </Button>
        <Button
          onClick={() => setFontSize({ header: "28px", content: "20px" })}
          variant="ghost"
          className="text-[20px]"
        >
          A
        </Button>
      </div>

      <div className="w-full h-[1px] bg-default" />

      <div
        className={`h-[700px] overflow-y-scroll  flex flex-col gap-20 text-[56px]`}
      >
        <div className="flex flex-col gap-5">
          <span className={`text-[${fontSize.header}]`}>
            1. Embedded Finance: Everywhere, Seamlessly
          </span>
          <span className={`text-[${fontSize.content}]`}>
            Embedded finance is transitioning from an emerging trend to a core
            component of business models across industries. By 2025, the
            integration of financial services into non-financial platforms will
            be widespread, transforming industries like e-commerce, healthcare,
            and retail. The ability to access financial services like lending,
            insurance, or payments directly within apps or platforms is becoming
            the norm. This shift will enable businesses to offer more seamless
            experiences, enhancing customer engagement and providing new revenue
            opportunities. For example, a retail website could seamlessly offer
            consumers the option to finance their purchases or purchase
            insurance through integrated platforms without leaving the site. As
            the demand for frictionless financial solutions continues to grow,
            embedded finance is expected to become a primary driver of fintech
            innovation.
          </span>
        </div>
      </div>
    </FlexSection>
  );
};

export const BlogPage = () => {
  return (
    <FlexSection gap="20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-2 items-center ">
        <img src={blogintro} alt="" />

        <div className="flex flex-col gap-10 pr-40">
          <Badge>
            <p>Fintech Trends</p>
          </Badge>
          <h2>The Future of Fintech: Top Trends to Watch in 2025</h2>

          <span className="font-normal">
            As innovation accelerates, so does the potential for fintech to
            reshape the way people and businesses interact with their finances.
            The numbers speak volumes — according to Market Data Forecast, the
            global fintech market is expected to reach $1264.6 billion by 2032,
            fueled by rising demand for digital payments, personalized financial
            solutions, and streamlined regulatory compliance.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
