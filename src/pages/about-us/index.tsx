import { FlexSection } from "@/ui";
import { AboutBanner } from "./ui/AboutBanner";
import { AboutImpact } from "./ui/AboutImpact";
import { AboutIntro } from "./ui/AboutIntro";
import { AboutJoinTeam } from "./ui/AboutJoimTeam";
import { AboutJourney } from "./ui/AboutJourney";
import { AboutValues } from "./ui/AboutValues";

export const AboutUsPage = () => {
  return (
    <FlexSection w="1980px" gap="20">
      <FlexSection>
        <AboutIntro />
        <AboutImpact />
      </FlexSection>
      <FlexSection w="1980px" gap="20" className="justify-between items-start">
        <AboutJourney />
      </FlexSection>
      <FlexSection gap="20">
        <AboutValues />
        <AboutBanner />
        <AboutJoinTeam />
      </FlexSection>
    </FlexSection>
  );
};
