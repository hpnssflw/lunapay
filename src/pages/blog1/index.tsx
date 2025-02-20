import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro1 from "@/assets/imgs/blog/intro1.png";
import { LinkStyled } from "@/ui/LinkStyled";
import { Button } from "@/components/ui/button";

const storiesCards = [
  {
    title: "The Future of Fintech",
    info: "The fintech industry is evolving at an unprecedented pace, reshaping how businesses and consumers interact with financial services.",
    link: "/blog",
  },
  {
    title: "How to Prevent and Dispute Unfair Claims",
    info: "Efficient payment processing is a critical component of any business’s financial strategy.",
    link: "/blog2",
  },
  {
    title: "Optimizing Your Checkout Flow to Increase Conversion Rates",
    info: "A seamless checkout experience is crucial for businesses aiming to maximize conversion rates and reduce cart abandonment",
    link: "/blog3",
  },
  {
    title: "How to Minimize Fees and Delays",
    info: "Expanding into international markets presents lucrative opportunities for e-commerce businesses, but cross-border payments often come with high fees and processing delays. ",
    link: "/blog4",
  },
  {
    title: "How to Set Up and Scale Subscription Billing",
    info: "Subscription-based business models have gained immense popularity across various industries, offering predictable revenue streams and fostering long-term customer relationships.",
    link: "/blog5",
  },
  {
    title: "Fraud Prevention for Online Business",
    info: "With the rise of digital commerce, fraud prevention has become a top priority for online businesses.",
    link: "/blog6",
  },
];

const getSideBorders = (index: number): boolean => {
  const allowedIndices = new Set([0, 1, 3, 4]);
  return allowedIndices.has(index);
};

const getFirstRow = (index: number): boolean => {
  const allowedIndices = new Set([0, 1, 2]);
  return allowedIndices.has(index);
};

const getRowStarters = (index: number): boolean => {
  const allowedIndices = new Set([0, 3]);
  return allowedIndices.has(index);
};

const getRowEnders = (index: number): boolean => {
  const allowedIndices = new Set([2, 5]);
  return allowedIndices.has(index);
};

const genStoryCard = (i: any, index: number) => (
  <div
    className={`flex flex-col gap-10 px-7
      ${getSideBorders(index) ? "border-r-2 border-black" : ""} 
      ${getFirstRow(index) ? "border-b-2 border-black" : ""} 
      ${getRowStarters(index) ? "pl-0" : ""} 
      ${getRowEnders(index) ? "pr-0" : ""} 
      ${getFirstRow(index) ? "pb-14" : "pt-14"}`}
  >
    <h3>{i.title}</h3>
    <p>{i.info}</p>
    <LinkStyled
      to={i.link}
      label="Learn more"
      iconBg="bg-primary"
      iconTextColor="#000"
    />
  </div>
);

const genStoryCardMobile = (i: any) => (
  <div
    className={`flex flex-col gap-10 p-10 rounded-[45px] border-black border border-b-[6px] max-w-[600px] mx-auto w-full`}
  >
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
    <section className="flex flex-col gap-10 my-40">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <Badge className=" xl:mb-auto">All Success Stories</Badge>
        <span>
          Explore Real-Life Examples of Our <br /> Payment Success through Our
          Case Studies
        </span>
      </div>

      <div className="border border-black rounded-[45px] py-10 px-20 hidden  lg:grid lg:grid-cols-3">
        {storiesCards.map(genStoryCard)}
      </div>

      <div className="flex flex-wrap gap-5 lg:hidden">
        {storiesCards.map(genStoryCardMobile)}
      </div>
    </section>
  );
};

