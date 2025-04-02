import { Badge, FlexSection } from "@/ui";

export const HomeContactUs = () => {
  return (
    <FlexSection gap="20" className="mt-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left xl:mr-auto text-center xl:items-center gap-10">
        <Badge bg="primary" className="mb-auto">
          <h2>Contact Us</h2>
        </Badge>
        <p className="max-w-[600px]">
          Tell us about your business, and let’s craft the perfect payment
          strategy together. Whether you need a quick chat or a detailed quote,
          we’re ready to assist.
        </p>
      </div>
    </FlexSection>
  );
};
