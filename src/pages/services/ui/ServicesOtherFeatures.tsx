import { Badge } from "@/ui";
import recurringlogo from "@/assets/imgs/home/service-recurring.png";
import dashboardlogo from "@/assets/imgs/home/service-dashboard.png";
import fraudlogo from "@/assets/imgs/home/service-fraud.png";
import apilogo from "@/assets/imgs/home/service-api.png";
import creditlogo from "@/assets/imgs/services/creditcard.png";
import b2clogo from "@/assets/imgs/services/b2c.png";

const servicesCards = [
  {
    title: "Recurring Billing, & Subscriptions",
    img: recurringlogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Real-Time, Analytics, & Reporting ",
    img: dashboardlogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Chargeback, Management",
    img: creditlogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "Secure, Tokenization, for Data Protection ",
    img: fraudlogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "B2C , Masspayments",
    img: b2clogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
  {
    title: "API Integration, & Developer Tools",
    img: apilogo,
    bgColor: "secondary",
    badgeColor: "white",
  },
];

const genCard = (i: any) => (
  <div
    className={`rounded-[45px] border-b-[6px] p-[50px] grid grid-cols-1 xl:grid-cols-[1fr_180px]  border-2 border-black bg-${i.bgColor} max-w-[600px] w-full xl:h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str: string) => (
          <Badge bg={i.badgeColor}>{str}</Badge>
        ))}
      </div>
    </div>

    <div className="relative">
      <img
        src={i.img}
        alt=""
        className="relative xl:absolute max-w-[200px] mx-auto"
      />
    </div>
  </div>
);

export const ServicesOtherFeatures = () => {
  return (
    <section className="flex flex-col gap-10 my-20 w-full">
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
