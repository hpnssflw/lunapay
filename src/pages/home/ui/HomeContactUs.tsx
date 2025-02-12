import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge, FlexSection } from "@/ui";
import bg from "@/assets/imgs/home/contactus.svg";

export const HomeContactUs = () => {
  return (
    <FlexSection gap="20" className="mt-20">
      <div className="flex flex-col xl:flex-row  items-center xl:text-left xl:mr-auto text-center xl:items-center gap-10">
        <Badge bg="primary">
          <h2>Contact Us</h2>
        </Badge>
        <p className="max-w-[600px]">
          Tell us about your business, and let’s craft the perfect payment
          strategy together. Whether you need a quick chat or a detailed quote,
          we’re ready to assist.
        </p>
      </div>

      <div className="w-full py-10 px-6 xl:py-20 xl:px-24 bg-secondary overflow-hidden rounded-[45px] relative ">
        <img
          src={bg}
          alt="Contact Us"
          className="hidden lg:block absolute w-[560px] top-10 right-[calc(0px_-_270px)] "
        />

        <form
          action="
      POST"
          className="max-w-[555px] flex flex-col gap-10"
        >
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
    </FlexSection>
  );
};
