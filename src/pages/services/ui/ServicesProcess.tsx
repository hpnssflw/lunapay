import { Badge } from "@/ui";
import stardark from "@/assets/imgs/services/Stardark.svg";

const setupCards = [
  {
    step: 1,
    title: "Account Setup & Consultation",
    info: "We start with understanding your business needs, ensuring Luna Pay aligns perfectly with your goals.",
  },
  {
    step: 2,
    title: "Integration & Customization",
    info: "Quick and easy API integration with flexible payment options tailored to your business model.",
  },
  {
    step: 3,
    title: "Transaction Management",
    info: "Real-time transaction tracking, data analytics, and performance monitoring to keep your payments optimized.",
  },
  {
    step: 4,
    title: "Reporting & Insights",
    info: "Comprehensive reporting tools to help you make data-driven decisions and improve your financial performance.",
  },
  {
    step: 5,
    title: "Continuous Optimization",
    info: "Regular updates and performance enhancements to ensure your business stays ahead in the competitive payment landscape.",
  },
];

const genSetupCard = (i: any) => (
  <div className="lg:h-[240px] rounded-[45px] -z-10 bg-secondary grid grid-cols-[25px_1fr] lg:grid-cols-[50px_1fr] gap-20 lg:gap-40 p-10 items-center">
    <div className="mx-auto lg:w-[138px] lg:h-[138px] w-[46px] h-[46px] relative mb-auto mt-2 lg:mt-auto flex">
      <img src={stardark} alt="" className="absolute -z-10" />
      <p className="lg:text-[60px] text-[18px] text-primary mx-auto my-auto z-50">
        {"0" + i.step}
      </p>
    </div>
    <div className="flex flex-col gap-7">
      <h3>{i.title}</h3>
      <p>{i.info}</p>
    </div>
  </div>
);

export const ServicesProcess = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge className="xl:mb-auto">How We Work:SetUp Process</Badge>

        <p className="font-normal lg:max-w-[460px]">
          Our guided setup process ensures your payment system is fully
          optimized and ready to support your business growth on a global scale.
        </p>
      </div>

      <div className="grid gap-5">{setupCards.map(genSetupCard)}</div>
    </section>
  );
};
