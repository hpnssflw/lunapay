import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/ui";

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
  {
    trigger: "Continual Improvement",
    content:
      "We are committed to constant innovation and improvement. At Luna Pay, we regularly update our platform with the latest features, enhanced security protocols, and performance optimizations to meet the evolving needs of your business.",
  },
];

const getAccItem = (i: any, index: number) => (
  <AccordionItem
    value={`item-${index}`}
    className="border rounded-2xl  px-10 bg-secondary py-5 border-black shadow-lg"
  >
    <AccordionTrigger>{i.trigger}</AccordionTrigger>
    <AccordionContent>{i.content}</AccordionContent>
  </AccordionItem>
);

export const HomeHowWorks = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Badge>
          <h2>How Luna Pay Works</h2>
        </Badge>
        <span>
          A simple, efficient process designed <br /> to meet your payment
          needs.
        </span>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-10"
        >
          {accordionContent.map(getAccItem)}
        </Accordion>
      </div>
    </section>
  );
};
