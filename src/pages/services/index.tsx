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
      {/* <LinkStyled
        to="/"
        label="Back"
        iconBg="bg-black"
        iconTextColor="#fff"
        className="mr-auto"
      /> */}
      <ServicesIntroBanner />
      {/* <ServicesProcess /> */}
      <HomeHowWorks />
      <ServicesOtherFeatures />
      <HomePowering />
    </FlexSection>
  );
};
