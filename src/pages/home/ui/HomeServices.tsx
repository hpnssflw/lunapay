import { Badge } from "@/ui";

import payment_logo from "@/assets/imgs/home/service-payment.png";
import recurring_logo from "@/assets/imgs/home/service-recurring.png";
import fraud_logo from "@/assets/imgs/home/service-fraud.png";
import multicur_logo from "@/assets/imgs/home/service-multicur.png";
import api_logo from "@/assets/imgs/home/service-api.png";
import analytics_logo from "@/assets/imgs/home/service-dashboard.png";

const servicesCards = [
  {
    title: "Payment, Processing",
    img: payment_logo,
    bgColor: "secondary",
    badgeColor: "primary",
    iconBg: "bg-black",
    iconTextColor: "#fff ",
  },
  {
    title: "Recurring, Payments, & Subscriptions ",
    img: recurring_logo,
    bgColor: "primary",
    badgeColor: "white",
    iconBg: "bg-black",
    iconTextColor: "#fff ",
  },
  {
    title: "Fraud Detection, & Security",
    img: fraud_logo,
    bgColor: "default",
    badgeColor: "white",
    iconBg: "bg-white",
    iconTextColor: "#000 ",
    labelColor: "text-white",
  },
  {
    title: "Multi-Currency, Support ",
    img: multicur_logo,
    bgColor: "secondary",
    badgeColor: "primary",
    iconBg: "bg-black",
    iconTextColor: "#fff ",
  },
  {
    title: "API Integration, for Developers",
    img: api_logo,
    bgColor: "primary",
    badgeColor: "white",
    iconBg: "bg-black",
    iconTextColor: "#fff ",
  },
  {
    title: "Analytics, & Reporting ",
    img: analytics_logo,
    bgColor: "default",
    badgeColor: "white",
    iconBg: "bg-white",
    iconTextColor: "#000 ",
    labelColor: "text-white",
  },
];

const genCard = (i: any) => (
  <div
    className={`rounded-[45px] p-[50px] grid grid-cols-1 xl:grid-cols-[1fr_220px] mx-auto border-[1px] border-b-[6px] border-black bg-${i.bgColor} w-full max-w-[600px] xl:h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str: string) => (
          <Badge bg={i.badgeColor}>
            <h3>{str}</h3>
          </Badge>
        ))}
      </div>
    </div>

    <div className="relative">
      <img
        src={i.img}
        alt=""
        className="relative xl:absolute max-w-[200px] ml-auto"
      />
    </div>
  </div>
);

export const HomeServices = () => {
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col xl:flex-row items-center text-center xl:text-left xl:items-start gap-10 ">
        <Badge bg="primary">
          <h2>Services</h2>
        </Badge>

        <span className="font-normal max-w-[660px]">
          Luna Pay delivers cutting-edge payment solutions designed to
          streamline transactions and boost financial efficiency. Whether
          operating locally or internationally, our secure and scalable platform
          ensures seamless payments at every step.
        </span>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};
