import { HomeContactUs } from "./ui/HomeContactUs";
import { HomeHowWorks } from "./ui/HomeHowWorks";
import { HomeIntro } from "./ui/HomeIntro";
import { HomeMap } from "./ui/HomeMap";
import { HomePowering } from "./ui/HomePowering";
import { HomeServices } from "./ui/HomeServices";
import { HomeSuccess } from "./ui/HomeSuccess";
import { HomeTestimonials } from "./ui/HomeTestimonials";

export const HomePage = () => {
  return (
    <section className="flex flex-col  gap-20">
      <HomeIntro />
      {/* <HomeMap /> */}
      <HomeServices />
      <HomePowering />
      <HomeSuccess />
      <HomeHowWorks />
      <HomeTestimonials />
      <HomeContactUs />
    </section>
  );
};
