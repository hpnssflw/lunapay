import { LinkStyled, Badge } from "@/ui";
import intrologo from "@/assets/imgs/services/intro.png";

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
    className={`rounded-[45px] border-b-[6px] p-[50px] grid grid-cols-1 lg:grid-cols-[1fr_180px] shadow-md border-2 border-black bg-${i.bgColor} max-w-[600px] w-full lg:h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str: string) => (
          <Badge bg={i.badgeColor}>{str}</Badge>
        ))}
      </div>
      <img
        src={intrologo}
        alt=""
        className="z-10 w-80 mx-auto lg:hidden block"
      />
    </div>

    <img src={intrologo} alt="" height={454} className="z-10 hidden lg:block" />
  </div>
);

export const ServicesOtherFeatures = () => {
  return (
    <section className="flex flex-col gap-10 my-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge bg="primary" className="xl:mb-auto">
          Other Luna Pay Features
        </Badge>

        <span className="font-normal max-w-[580px]">
          At Luna Pay, we offer a comprehensive range of payment services
          designed to help businesses of all sizes grow, scale, and succeed in
          the global marketplace. These services include:
        </span>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};
