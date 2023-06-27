import Card from "@/components/Card";

const Invest = () => {
  return (
    <div className="pt-20 max-w-[1450px] mx-auto flex flex-col justify-between min-h-screen text-center">
      <div>
        <h1 className="font-bold text-[60px] leading-loose">Invest</h1>
        <div className="w-full bg-slate-300 h-12"></div>

        <div className="w-full flex flex-wrap gap-y-4 justify-between my-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="w-full flex justify-end mb-20">
        <div className="h-10 w-40 bg-slate-300"></div>
      </div>
    </div>
  );
};

export default Invest;
