import { Badge } from "@/ui";

import payment_logo from "@/assets/imgs/home/service-payment.png";
import recurring_logo from "@/assets/imgs/home/service-recurring.png";
import fraud_logo from "@/assets/imgs/home/service-fraud.png";
import multicur_logo from "@/assets/imgs/home/service-multicur.png";
import api_logo from "@/assets/imgs/home/service-api.png";
import analytics_logo from "@/assets/imgs/home/service-dashboard.png";
import { LinkStyled } from "@/ui/LinkStyled";

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
    className={`rounded-[45px] p-[50px] grid grid-cols-[1fr_220px] shadow-md border-[1px] border-b-[6px] border-black bg-${i.bgColor} w-full max-w-[600px] h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str: string) => (
          <Badge bg={i.badgeColor}>
            <h3>{str}</h3>
          </Badge>
        ))}
      </div>

      <LinkStyled
        to="/"
        label="Learn More"
        labelColor={i.labelColor}
        iconBg={i.iconBg}
        iconTextColor={i.iconTextColor}
        iconSide="left"
      />
    </div>

    <div className="relative">
      <img src={i.img} alt="" className="absolute" />
    </div>
  </div>
);

export const HomeServices = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col xl:flex-row items-center text-center xl:text-left xl:items-start gap-10 ">
        <Badge bg="primary">
          <h2>Services</h2>
        </Badge>

        <span className="font-normal max-w-[660px]">
          At Luna Pay, we provide innovative payment solutions designed to
          simplify online transactions for businesses of all sizes. Whether
          you’re processing payments locally or globally, our secure and
          scalable platform ensures smooth, reliable, and fast financial
          operations.
        </span>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};
