"use client";

import { useState } from "react";
import Image from "next/image";
import { BsCardImage } from "react-icons/bs";

const ImageInput = ({ imageFile, setImageFIle = () => {}, size, msg = "" }) => {
  const [url, setUrl] = useState(null);

  const changeImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setUrl(reader.result);
          setImageFIle(file);
        };
        reader.readAsDataURL(file);
      }
    });
    input.click();
  };

  return (
    <>
      {url ? (
        <div>
          <Image
            src={url}
            className={size === "small" ? "w-32 h-32 sm:w-40 sm:h-40 object-cover" : "w-40 h-40 sm:w-60 sm:h-60 object-cover"}
            alt="logo"
            width={400}
            height={400}
            onClick={changeImage}
          />
          <p className="text-center font-bold">{imageFile?.name}</p>
          <p className="text-center font-light">*{msg}*</p>
        </div>
      ) : (
        <div
          className={
            size === "small"
              ? "w-32 h-32 sm:w-40 sm:h-40 bg-slate-200 cursor-pointer flex justify-center items-center flex-col"
              : "w-40 h-40 sm:w-60 sm:h-60 bg-slate-200 cursor-pointer flex justify-center items-center flex-col"
          }
          onClick={changeImage}>
          <BsCardImage size={50} className="text-slate-500" />
          <p className="text-center font-light">{msg}</p>
        </div>
      )}
    </>
  );
};

export default ImageInput;
