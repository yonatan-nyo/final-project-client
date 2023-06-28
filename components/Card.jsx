"use client";

import Image from "next/image";

const defaultBusiness = {
  name: "Business Name",
  slug: "business-name",
  brandUrl:
    "https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
  fundNeeded: 100000000,
  category: "resto",
};

const Card = ({ business = defaultBusiness }) => {
  return (
    <div className="w-[96%] h-28 sm:w-[47%] md:w-[32%] sm:h-32 md:h-48 lg:h-60 bg-slate-100 mx-auto relative">
      <div
        className="w-full absolute h-12 bg-blue-300"
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%) ",
        }}
      />
      <div className="flex absolute p-8 gap-8 flex-row text-right w-full h-full">
        <div className="w-40 h-[190px] flex-col justify-between">
          <div>
            <Image
              src={business.brandUrl}
              alt={business?.name}
              width={400}
              height={400}
              className="bg-white rounded-lg border-2 border-slate-200 w-full h-28 object-contain"
            />
          </div>
          <p className="p-2 text-[20px] leading-relaxed font-semibold">
            Category
          </p>
        </div>
        <div className="flex-col py-6 w-full h-full">
          <p className="text-left font-bold text-[27px]">{business.name}</p>
          <p className="text-left">Rp {Math.ceil(+business.fundNeeded / 40)}</p>
          <div className="flex-grow h-full flex justify-end flex-col items-end pb-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-[37px]">
              <p>Button</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
