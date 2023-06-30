"use client";

import Image from "next/image";
import "./investAdd.css";
import { BsCardImage } from "react-icons/bs";
import { useState } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
          setSelectedImage(file);
        };
        reader.readAsDataURL(file);
      }
    });
    input.click();
  };

  return (
    <div className="max-w-[1450px] mx-auto pt-24 px-3">
      <form className="flex gap-4">
        <div className="w-60 h-60">
          {url ? (
            <Image src={url} className="w-60 h-60 object-cover" alt="logo" width={400} height={400} onClick={changeImage} />
          ) : (
            <div className="w-60 h-60 bg-slate-200 cursor-pointer flex justify-center items-center" onClick={changeImage}>
              <BsCardImage size={50} className="text-slate-500" />
            </div>
          )}
        </div>
        <div className="group-input w-full max-w-sm">
          <label htmlFor="name">Business Name</label>
          <input type="text" name="name" id="name" autoComplete={false} />
        </div>

        <div className="group-input"></div>
      </form>
    </div>
  );
};

export default Page;
