import { FlexSection } from "@/ui";
import { LinkStyled } from "@/ui/LinkStyled";
import { ServicesIntro } from "./ui/ServicesIntro";
import { ServicesIntroBanner } from "./ui/ServicesIntroBanner";
import { ServicesOtherFeatures } from "./ui/ServicesOtherFeatures";
import { ServicesProcess } from "./ui/ServicesProcess";
import { HomePowering } from "../home/ui/HomePowering";

export const ServicesPage = () => {
  return (
    <FlexSection>
      <ServicesIntro />
      <LinkStyled
        to="/"
        label="Back"
        iconBg="bg-black"
        iconTextColor="#fff"
        className="mr-auto"
      />
      <ServicesIntroBanner />
      <ServicesProcess />
      <ServicesOtherFeatures />
      <HomePowering />
    </FlexSection>
  );
};
