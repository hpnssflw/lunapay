import { Badge } from "@/ui";

const servicesCards = [
  {
    title: "Payment, Processing",
    img: "",
    bgColor: "secondary",
    badgeColor: "primary",
  },
  {
    title: "Recurring, Payments, & Subscriptions ",
    img: "",
    bgColor: "primary",
    badgeColor: "white",
  },
  {
    title: "Fraud Detection, & Security",
    img: "",
    bgColor: "default",
    badgeColor: "white",
  },
  {
    title: "Multi-Currency, Support ",
    img: "",
    bgColor: "secondary",
    badgeColor: "primary",
  },
  {
    title: "API Integration, for Developers",
    img: "",
    bgColor: "default",
    badgeColor: "white",
  },
  {
    title: "Analytics, & Reporting ",
    img: "",
    bgColor: "primary",
    badgeColor: "white",
  },
];

const genCard = (i: any) => (
  <div
    className={`rounded-[45px] p-[50px] grid grid-cols-[1fr_210px] shadow-md border-2 border-black bg-${i.bgColor} w-[600px] h-[310px]`}
  >
    <div className="flex flex-col justify-between ">
      <div>
        {i.title.split(",").map((str) => (
          <Badge bg={i.badgeColor}>
            <h3>{str}</h3>
          </Badge>
        ))}
      </div>

      <div>
        <span>Learn more</span>
      </div>
    </div>

    <div className="bg-blue-500 rounded-xl h-10 w-8"></div>
  </div>
);

export const HomeServices = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex gap-10 ">
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
      <div className="grid grid-cols-2 gap-10">
        {servicesCards.map(genCard)}
      </div>
    </section>
  );
};
