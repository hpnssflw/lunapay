import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro5 from "@/assets/imgs/blog/intro5.png";
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
    title: "Optimizing Your Checkout Flow to Increase Conversion Rates",
    info: "A seamless checkout experience is crucial for businesses aiming to maximize conversion rates and reduce cart abandonment",
    link: "/blog3",
  },
  {
    title: "How to Reduce Payment Processing Costs for Your Business",
    info: "Efficient payment processing is a critical component of any business’s financial strategy.",
    link: "/blog1",
  },
  {
    title: "How to Minimize Fees and Delays",
    info: "Expanding into international markets presents lucrative opportunities for e-commerce businesses, but cross-border payments often come with high fees and processing delays. ",
    link: "/blog4",
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
    header: "1. Choosing the Right Payment Provider",
    content:
      "Selecting a reliable payment provider is crucial for managing recurring transactions efficiently. Businesses should look for a solution that offers:\nAutomated recurring billing with flexible scheduling options.\nSupport for multiple payment methods, including credit cards, digital wallets, and direct debits.\nCompliance with global payment regulations to support international expansion.\nLuna Pay provides an advanced subscription billing platform that enables businesses to automate recurring payments while minimizing payment failures and maximizing customer retention.",
  },
  {
    header: "2. Implementing a Flexible Subscription Model",
    content:
      "To attract and retain a broad customer base, businesses should offer multiple subscription tiers and billing cycles. Consider:\nMonthly, quarterly, or annual billing options.\nFree trials or introductory pricing to encourage sign-ups.\nCustomizable plans that allow users to upgrade, downgrade, or cancel easily.\nA well-structured subscription model enhances customer satisfaction and increases lifetime value.",
  },
  {
    header: "3. Optimizing Payment Authorization and Reducing Failures",
    content:
      "Payment failures due to expired cards, insufficient funds, or authorization issues can lead to involuntary churn. To reduce failed transactions:\nEnable automated card updates to keep payment details current.\nImplement smart retry logic to attempt payment recovery after failures.\nUse dunning management strategies to notify customers and encourage timely updates.\nLuna Pay incorporates intelligent transaction routing and automated payment recovery tools to ensure higher authorization rates and reduce churn.",
  },
  {
    header: "4. Ensuring Compliance and Security",
    content:
      "Handling recurring payments requires adherence to industry regulations and security standards. Businesses must:\nComply with PCI DSS standards for payment data protection.\nImplement strong customer authentication (SCA) where required.\nMaintain transparent billing practices to build customer trust.\nUsing a payment provider that offers built-in compliance management can simplify regulatory adherence and mitigate risks.",
  },
  {
    header: "5. Leveraging Analytics for Growth",
    content:
      "Tracking subscription metrics helps businesses refine their pricing strategies and improve customer retention. Key performance indicators (KPIs) to monitor include:\nCustomer lifetime value (CLV)\nChurn rate and retention metrics\nAverage revenue per user (ARPU)\nLuna Pay provides real-time analytics and insights, empowering businesses to make data-driven decisions and optimize subscription performance.",
  },
  {
    header: "Final Thoughts",
    content:
      "Scaling a subscription-based business requires a robust recurring payment infrastructure, proactive churn management, and strategic pricing. By leveraging automated billing, optimizing payment success rates, and ensuring compliance, businesses can create a seamless experience for subscribers while maximizing revenue growth. With Luna Pay’s advanced subscription billing solutions, businesses can efficiently manage recurring payments and scale with confidence.",
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

export const BlogPage5 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro5} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Recurring Payments</p>
          </Badge>
          <h2>Recurring Payments: How to Set Up and Scale Subscription Billing</h2>

          <img
            src={blogintro5}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            Subscription-based business models have gained immense popularity across various 
            industries, offering predictable revenue streams and fostering long-term customer 
            relationships. However, setting up and scaling a recurring payment system requires 
            careful planning, the right technology, and a strategic approach. In this article, 
            we will explore the key steps to implementing a seamless subscription billing system 
            while optimizing for growth.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
