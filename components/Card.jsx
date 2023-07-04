"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ data }) => {
  const router = useRouter();
  const handleClick = (slug) => {
    router.push(`/invest/${slug}`);
  };

  return (
    <div className="w-[96%] md:w-[47%] lg:w-[32%] h-48 md:h-[14rem] bg-slate-100 mx-auto relative">
      <div className="w-full absolute h-12 bg-blue-300 bg-gradient-to-r from-sky-300 to-blue-500" />
      <div className="flex absolute p-8 gap-8 flex-row text-right w-full h-full">
        <div className="w-40 h-[190px] flex-col justify-between">
          <div>
            <Image
              src={
                data?.brandUrl ??
                "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-icon-default-avatar-profile-icon-vector-social-media-user-image-208413309.jpg"
              }
              alt={data?.name ?? "logo"}
              width={400}
              height={400}
              className="bg-white rounded-lg border-2 border-slate-200 w-full h-28 object-contain"
            />
          </div>
          <p className="p-2 text-lg leading-relaxed font-semibold">Category</p>
        </div>
        <div className="flex flex-col pt-6 w-full">
          <p className="text-left font-bold text-2xl">{data?.name}</p>
          <p className="text-left">Rp {Math.ceil(+data?.fundNeeded / 40)}</p>
          <div className="flex-grow flex justify-end items-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-6 rounded-full"
              onClick={() => handleClick(data?.slug)}
            >
              <p>SEE DETAIL</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
