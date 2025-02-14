import { FlexSection } from "@/ui";
import { HomeContactUs } from "./ui/HomeContactUs";
import { HomeHowWorks } from "./ui/HomeHowWorks";
import { HomeIntro } from "./ui/HomeIntro";
import { HomePowering } from "./ui/HomePowering";
import { HomeServices } from "./ui/HomeServices";
import { HomeTestimonials } from "./ui/HomeTestimonials";

export const HomePage = () => {
  return (
    <FlexSection gap="20">
      <HomeIntro />
      <HomeServices />
      <HomePowering />
      <HomeHowWorks />
      <HomeTestimonials />
      <HomeContactUs />
    </FlexSection>
  );
};
