import { FlexSection } from "@/ui";
import { ServicesIntro } from "./ui/ServicesIntro";
import { ServicesIntroBanner } from "./ui/ServicesIntroBanner";
import { ServicesOtherFeatures } from "./ui/ServicesOtherFeatures";
import { HomePowering } from "../home/ui/HomePowering";
import { HomeHowWorks } from "../home/ui/HomeHowWorks";

export const ServicesPage = () => {
  return (
    <FlexSection>
      <ServicesIntro />
   
      <ServicesIntroBanner />
      <HomeHowWorks />
      {/* <ServicesOtherFeatures /> */}
      {/* <HomePowering /> */}
    </FlexSection>
  );
};
