import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro from "@/assets/imgs/blog/intro.png";
import { LinkStyled } from "@/ui/LinkStyled";
import { Button } from "@/components/ui/button";

const storiesCards = [
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
    header: "1. The Rise of AI-Driven Financial Services",
    content:
      "Artificial intelligence (AI) continues to transform fintech, driving automation, personalization, and fraud prevention. In 2025, expect AI-powered chatbots, robo-advisors, and machine learning algorithms to provide hyper-personalized financial insights, improving customer experiences and operational efficiency.",
  },
  {
    header: "2. Embedded Finance Becoming the Norm",
    content:
      "Embedded finance—seamlessly integrating financial services into non-financial platforms—is gaining traction. From e-commerce to social media, businesses are embedding payments, lending, and insurance into their ecosystems, reducing friction and enhancing user convenience.",
  },
  {
    header: "3. The Expansion of Digital-Only Banking",
    content:
      "Neobanks and digital-only financial institutions are set to grow as consumers increasingly prefer mobile-first banking solutions. With streamlined onboarding, lower fees, and AI-powered services, digital banks are challenging traditional financial institutions like never before.",
  },
  {
    header: "4. Blockchain Beyond Cryptocurrencies",
    content:
      "While cryptocurrencies remain a hot topic, blockchain technology is finding applications beyond digital assets. Smart contracts, decentralized finance (DeFi), and cross-border payments are revolutionizing how transactions are processed, ensuring greater transparency and efficiency.",
  },
  {
    header: "5. Open Banking and Data-Driven Innovation",
    content:
      "Regulatory frameworks around open banking are pushing financial institutions to share data securely with third-party providers. This trend enables innovative financial products, better loan underwriting, and improved risk assessment through data-driven insights.",
  },
  {
    header: "6. Sustainable and Green Fintech Solutions",
    content:
      "As ESG (Environmental, Social, and Governance) considerations become central to financial decision-making, fintech companies are integrating sustainability into their products. Carbon footprint tracking, green investment platforms, and ethical banking are gaining momentum.",
  },
  {
    header: "7. The Growth of Biometric Authentication",
    content:
      "Security concerns drive the adoption of biometric authentication methods, including facial recognition, fingerprint scanning, and voice verification. These advancements enhance security while offering a frictionless user experience.",
  },
  {
    header: "8. The Evolution of Cross-Border Payments",
    content:
      "The demand for faster and more cost-effective international transactions is fueling innovation in cross-border payments. Fintech companies are leveraging blockchain, AI, and partnerships with central banks to facilitate near-instant settlements with lower fees.",
  },
  {
    header: "Looking Ahead",
    content:
      "As fintech continues to evolve, businesses and consumers must stay ahead of the trends shaping the financial landscape. Whether through AI, embedded finance, or blockchain, 2025 promises to be a transformative year for the industry. Companies that adapt to these changes will thrive in an increasingly digital and interconnected financial world.",
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

export const BlogPage = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Fintech Trends</p>
          </Badge>
          <h2>The Future of Fintech: Top Trends to Watch in 2025</h2>

          <img
            src={blogintro}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
            The fintech industry is evolving at an unprecedented pace, reshaping
            how businesses and consumers interact with financial services. As we
            move into 2025, several emerging trends are set to define the next
            phase of financial technology. Here’s what to watch for in the
            coming year.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
