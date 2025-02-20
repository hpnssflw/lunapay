import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro4 from "@/assets/imgs/blog/intro4.png";
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
    info: "Chargebacks can be a costly and time-consuming issue for businesses, impacting revenue and operational efficiency.",
    link: "/blog2",
  },
  {
    title: "How to Reduce Payment Processing Costs for Your Business",
    info: "Efficient payment processing is a critical component of any business’s financial strategy.",
    link: "/blog1",
  },
  {
    title: "Optimizing Your Checkout Flow to Increase Conversion Rates",
    info: "A seamless checkout experience is crucial for businesses aiming to maximize conversion rates and reduce cart abandonment",
    link: "/blog3",
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
      to={i.link}
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
    header: "1. Choose the Right Payment Provider",
    content:
      "Not all payment processors offer the same efficiency and cost-effectiveness for cross-border transactions. Businesses should partner with a provider that specializes in international payments, offering:\nCompetitive exchange rates with minimal markups.\nDirect local payment processing to reduce intermediary fees.\nFaster settlement times to improve cash flow.\nLuna Pay provides tailored cross-border payment solutions, helping businesses reduce processing costs while ensuring efficient global transactions.",
  },
  {
    header: "2. Optimize Currency Conversion",
    content:
      "Currency exchange fees can significantly impact profit margins. To minimize these costs:\nUse a payment provider that offers dynamic currency conversion (DCC) to let customers pay in their preferred currency.\nReduce reliance on banks with high foreign exchange fees by leveraging fintech solutions with real-time exchange rate optimization.\nImplement multi-currency accounts to settle transactions in the currency of your key markets.",
  },
  {
    header: "3. Leverage Local Payment Methods",
    content:
      "Consumers across different regions prefer various payment methods. Offering locally preferred options improves conversion rates and reduces transaction costs. Strategies include:\nAccepting region-specific digital wallets and alternative payment methods.\nUsing direct bank transfers to eliminate unnecessary intermediaries.\nSupporting local card networks to lower processing fees.",
  },
  {
    header: "4. Reduce Chargebacks and Fraud Risks",
    content:
      "Cross-border transactions are more susceptible to fraud, leading to costly chargebacks and payment disputes. Businesses can mitigate these risks by:\nImplementing advanced fraud detection tools, such as AI-driven risk analysis.\nUsing multi-factor authentication (MFA) for international transactions.\nEnsuring compliance with local and international security standards to build trust.\nLuna Pay integrates intelligent fraud prevention mechanisms to safeguard cross-border payments, reducing losses from chargebacks and unauthorized transactions.",
  },
  {
    header: "5. Streamline Regulatory Compliance",
    content:
      "Navigating global payment regulations can be complex. Ensuring compliance with local financial regulations, tax requirements, and anti-money laundering (AML) laws prevents costly fines and delays. Best practices include:\nPartnering with a payment provider that manages compliance requirements on your behalf.\nAutomating tax and reporting obligations for different jurisdictions.\nKeeping up to date with evolving regulatory frameworks in key markets.",
  },
  {
    header: "6. Improve Transaction Speed and Efficiency",
    content:
      "Slow cross-border transactions can impact customer experience and cash flow. To accelerate payments:\nUtilize real-time payment networks where available.\nAvoid excessive bank intermediaries by leveraging direct payment routes.\nImplement automated reconciliation tools to streamline back-office operations.",
  },
  {
    header: "Final Thoughts",
    content:
      "Effective management of cross-border payments is crucial for e-commerce businesses seeking international growth. By optimizing currency conversion, leveraging local payment methods, reducing fraud risks, and ensuring compliance, businesses can significantly cut costs and improve payment efficiency. With Luna Pay’s cross-border payment solutions, businesses can expand globally while keeping transaction fees and delays to a minimum.",
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

export const BlogPage4 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro4} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Payments for E-Commerce</p>
          </Badge>
          <h2>Cross-Border Payments for E-Commerce: How to Minimize Fees and Delays</h2>

          <img
            src={blogintro4}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            Expanding into international markets presents lucrative opportunities 
            for e-commerce businesses, but cross-border payments often come with high 
            fees and processing delays. Managing these costs and ensuring timely transactions 
            is critical to maintaining customer satisfaction and profitability. In this article,
            we will explore effective strategies for optimizing cross-border payments while minimizing fees and delays.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
