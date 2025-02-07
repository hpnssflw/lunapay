import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/ui";
import React from "react";

export const HomeContactUs = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Badge bg="primary">
          <h2>Contact Us</h2>
        </Badge>
        <p>Connect with Us: Let's Discuss Your Payment Needs</p>
      </div>

      <div className="w-full py-20 px-24 bg-secondary rounded-[45px]">
        <form
          action="
      POST"
          className="max-w-[555px] flex flex-col gap-10"
        >
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
          </RadioGroup>

          <div className="flex flex-col gap-5">
            <div>
              <Label>Name</Label>

              <Input placeholder="Name" />
            </div>
            <div>
              <Label>Email*</Label>

              <Input placeholder="Email" />
            </div>
            <div>
              <Label>Message*</Label>

              <Textarea placeholder="Type your message here." />
            </div>
          </div>

          <Button size={"lg"}>Send Message</Button>
        </form>
      </div>
    </section>
  );
};
