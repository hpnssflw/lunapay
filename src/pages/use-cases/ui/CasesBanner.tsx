import { Button } from "@/components/ui/button";
import { DialogWrapper, RegisterDialog } from "@/ui";

export const CasesBanner = () => {
  return (
    <section className="grid grid-cols-2 border border-black p-10 rounded-[45px] bg-primary shadow-lg">
      <div className="flex flex-col gap-5">
        <h3>Let’s Create Your Next Success Story</h3>
        <span>
          Ready to revolutionize your payment processes? Contact us today to
          learn how Luna Pay can help your business grow, streamline
          transactions, and achieve lasting success.
        </span>
        <Button className="w-fit">Get Your Free Payment Proposal</Button>

        <DialogWrapper
          trigger={
            <Button className="w-fit">Get Your Free Payment Proposal</Button>
          }
          content={<RegisterDialog />}
        />
      </div>

      <div></div>
    </section>
  );
};
