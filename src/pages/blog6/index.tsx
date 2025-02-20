import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro6 from "@/assets/imgs/blog/intro6.png";
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
    info: "Efficient payment processing is a critical component of any business’s financial strategy.",
    link: "/blog1",
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
    title: "How to Minimize Fees and Delays",
    info: "Expanding into international markets presents lucrative opportunities for e-commerce businesses, but cross-border payments often come with high fees and processing delays. ",
    link: "/blog4",
  },
  {
    title: "How to Set Up and Scale Subscription Billing",
    info: "Subscription-based business models have gained immense popularity across various industries, offering predictable revenue streams and fostering long-term customer relationships.",
    link: "/blog5",
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
    header: "1. Implement Advanced Fraud Detection Systems",
    content:
      "Modern fraud prevention relies on machine learning and artificial intelligence (AI) to detect suspicious activities in real time. These systems analyze transaction patterns, flag anomalies, and adapt to emerging fraud threats. Key features to look for include:\nBehavioral analytics to identify unusual purchasing behavior.\nDevice fingerprinting to track unique user devices.\nAI-driven risk scoring to assess transaction legitimacy.\nLuna Pay integrates AI-powered fraud detection tools that help businesses reduce fraudulent transactions without disrupting legitimate purchases.",
  },
  {
    header: "2. Use Multi-Layer Authentication",
    content:
      "Enhancing authentication methods is crucial in preventing unauthorized access. Businesses should implement:\nTwo-Factor Authentication (2FA) for account logins.\nStrong Customer Authentication (SCA) for transactions in compliance with PSD2 regulations.\nBiometric verification such as fingerprint or facial recognition for added security.",
  },
  {
    header: "3. Monitor Transactions in Real Time",
    content:
      "Continuous monitoring of payment transactions allows businesses to detect and respond to fraudulent activities before they result in losses. Key monitoring strategies include:\nSetting up automated alerts for high-risk transactions.\nEstablishing transaction velocity checks to detect rapid purchases from the same account.\nReviewing high-value transactions manually to prevent chargeback fraud.",
  },
  {
    header: "4. Leverage Tokenization and Encryption",
    content:
      "Protecting sensitive payment data is fundamental to fraud prevention. Businesses should:\nUse tokenization to replace card details with secure, non-sensitive tokens.\nEncrypt payment data during transmission and storage.\nPartner with a PCI DSS-compliant payment provider to ensure industry-standard security.\nLuna Pay offers end-to-end encryption and tokenization solutions, helping businesses secure customer payment details effectively.",
  },
  {
    header: "5. Prevent Chargeback Fraud",
    content:
      "Chargeback fraud, or friendly fraud, occurs when customers dispute legitimate transactions. To minimize losses, businesses should:\nClearly outline refund and dispute policies to customers.\nMaintain detailed transaction records, including delivery confirmations and customer interactions.\nUse chargeback management tools to challenge unjustified claims.",
  },
  {
    header: "6. Stay Updated on Emerging Fraud Trends",
    content:
      "Cybercriminals constantly adapt their strategies, making it vital for businesses to stay informed about new fraud techniques. Regularly updating fraud prevention protocols and working with a trusted payment partner can enhance security measures and keep businesses ahead of threats.",
  },
  {
    header: "Final Thoughts",
    content:
      "Fraud prevention is an ongoing process that requires a combination of technology, strategic monitoring, and proactive security measures. By implementing AI-driven fraud detection, enhancing authentication protocols, and leveraging secure payment solutions, businesses can protect themselves from financial losses and reputational damage. With Luna Pay’s comprehensive fraud prevention tools, online businesses can operate with confidence, ensuring a safer and more reliable transaction environment.",
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

export const BlogPage6 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro6} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Fraud Prevention</p>
          </Badge>
          <h2>Fraud Prevention for Online Business: Essential Tools and Strategies</h2>

          <img
            src={blogintro6}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            With the rise of digital commerce, fraud prevention has become a top priority for online businesses. 
            Cybercriminals continuously develop new tactics to exploit vulnerabilities, making it essential for 
            businesses to implement robust fraud prevention measures. In this article, we will explore key tools 
            and strategies to protect online transactions, minimize chargebacks, and safeguard customer trust.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
