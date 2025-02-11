import { LinkStyled, Badge } from "@/ui";

export const CasesSuccessStory = () => {
  return (
    <section className="bg-default rounded-[45px] p-20 gap-20  grid grid-cols-1 lg:grid-cols-[1fr_fit-content(600px)]">
      <div className="flex flex-col gap-10 text-white">
        <Badge>
          <h2 className="text-black">Featured Success Story</h2>
        </Badge>

        <h3>
          Scaling Success for a <br /> Leading E-Commerce Brand
        </h3>

        <span className="font-normal">
          Through seamless payment processing and optimized checkout
          experiences, Luna Pay helped this e-commerce brand increase
          transaction success rates, reduce cart abandonment, and boost customer
          satisfaction.
        </span>

        <LinkStyled
          to="/"
          label="Read"
          labelColor="text-primary"
          iconBg="bg-primary"
          iconTextColor="#000"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-5 text-center">
        <div className="bg-white rounded-[45px] p-5 h-[200px] w-[272px] lg:w-[200px] mx-auto">
          <h2>200%</h2>
          <span>increase in successful transactions</span>
        </div>
        <div className="bg-white rounded-[45px] p-5 h-[200px]  w-[272px] lg:w-[200px] mx-auto">
          <h2>150%</h2>
          <span>growth in customer retention</span>
        </div>
        <div className="bg-white rounded-[45px] p-5 h-[200px]  w-[272px] lg:w-[200px] mx-auto">
          <h2>95%</h2>
          <span>reduction in payment processing errors</span>
        </div>
        <div className="bg-white rounded-[45px] p-5 h-[200px]  w-[272px] lg:w-[200px] mx-auto">
          <h2>300%</h2>
          <span>improvement in conversion rates</span>
        </div>
      </div>
    </section>
  );
};
