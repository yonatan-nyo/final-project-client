"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVpZ2kiLCJhIjoiY2xnYjhxbzdhMXA4ZTNsbzd2Nm80OWsycSJ9.bIZhzPsqKFWtpMgJHDfM7Q";

const handleDownload = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("pdfproject.com/pdf/sample.pdf");
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
  } catch (error) {
    console.log(error);
    alert("Failed to download");
  }
};

const DetailPage = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      interactive: false,
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen text-center">
      <div
        id="map"
        className="w-screen mt-20 h-[25vh] bg-[#ebebeb] absolute top-0 left-0"
      />

      {/* Content */}
      <div className="absolute top-0 left-0 mt-20 py-[15vh] h-auto flex flex-col w-screen mx-auto">
        <section className="w-full max-w-[1450px] mx-auto flex justify-start overflow-x-hidden">
          <div className="h-[20vh] px-4">
            <Image
              className="object-cover w-auto h-full"
              width={400}
              height={400}
              src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="IMAGE"
            />
          </div>
          <div className="text-left flex flex-col justify-end">
            <p className="font-bold text-xl bg-white/80 p-2 uppercase rounded-md w-fit">
              Category
            </p>
            <p className="font-bold text-4xl mt-4">Business Name</p>
            <div className="flex gap-4 mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-lg">
                INVEST
              </button>
              <button
                onClick={handleDownload}
                className="bg-red-500 hover:bg-red-700 text-white rounded-md shadow-lg"
              >
                PROSPEKTUS
              </button>
            </div>
          </div>
        </section>
        <section className="w-full max-w-[1450px] mx-auto justify-start mt-10 gap-4 px-4">
          <div className="w-72 h-72 flex-shrink-0 float-left p-4">
            <Image
              className="object-cover w-68 h-68"
              width={400}
              height={400}
              src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="IMAGE"
            />
          </div>
          <div className="flex-grow text-left">
            <p className="font-bold text-2xl">Overview</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              orci id massa pharetra tristique quis ut libero. Sed risus sem,
              suscipit vel volutpat eget, lobortis nec enim. Ut feugiat dui
              ipsum, vel porttitor orci sagittis sed. Integer et leo fermentum,
              venenatis nibh ac, semper massa. Vivamus rutrum imperdiet
              lobortis. Phasellus hendrerit nulla non ante ullamcorper
              fermentum. Nulla in purus ut sem semper convallis. In molestie
              diam in vehicula pretium. Sed lectus felis, mattis at vestibulum
              sed, tristique tincidunt risus. Sed non feugiat dolor. Maecenas
              mattis viverra mauris vitae scelerisque. Quisque volutpat semper
              gravida. Morbi pharetra lacinia gravida. Fusce sit amet viverra
              sapien. Phasellus rutrum felis et justo malesuada, ut sodales urna
              consectetur. Mauris ac eleifend diam, in pellentesque enim.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
