"use client";

import { useEffect, useRef, useState } from "react";
import "./investAdd.css";
import ImageInput from "@/components/ImageInput";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BASE_URL } from "@/config/Url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVpZ2kiLCJhIjoiY2xnYjhxbzdhMXA4ZTNsbzd2Nm80OWsycSJ9.bIZhzPsqKFWtpMgJHDfM7Q";

const Page = () => {
  const router = useRouter();
  const [logo, setLogo] = useState({});
  const [image, setImage] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "" });
  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!localStorage.getItem("access_token")) throw "Please login first";
      const fd = new FormData(event.target);

      const name = event.target.name.value;
      const fundNeeded = event.target.fundNeeded.value;
      const overview = event.target.overview.value;
      const locationDetail = event.target.locationDetail.value;
      // const locationDetail = event.target.locationDetail.value;
      const locations = markerCoordinates;

      if (
        !logo.name ||
        !image.name ||
        !name ||
        !fundNeeded ||
        !overview ||
        !locations.length ||
        !locationDetail ||
        !selectedFile.name
      ) {
        throw "Please insert all data";
      }

      fd.append(`logo`, logo, logo.name);
      fd.append(`image`, image, image.name);
      fd.append(`pdf`, selectedFile, selectedFile.name);
      fd.append("locations", locations);

      const response = await fetch(BASE_URL + "/bussinesses", {
        method: "post",
        headers: { token: localStorage.getItem("access_token") },
        body: fd,
      });

      if (!response.ok) {
        throw response;
      }
      router.push("/invest");
    } catch (error) {
      toast.error(String(error));
    }
  };

  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.5, 40],
      zoom: 9,
    });

    map.on("contextmenu", (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerCoordinates([lng, lat]);

      if (markerRef.current) {
        markerRef.current.remove();
      }

      markerRef.current = new mapboxgl.Marker()
        .setLngLat({ lng, lat })
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="max-w-[1450px] mx-auto px-3 flex flex-col">
      <ToastContainer />
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
            <div
              ref={mapContainerRef}
              className="w-auto h-[25vh] bg-[#ebebeb] absolute top-0 left-0"
            />

            <div>
              <div className="flex-grow">
                <div className="my-2">
                  <label htmlFor="overview" className="font-bold">
                    Address
                  </label>
                  <input
                    type="text"
                    name="locationDetail"
                    id="locationDetail"
                    autoComplete="off"
                    placeholder="Your Business Address"
                  />
                </div>
                <div className="flex gap-4 my-4">
                  <div className="flex flex-col">
                    <label htmlFor="images" className="font-bold">
                      Business Photo
                    </label>
                    <div className="relative flex gap-2">
                      <ImageInput size="small" setImageFIle={setImage} />
                    </div>
                  </div>
                  <div className="w-full ">
                    <label htmlFor="overview" className="font-bold">
                      Overview
                    </label>
                    <textarea
                      name="overview"
                      id="overview"
                      className="w-full p-2"
                    ></textarea>
                  </div>
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
