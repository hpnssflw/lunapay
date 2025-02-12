import { Badge } from "@/ui";
import bankcard from "@/assets/imgs/aboutus/bankcard.png";
import star from "@/assets/imgs/aboutus/Star.svg";
import bankpayment from "@/assets/imgs/aboutus/bankpayment.png";

const mapContent = [
  {
    year: "2017",
    title: "The Vision Begins",
    info: "Luna Pay was founded with a single mission: to make online payments faster, safer, and more accessible for businesses of all sizes.",
  },
  {
    year: "2019",
    title: "Achieving Milestones",
    info: "Our dedication to innovation and security led to global recognition. We secured strategic partnerships with leading fintech companies, expanded our services, and gained trust worldwide.",
  },
  {
    year: "2022",
    title: "Innovation and Expansion",
    info: "With a team of 50+ experts, we introduced groundbreaking features like multi-currency support, AI-powered fraud detection, and advanced analytics—helping businesses optimize their transactions.",
  },
  {
    year: "2024",
    title: "Shaping the Future of Payments",
    info: "Today, we are at the forefront of payment technology, driving AI-driven automation, seamless cross-border transactions, and setting new standards for security and efficiency.",
  },
];

interface JourneyCountent {
  year: string;
  title: string;
  info: string;
}

const genPathCard = (i: JourneyCountent, index: number) => {
  const style = `flex flex-col lg:flex-row gap-5 ${
    index % 2 === 0 ? "mr-auto" : "ml-auto"
  }`;

  return (
    <div className={style}>
      <p className="text-[60px] mt-5">{i.year}</p>

      <div className="max-w-[600px] w-full bg-default rounded-[45px] p-10 font-normal text-white h-[240px] flex flex-row items-center gap-5">
        <img src={star} alt="" className="h-[29px]" />
        <div className="flex flex-col gap-5">
          <h3>{i.title}</h3>
          <p className="font-normal">{i.info}</p>
        </div>
      </div>
    </div>
  );
};

export const AboutJourney = () => {
  return (
    <section className="flex flex-col gap-20 max-w-[1240px] w-full relative">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>Our Journey</h2>
        </Badge>

        <span className="font-normal mb-auto">
          From humble beginnings to industry leaders, discover how Positivus has
          <br /> evolved to drive success for businesses worldwide.
        </span>
      </div>

      <div className="flex flex-col gap-10">{mapContent.map(genPathCard)}</div>

      <div className=" hidden xl:block absolute -right-[15%] top-[47%] ">
        <div className="relative">
          <img src={bankpayment} alt="" className="w-[413px]" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[50%] -z-10" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[57%] -z-10" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[64%] -z-10" />
        </div>
      </div>

      <div className="hidden xl:block absolute -left-[15%] top-[20%] ">
        <div className="relative">
          <img src={bankcard} alt="" className="w-[406px]" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[50%] -z-10" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[57%] -z-10" />
          <div className="h-[88px] w-[422px] border rounded-[100%] border-black absolute top-[64%] -z-10" />
        </div>
      </div>
    </section>
  );
};
