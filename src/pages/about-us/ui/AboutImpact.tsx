import { Badge } from "@/ui";

export const AboutImpact = () => {
  return (
    <section className="flex flex-col gap-20 w-full">
      <div className="flex flex-col xl:flex-row xl:mr-auto items-center xl:text-left text-center xl:items-center gap-10">
        <Badge className="hidden md:block">Our Impact in Numbers</Badge>

        <div className="flex flex-col items-center md:hidden ">
          <Badge>Our Impact in</Badge>
          <Badge className="relative -top-1">Numbers</Badge>
        </div>

        <span className="font-normal mb-auto">
          A snapshot of the milestones and achievements that drive our success
        </span>
      </div>

      <div className="flex w-full flex-wrap xl:flex-nowrap justify-center">
        <div className="flex flex-col w-full min-w-[210px] max-w-[250px] px-10 py-10 gap-1 border-t-2 border-black rounded-[25px]">
          <h2>8+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="flex flex-col w-full px-10 py-10 min-w-[250px] max-w-[300px]  gap-1 border-t-2 border-black rounded-[25px]">
          <h2>50+</h2>
          <p>Experts</p>
        </div>
        <div className="flex flex-col w-full px-10 py-10 gap-1 min-w-[250px] max-w-[300px]  border-t-2 border-black rounded-[25px]">
          <h2>100+</h2>
          <p>Integrated Payment Solutions</p>
        </div>
        <div className="flex flex-col w-full px-10  min-w-[210px] max-w-[250px]  py-10 gap-1 border-t-2 border-black rounded-[25px]">
          <h2>500%</h2>
          <p>Increase in ROI for Our Clients</p>
        </div>
      </div>
    </section>
  );
};