const articelContent = [
  {
    header: "1. Evaluate Your Payment Processor and Negotiate Fees",
    content:
      "Not all payment processors offer the same fee structures. Businesses should regularly review their agreements and compare service providers to ensure they are getting the most competitive rates. Negotiating lower transaction fees, reducing chargeback penalties, or switching to a provider like Luna Pay that offers cost-effective and transparent pricing can help reduce expenses.",
  },
  {
    header: "2. Choose the Right Payment Methods",
    content:
      "Different payment methods come with varying processing fees. Credit card transactions often carry higher fees compared to direct bank transfers or digital wallets. Encouraging customers to use lower-cost alternatives, such as Automated Clearing House (ACH) payments or local payment methods, can help businesses reduce overall transaction costs.",
  },
  {
    header: "3. Optimize Transaction Routing",
    content:
      "Smart transaction routing ensures that each payment is processed through the most cost-effective network. Businesses can leverage intelligent routing technology to minimize interchange fees and improve authorization rates. Partnering with an advanced payment provider like Luna Pay can enable businesses to benefit from optimized transaction flows.",
  },
  {
    header: "4. Minimize Chargebacks and Fraud",
    content:
      "Chargebacks and fraudulent transactions contribute to unnecessary costs. Implementing strong fraud prevention measures, such as two-factor authentication, real-time transaction monitoring, and address verification services, can help mitigate these risks. Proactively managing chargebacks through dispute resolution tools can also prevent revenue losses.",
  },
  {
    header: "5. Consolidate Payment Services",
    content:
      "Using multiple payment service providers can lead to redundant fees and inefficiencies. Consolidating payment processing under a single, scalable provider can simplify operations and reduce overall costs. Luna Pay, for example, offers an integrated platform that helps businesses manage payments more efficiently while keeping costs under control.",
  },
  {
    header: "6. Leverage Volume Discounts",
    content:
      "Many payment processors offer tiered pricing based on transaction volume. Businesses with high processing volumes should negotiate for volume discounts or explore custom pricing structures. Bundling multiple financial services — such as payments, payouts, and currency exchange — through a single provider can lead to additional savings.",
  },
  {
    header: "7. Monitor and Analyze Payment Data",
    content:
      "Regularly reviewing payment data allows businesses to identify inefficiencies and hidden costs. By analyzing transaction trends, businesses can optimize their payment strategy, detect patterns of failed transactions, and adjust payment settings accordingly. Using a provider with advanced analytics capabilities, such as Luna Pay, ensures access to actionable insights that support cost reduction efforts.",
  },
  {
    header: "Final Thoughts",
    content:
      "Reducing payment processing costs is a strategic initiative that requires a combination of the right technology, proactive negotiation, and continuous optimization. By working with a trusted payment partner like Luna Pay, businesses can enhance their payment efficiency, minimize unnecessary fees, and improve profitability without compromising on customer experience. For businesses looking to streamline their payment operations, now is the time to evaluate existing processes and implement cost-saving strategies that drive long-term success.",
  },
];

interface ArticleUI {
  header: string;
  content: string;
  gap?: string;
}

const genArticeItem = (_: ArticleUI, fontSize: ArticleUI) => {
  return (
    <div className="flex flex-col gap-5">
      <span className={`text-[${fontSize.header ?? "28px"}]`}>{_.header}</span>
      <span className={`text-[${fontSize.content ?? "20px"}] font-normal`}>
        {_.content}
      </span>
    </div>
  );
};

const BlogLongRead = () => {
  const [articlStyles, setArticleStyles] = useState<ArticleUI>({
    header: "26px",
    content: "18px",
    gap: "20",
  });

  return (
    <FlexSection className="" gap="5">
      <div className="flex gap-0 ml-auto items-end">
        <Button
          onClick={() =>
            setArticleStyles({ header: "36px", content: "22px", gap: "20" })
          }
          variant="ghost"
          className="text-[36px] w-[36px]  h-[40px] p-0"
        >
          A
        </Button>
        <Button
          onClick={() =>
            setArticleStyles({ header: "26px", content: "20px", gap: "14" })
          }
          variant="ghost"
          className="text-[28px] w-[24px] h-[36px] p-0"
        >
          A
        </Button>
        <Button
          onClick={() =>
            setArticleStyles({ header: "24px", content: "16px", gap: "10" })
          }
          variant="ghost"
          className="text-[22px] w-[25px] h-[30px]  p-0"
        >
          A
        </Button>
      </div>
      <div className="w-full h-[1px] mb-5 bg-default" />

      <div
        className={`h-[700px] max-w-[800px] w-full mx-auto overflow-y-scroll px-5  flex flex-col gap-${articlStyles.gap} text-[56px]`}
      >
        {articelContent.map((i) => genArticeItem(i, articlStyles))}
      </div>
    </FlexSection>
  );
};

export const BlogPage1 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro1} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Payment Processing</p>
          </Badge>
          <h2>How to Reduce Payment Processing Costs</h2>

          <img
            src={blogintro1}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            Efficient payment processing is a critical component of any business’s financial strategy. 
            High processing fees and transaction costs can significantly impact profitability, 
            making cost optimization an essential focus for companies looking to improve their bottom line. 
            In this article, we will explore practical strategies to reduce payment processing costs while maintaining 
            a smooth transaction experience for customers.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
