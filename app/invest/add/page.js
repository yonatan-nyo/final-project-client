"use client";

import Image from "next/image";
import "./investAdd.css";
import { BsCardImage } from "react-icons/bs";
import { useState } from "react";
import ImageInput from "@/components/ImageInput";

const Page = () => {
  return (
    <div className="max-w-[1450px] mx-auto px-3 flex flex-col">
      <form className="flex flex-col gap-4 w-full h-full min-h-screen pt-24 pb-4">
        <h1 className="font-bold text-4xl text-center py-3">Add Business</h1>
        <div className="flex gap-4 w-full h-full">
          <div className="border-r-2 pr-4 border-slate-500 h-fit">
            <ImageInput msg="Click to change your logo!" />
            <div className="group-input w-full max-w-sm">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Business Name" />
            </div>

            <div className="group-input w-full max-w-sm">
              <label htmlFor="fundNeeded">Fund Needed</label>
              <input type="number" name="fundNeeded" id="fundNeeded" autoComplete="off" />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between h-auto">
            <div>
              <label htmlFor="overview">Overview</label>
              <textarea name="overview" id="overview" className="w-full"></textarea>
              <label htmlFor="images">Images</label>
              <div className="flex gap-2">
                <ImageInput size="small" />
                <ImageInput size="small" />
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button className="flex h-12 w-fit items-center px-4 py-1 text-red-600 font-bold hover:bg-red-100 border-2 border-red-600 mb-2 rounded-lg">
                <p className="font-medium">Cancel</p>
              </button>
              <button className="flex h-12 w-fit items-center px-4 py-1 text-white bg-blue-500 hover:bg-blue-800 mb-2 rounded-lg">
                <p className="font-medium">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
