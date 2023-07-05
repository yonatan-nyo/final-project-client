"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ data }) => {
  const router = useRouter();
  const handleClick = (slug) => {
    router.push(`/invest/${slug}`);
  };

  return (
    <div className="w-[96%] md:w-[47%] lg:w-[32%] h-56 md:h-52 bg-slate-100 mx-auto relative rounded-xl shadow-lg">
      <div className="w-full absolute h-12 bg-blue-300 bg-gradient-to-r from-sky-300 to-blue-500 rounded-t-lg" />
      <div className="flex absolute p-8 gap-8 flex-row text-right w-full h-full">
        <div className="w-32 h-[190px] flex flex-col">
          <div className="w-32">
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
          <div className="w-32 mt-4 leading-relaxed font-semibold bg-white border-2 border-slate-400 h-4 overflow-hidden rounded-full">
            <div
              className="h-4 w-[5%] bg-green-500"
              style={{
                width: Math.floor(data?.fundReceived?.length * 2.5) + "%",
              }}
            />
          </div>
          <p className="text-center w-full">{data?.fundReceived?.length} / 40</p>
        </div>
        <div className="flex flex-col pt-6 item-start flex-grow">
          <p className="text-left font-bold text-2xl w-full">{data?.name}</p>
          <p className="text-left">
            {Math.ceil(+data?.fundNeeded / 40).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <div className="flex-grow flex justify-end items-end">
            <a
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-6 rounded-full"
              onClick={() => handleClick(data?.slug)}>
              <p>SEE DETAIL</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
