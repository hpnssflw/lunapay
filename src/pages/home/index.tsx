import { FlexSection } from "@/ui";
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
    <FlexSection w="1980px" gap="20">
      <FlexSection>
        <HomeIntro />
      </FlexSection>
      <FlexSection w="1980px">
        <HomeMap />
      </FlexSection>
      <FlexSection w="1240px">
        <HomeServices />
        <HomePowering />
        <HomeSuccess />
        <HomeHowWorks />
        <HomeTestimonials />
        <HomeContactUs />
      </FlexSection>
    </FlexSection>
  );
};
