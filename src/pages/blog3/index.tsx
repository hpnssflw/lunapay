import { Badge, FlexSection } from "@/ui";
import { useState } from "react";
import blogintro3 from "@/assets/imgs/blog/intro3.png";
import { LinkStyled } from "@/ui/LinkStyled";
import { Button } from "@/components/ui/button";

const storiesCards = [
  {
    title: "How to Reduce Payment Processing Costs for Your Business",
    info: "Efficient payment processing is a critical component of any business’s financial strategy.",
    link: "/blog1",
  },
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
    header: "1. Simplify the Checkout Process",
    content:
      "Lengthy and complicated checkout processes often frustrate customers, causing them to abandon their purchases. To streamline the experience:\nMinimize the number of required form fields.\nOffer a guest checkout option to reduce friction.\nUse auto-fill and predictive text to expedite form completion.\nWith a provider like Luna Pay, businesses can implement a streamlined checkout process that reduces friction and accelerates transactions.",
  },
  {
    header: "2. Offer Multiple Payment Options",
    content:
      "Customers have different payment preferences, and limiting their options can result in lost sales. To improve conversion rates:\nSupport a variety of payment methods, including credit/debit cards, digital wallets, and local payment solutions.\nEnable one-click payments for returning customers.\nAllow buy now, pay later (BNPL) options to cater to a broader audience.",
  },
  {
    header: "3. Enhance Payment Security Without Adding Friction",
    content:
      "While security is essential, excessive authentication steps can discourage customers. Implementing solutions like tokenization and biometric authentication can protect transactions without creating unnecessary steps for a client to deal with.\nLuna Pay integrates advanced fraud detection tools to ensure secure payments while maintaining a smooth user experience.",
  },
  {
    header: "4. Optimize for Mobile Users",
    content:
      "With a growing number of consumers shopping via mobile devices, businesses must ensure a fully responsive checkout experience. Key mobile optimizations include:\nImplementing a mobile-first design with easy navigation.\nUsing larger buttons and simple input fields.\nEnabling digital wallet payments like Apple Pay and Google Pay for faster transactions.",
  },
  {
    header: "5. Reduce Unnecessary Distractions",
    content:
      "A cluttered checkout page with too many distractions can lead customers away from completing their purchase. Best practices include:\nRemoving unnecessary links and pop-ups.\nKeeping the design clean and focused on the transaction.\nProviding clear calls to action (e.g., “Complete Purchase” instead of generic labels).",
  },
  {
    header: "6. Display Transparent Pricing and Policies",
    content:
      "Unexpected costs or unclear policies are among the top reasons for cart abandonment. To build customer trust:\nClearly display shipping fees, taxes, and total costs before the final payment step.\nOffer easy access to return and refund policies.\nProvide real-time currency conversion for international customers.",
  },
  {
    header: "7. Use A/B Testing to Continuously Improve",
    content:
      "Optimizing checkout is an ongoing process. Conduct A/B testing on different elements such as button placement, form layouts, and CTA wording to determine which configurations yield the highest conversion rates.",
  },
  {
    header: "Final Thoughts",
    content:
      "A well-optimized checkout flow is essential for increasing conversion rates and improving customer satisfaction. By simplifying the process, offering diverse payment options, and ensuring mobile responsiveness, businesses can significantly enhance their payment experience. With Luna Pay’s advanced checkout solutions, companies can implement these optimizations effortlessly, leading to higher conversions and greater revenue growth.",
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

export const BlogPage3 = () => {
  return (
    <FlexSection className="py-20">
      <section className="rounded-[45px] bg-secondary grid grid-cols-1 xl:grid-cols-2 items-center ">
        <img src={blogintro3} alt="" className="hidden  xl:block" />

        <div className="flex flex-col gap-10 p-10 xl:pr-40">
          <Badge bg="primary">
            <p>Checkout Flow</p>
          </Badge>
          <h2>Optimizing Your Checkout Flow to Increase Conversion Rates</h2>

          <img
            src={blogintro3}
            alt=""
            className="block max-w-[310px] mx-auto xl:hidden"
          />

          <span className="font-normal">
          A seamless checkout experience is crucial for businesses aiming to maximize conversion rates and reduce 
          cart abandonment. A complex or inefficient checkout process can deter customers, leading to lost revenue 
          opportunities. In this article, we will explore key strategies for optimizing your checkout flow to drive 
          higher conversion rates while ensuring a smooth payment experience.
          </span>
        </div>
      </section>
      <BlogLongRead />
      <CasesAllStories />
    </FlexSection>
  );
};
