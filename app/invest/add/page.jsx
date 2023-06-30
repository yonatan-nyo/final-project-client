"use client";

import { useEffect, useState } from "react";
import "./investAdd.css";
import ImageInput from "@/components/ImageInput";

const Page = () => {
  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState([{ name: "", file: "" }]);
  const [selectedFile, setSelectedFile] = useState({ name: "" });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAddImage = () => {
    setImages([...images, { name: "", file: "" }]);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);

    images.forEach((image, index) => {
      const file = new File([image.file], image.name);
      fd.append(`image${index}`, file);
    });

    const name = event.target.name.value;
    const fundNeeded = event.target.fundNeeded.value;
    const overview = event.target.overview.value;

    fd.append("name", name);
    fd.append("fundNeeded", fundNeeded);
    fd.append("overview", overview);

    console.log(fd, "ffffffddddddddd");
    console.log("Form submitted!");
  };

  useEffect(() => {
    console.log(logo);
  }, [logo]);

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
                Images
              </label>
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative flex gap-2">
                    <ImageInput size="small" />
                    <button
                      className="w-8 h-8 bg-red-500 text-white rounded-full flex justify-center items-center text-sm absolute -top-1 -right-1"
                      onClick={() => handleDeleteImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 bg-slate-200 cursor-pointer flex justify-center items-center flex-col"
                  onClick={handleAddImage}
                >
                  <p className="text-[40px]">+</p>
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
