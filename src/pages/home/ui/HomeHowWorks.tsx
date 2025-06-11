import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge, FlexSection } from "@/ui";

const accordionContent = [
  {
    trigger: "Consultation",
    content:
      "We begin by understanding your business goals and payment challenges. This helps us tailor the perfect payment solution for you.",
  },
  {
    trigger: "Solution Design & Strategy",
    content:
      "Our team develops a customized payment strategy, focusing on security, efficiency, and scalability for your business.",
  },
  {
    trigger: "Implementation",
    content:
      "We seamlessly integrate Luna Pay into your existing systems with minimal disruption, ensuring a smooth transition.",
  },
  {
    trigger: "Monitoring and Optimization",
    content:
      "Post-implementation, we continuously monitor transactions, optimize performance, and provide real-time support to keep your business running smoothly.",
  },
  {
    trigger: "Reporting and Communication",
    content:
      "Luna Pay provides detailed, real-time reporting and analytics to help you track your transactions with ease. Our transparent communication ensures you stay informed about payment statuses, security updates, and system improvements every step of the way.",
  },
];

const getAccItem = (i: any, index: number) => (
  <AccordionItem
    value={`item-${index}`}
    key={index}
    className="border rounded-[45px] border-b-[6px] w-full px-5 xl:px-10 bg-secondary py-2 xl:py-10 border-black shadow-lg"
  >
    <div className="grid grid-cols-[5px_1fr] items-center xl:grid-cols-[50px_1fr] gap-10">
      <span className="text-[30px] xl:text-[60px] ">{"0" + (index + 1)}</span>

      <AccordionTrigger className=" w-full justify-between text-[18px] xl:text-[26px] flex">
        {i.trigger}
      </AccordionTrigger>
    </div>
    <AccordionContent className="text-[16px] xl:text-[18px] border-t border-black pt-5">
      {i.content}
    </AccordionContent>
  </AccordionItem>
);

export const HomeHowWorks = () => {
  return (
    <FlexSection w="100%" className="my-20" gap="20">
      <div className="flex flex-col xl:flex-row  items-center  text-center xl:text-left xl:items-start gap-10 xl:mr-auto">
        <Badge>
          <h2>How Luna Pay Works</h2>
        </Badge>
        <span>
          A simple, efficient process designed <br /> to meet your payment
          needs.
        </span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-10"
      >
        {accordionContent.map(getAccItem)}
      </Accordion>
    </FlexSection>
  );
};
