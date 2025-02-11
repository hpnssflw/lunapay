import teamlogo from "@/assets/imgs/aboutus/teamwork.png";
import { Button } from "@/components/ui/button";

export const AboutJoinTeam = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border  items-center border-black border-b-[6px] pt-20 lg:pt-0 pr-10 lg:pr-0 pl-10 lg:pl-20 rounded-[45px] bg-primary shadow-lg">
      <div className="flex flex-col gap-5 text-center xl:text-left">
        <h3>Join Our Team</h3>
        <span>
          Luna Pay team redefining the future of digital payments through
          innovation, collaboration, and technology. We're always looking for
          passionate, driven individuals to join our team and help businesses
          competitive globally. Ready to make an impact in fintech?
        </span>
        <Button className="xl:w-fit ">Explore Careers 🚀</Button>
      </div>

      <img src={teamlogo} alt="" className="w-[320px] mx-auto " />
    </section>
  );
};
