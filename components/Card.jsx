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
    <div className="w-[96%] md:w-[47%] lg:w-[32%] h-48 md:h-[14rem] bg-slate-100 mx-auto relative">
      <div
        className="w-full absolute h-12 bg-blue-300"
        style={{
          background: "rgb(2,0,36)",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%) ",
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
          <p className="p-2 text-lg leading-relaxed font-semibold">Category</p>
        </div>
        <div className="flex flex-col pt-6 w-full">
          <p className="text-left font-bold text-2xl">{business.name}</p>
          <p className="text-left">Rp {Math.ceil(+business.fundNeeded / 40)}</p>
          <div className="flex-grow flex justify-end items-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">Invest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

/*
<Image
              src={business.brandUrl}
              alt={business?.name}
              width={400}
              height={400}
              className="bg-white rounded-lg border-2 border-slate-200 w-full h-28 object-contain"
            />
             */
