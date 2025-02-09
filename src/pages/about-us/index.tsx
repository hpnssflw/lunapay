import { Button } from "@/components/ui/button";
import { Badge } from "@/ui";
import React from "react";

import star from "@/assets/imgs/aboutus/Star.svg";

import aboutlogo from "@/assets/imgs/aboutus/intro.png";
import fintechlogo from "@/assets/imgs/aboutus/fintech.png";
import growthlogo from "@/assets/imgs/aboutus/growth.png";
import teamlogo from "@/assets/imgs/aboutus/teamwork.png";
import likelogo from "@/assets/imgs/aboutus/like.png";

const AboutIntro = () => (
  <div className="flex flex-col-reverse lg:grid  lg:grid-cols-2  items-center gap-10">
    <img src={aboutlogo} alt="" height={377} className=" w-[590px]" />

    <div className="flex flex-col gap-5">
      <h1>
        Together for Payment <br /> Success
      </h1>

      <span className="font-normal">
        At Luna Pay, we empower businesses to grow by providing secure, fast,
        and seamless payment solutions. Our innovative technology ensures smooth
        transactions, whether local or global. Together, we create a future
        where your business thrives with financial efficiency.
      </span>
    </div>
  </div>
);

const AboutImpact = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <Badge>
          <h2>Our Impact in Numbers</h2>
        </Badge>

        <span className="font-normal">
          A snapshot of the milestones and achievements that drive our success
        </span>
      </div>

      <div className="flex w-full flex-wrap justify-center">
        <div className="flex flex-col w-full max-w-[210px] px-10 py-10 gap-1 border-t-2 border-black rounded-[25px]">
          <h2>8+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="flex flex-col w-full px-10 py-10 max-w-[210px] gap-1 border-t-2 border-black rounded-[25px]">
          <h2>50+</h2>
          <p>Experts</p>
        </div>
        <div className="flex flex-col w-full px-10 py-10 gap-1 max-w-[210px] border-t-2 border-black rounded-[25px]">
          <h2>100+</h2>
          <p>Integrated Payment Solutions</p>
        </div>
        <div className="flex flex-col w-full max-w-[210px] px-10 py-10 gap-1 border-t-2 border-black rounded-[25px]">
          <h2>20+</h2>
          <p>Industry Awards</p>
        </div>
        <div className="flex flex-col w-full px-10  max-w-[210px] py-10 gap-1 border-t-2 border-black rounded-[25px]">
          <h2>500%</h2>
          <p>Increase in ROI for Our Clients</p>
        </div>
      </div>
    </section>
  );
};

const mapContent = [
  {
    year: "2019",
    title: "The Vision Begins",
    info: "Luna Pay was founded with a clear mission: to revolutionize the way businesses handle payments by offering secure, fast, and flexible financial solutions.",
  },
  {
    year: "2021",
    title: "Achieving Milestones",
    info: "Luna Pay gained industry recognition, securing partnerships with leading fintech companies and expanding our global reach to support businesses worldwide.",
  },
  {
    year: "2023",
    title: "Innovation and Expansion",
    info: "With a team of over 50 payment experts, Luna Pay introduced advanced features like multi-currency support, real-time analytics, and AI-powered fraud prevention, driving significant growth.",
  },
  {
    year: "2024",
    title: "Shaping the Future of Payments",
    info: "This year, Luna Pay is leading the evolution of payment technologies, focusing on AI-driven automation, seamless cross-border transactions, and setting new industry standards for security and efficiency.",
  },
];

const genPathCard = (i: any, index: number) => {
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

const AboutJourney = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex gap-5">
        <Badge>
          <h2>Our Journey</h2>
        </Badge>

        <span className="font-normal">
          From humble beginnings to industry leaders, discover how Positivus has
          <br /> evolved to drive success for businesses worldwide.
        </span>
      </div>

      {/* path container */}
      <div className="flex flex-col gap-10">{mapContent.map(genPathCard)}</div>
    </section>
  );
};

const valuesContent = [
  {
    title: "Client-Centric Approach",
    info: "We are dedicated to delivering secure, fast, and seamless payment solutions tailored to meet the unique needs of every lient, ensuring long-term growth and success.",
  },
  {
    title: "Innovation in Fintech",
    img: fintechlogo,
    info: "We continuously push the boundaries of payment technology, adopting cutting-edge solutions to stay ahead in the rapidly evolving financial landscape.",
  },
  {
    title: "Collaborative Growth",
    img: growthlogo,
    info: "We believe in the power of strong partnerships and teamwork, fostering collaboration with clients and stakeholders to drive mutual success.",
  },
  {
    title: "Transparency & Trust",
    info: "Open communication and clear processes are at the heart of Luna Pay. We ensure our clients have full visibility into their transactions and operations, building trust every step of the way.",
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

const AboutValues = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex gap-5">
        <Badge>
          <h2>Core Values</h2>
        </Badge>

        <span className="font-normal">
          At the heart of everything we do are our core values:
        </span>
      </div>

      {/* cards container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {valuesContent.map(genValueCard)}
      </div>
    </section>
  );
};

const AboutBanner = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 bg-default text-white border-b-[6px] rounded-[45px] p-10">
    <img src={likelogo} alt="" className="h-[287px]" />

    <div className="flex flex-col">
      <p className="font-bold text-[41px]">
        “At Luna Pay, we believe that success is powered by innovation,
        strengthened through collaboration, and sustained by a commitment to
        transparency and client satisfaction”
      </p>

      <p className="font-normal text-[24px]">-Luna Pay Leadership Team 🚀</p>
    </div>
  </section>
);

const AboutJoinTeam = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border  items-center border-black border-b-[6px] pt-20 lg:pt-10 pr-20 lg:pr-0 pl-20 rounded-[45px] bg-primary shadow-lg">
      <div className="flex flex-col gap-5">
        <h3>Join Our Team</h3>
        <span>
          At Luna Pay, we’re redefining the future of digital payments through
          innovation, collaboration, and technology. We're always looking for
          passionate, driven individuals to join our team and help businesses
          thrive globally. Ready to make an impact in fintech?
        </span>
        <Button className="w-fit">Explore Careers 🚀</Button>
      </div>

      <img src={teamlogo} alt="" className="h-[320px] mx-auto " />
    </section>
  );
};

export const AboutUsPage = () => {
  return (
    <section className="flex flex-col gap-0">
      <AboutIntro />
      <section className="flex flex-col gap-20">
        <AboutImpact />
        <AboutJourney />
        <AboutValues />
        <AboutBanner />
        <AboutJoinTeam />
      </section>
    </section>
  );
};
