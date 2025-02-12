import fintechlogo from "@/assets/imgs/aboutus/fintech.png";
import growthlogo from "@/assets/imgs/aboutus/growth.png";
import { Badge } from "@/ui";

const valuesContent = [
  {
    title: "Integrity",
    info: "We keep our word and take full responsibility for our actions. Transparency and ethical business practices are at the core of everything we do, ensuring trust with our clients and partners.",
  },
  {
    title: "Expertise",
    img: fintechlogo,
    info: "Our competence and professionalism stem from years of training, hands-on experience, and deep industry knowledge. We continuously invest in learning and innovation to deliver cutting-edge payment solutions",
  },
  {
    title: "Win-Win Approach",
    img: growthlogo,
    info: "We believe in building mutually beneficial partnerships where all parties thrive. Collaboration and long-term success drive our decision-making and client relationships.",
  },
  {
    title: "Flexibility",
    info: "We embrace change and adapt to evolving market conditions to achieve common goals. Our ability to pivot and innovate allows us to stay ahead in the fast-paced financial landscape.",
  },
];

const genValueCard = (i: any) => {
  return (
    <div
      className={`grid ${
        i.img ? "grid-cols-2 pr-0" : "grid-cols-1"
      } p-10 border border-black rounded-[45px] border-b-[6px]`}
    >
      <div className="flex flex-col">
        <h3 className=" block w-full max-w-[55%] ">{i.title}</h3>
        <div className="h-[1px] bg-black mb-10"></div>
        <span className="font-normal">{i.info}</span>
      </div>

      {i.img && <img src={i.img} alt={i.title + "Logo"}></img>}
    </div>
  );
};

export const AboutValues = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left text-center xl:items-center gap-10">
        <Badge>
          <h2>Core Values</h2>
        </Badge>

        <span className="font-normal mb-auto">
          At the heart of everything we do are our core values:
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {valuesContent.map(genValueCard)}
      </div>
    </section>
  );
};
