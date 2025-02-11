import { Button } from "@/components/ui/button";
import { FlexSection } from "@/ui";
import { HomeTestimonials } from "../home/ui/HomeTestimonials";
import { CasesAllStories } from "./ui/CasesAllStories";
import { CasesIntro } from "./ui/CasesIntro";
import { CasesSuccessStory } from "./ui/CasesSuccessStory";
import { CasesBanner } from "./ui/CasesBanner";

export const UseCasesPage = () => {
  return (
    <FlexSection gap="40">
      <CasesIntro />
      <CasesSuccessStory />
      <CasesAllStories />
      <HomeTestimonials />
      <CasesBanner />
    </FlexSection>
  );
};
