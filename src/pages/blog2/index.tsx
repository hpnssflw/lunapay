import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro2 from "@/assets/imgs/blog/intro2.png";
import { LinkStyled } from "@/ui/LinkStyled";
import { Button } from "@/components/ui/button";

const storiesCards = [
  {
    title: "The Future of Fintech",
    info: "The fintech industry is evolving at an unprecedented pace, reshaping how businesses and consumers interact with financial services.",
    link: "/blog",
  },
  {
    title: "How to Reduce Payment Processing Costs for Your Business",
    info: "Chargebacks can be a costly and time-consuming issue for businesses, impacting revenue and operational efficiency.",
    link: "/blog1",
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
    header: "1. Understanding Chargebacks and Their Impact",
    content:
      "A chargeback occurs when a customer disputes a transaction with their issuing bank, resulting in a forced refund. While chargebacks were originally designed to protect consumers from fraud, they are often misused, leading to revenue losses and additional processing fees. Businesses must proactively address chargebacks to avoid unnecessary financial strain.",
  },
  {
    header: "2. Implement Strong Fraud Prevention Measures",
    content:
      "One of the most effective ways to reduce chargebacks is to prevent fraudulent transactions before they occur. Implementing security protocols such as: Two-Factor Authentication (2FA), Address Verification Service (AVS), Card Verification Value (CVV), Checks Real-time Fraud Detection Tools Partnering with an advanced payment provider like Luna Pay ensures businesses have access to sophisticated fraud detection solutions, reducing the likelihood of fraudulent chargebacks.",
  },
  {
    header: "3. Enhance Customer Communication and Transparency",
    content:
      "Clear communication can prevent misunderstandings that lead to chargebacks. Businesses should: Provide detailed product descriptions and transparent pricing. Send immediate order confirmations and tracking updates. Offer responsive customer support to address disputes before they escalate.",
  },
  {
    header: "4. Implement a Robust Refund and Dispute Resolution Policy",
    content:
      "A clear and fair refund policy can help resolve issues before they turn into chargebacks. Encouraging customers to reach out to customer service before disputing a charge with their bank can reduce unnecessary disputes. Providing easy access to support through multiple channels — email, chat, and phone — can significantly improve resolution rates.",
  },
  {
    header: "5. Disputing Unfair Chargebacks: The Right Approach",
    content:
      "Despite your best efforts, some chargebacks may still occur. When faced with an unfair chargeback, businesses should: Gather supporting documentation, such as receipts, proof of delivery, and customer communications. Respond within the required timeframe, as each payment network has specific deadlines. Use a structured dispute response format, outlining clear evidence that supports the legitimacy of the transaction. Luna Pay offers automated chargeback management tools that help businesses track disputes, submit responses efficiently, and improve success rates in overturning unjustified claims.",
  },
  {
    header: "6. Leverage Chargeback Analytics for Continuous Improvement",
    content:
      "Monitoring chargeback trends can help businesses identify recurring issues and adjust their policies accordingly. Analyzing data such as chargeback reason codes, customer behavior patterns, and transaction history enables businesses to take preventive action and reduce future disputes.",
  },
  {
    header: "Final Thoughts",
    content:
      "Effective chargeback management requires a proactive approach, combining fraud prevention, clear customer policies, and a well-structured dispute process. By leveraging advanced payment solutions like Luna Pay, businesses can minimize chargeback risks, protect their revenue stream, and maintain customer trust. Taking control of chargeback management today ensures a more secure and profitable future for your business.",
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

export const BlogPage2 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro2} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Chargeback Management</p>
          </Badge>
          <h2>Chargeback Management: How to Prevent and Dispute Unfair Claims</h2>

          <img
            src={blogintro2}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            Chargebacks can be a costly and time-consuming issue for businesses, impacting revenue 
            and operational efficiency. Effectively managing chargebacks involves both prevention 
            strategies and a structured approach to disputing unjustified claims. In this article, 
            we will explore best practices for reducing chargebacks and successfully challenging disputes when necessary.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
