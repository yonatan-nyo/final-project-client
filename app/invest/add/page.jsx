"use client";

import { useEffect, useState } from "react";
import "./investAdd.css";
import ImageInput from "@/components/ImageInput";

const Page = () => {
  const [logo, setLogo] = useState({});
  const [image, setImage] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "" });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);

    fd.append(`logo`, logo, logo.name);
    fd.append(`image`, image, image.name);

    const name = event.target.name.value;
    const fundNeeded = event.target.fundNeeded.value;
    const overview = event.target.overview.value;

    fd.append("name", name);
    fd.append("fundNeeded", fundNeeded);
    fd.append("overview", overview);

    for (const p of fd) {
      let name = p[0];
      let value = p[1];

      console.log(name, value);
    }

    console.log("Form submitted!");
  };

  return (
    <div className="max-w-[1450px] mx-auto px-3 flex flex-col">
      <form
        className="flex flex-col gap-4 w-full h-full min-h-screen pt-24 pb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-4xl text-center py-3">Add Business</h1>
        <div className="md:flex gap-4 w-full h-full">
          <div className="md:border-r-2 md:pr-4 md:border-slate-500 h-fit justify-center">
            <div className="w-fit mx-auto">
              <ImageInput
                msg="Click to change your logo!"
                imageFile={logo}
                setImageFIle={setLogo}
              />
            </div>
            <div className="group-input w-full max-w-sm">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Business Name"
              />
            </div>

            <div className="group-input w-full max-w-sm">
              <label htmlFor="fundNeeded">Fund Needed</label>
              <input
                type="number"
                name="fundNeeded"
                id="fundNeeded"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between h-auto">
            <div></div>
            <div>
              <label htmlFor="overview" className="font-bold">
                Overview
              </label>
              <textarea
                name="overview"
                id="overview"
                className="w-full"
              ></textarea>

              <label htmlFor="images" className="font-bold">
                Business Photo
              </label>
              <div className="flex gap-2">
                <div className="relative flex gap-2">
                  <ImageInput size="small" setImageFIle={setImage} />
                </div>
              </div>

              <div className="flex gap-4 my-4">
                <label
                  htmlFor="pdfFile"
                  className="relative inline-flex items-center justify-center w-42 h-10 px-4 py-2 bg-red-600 rounded-md text-white cursor-pointer hover:bg-red-400"
                >
                  <span>Input Prospectus(.pdf)</span>
                  <input
                    type="file"
                    name="pdfFile"
                    id="pdfFile"
                    accept="application/pdf"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </label>
                {selectedFile && (
                  <p className="mt-2 max-w-md text-ellipsis overflow-hidden whitespace-nowrap">
                    {selectedFile.name ?? "No selected file"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2 justify-end py-4">
              <button
                type="button"
                className="flex h-12 w-fit items-center px-4 py-1 text-red-600 font-bold hover:bg-red-100 border-2 border-red-600 mb-2 rounded-lg"
              >
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
