"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiaHVpZ2kiLCJhIjoiY2xnYjhxbzdhMXA4ZTNsbzd2Nm80OWsycSJ9.bIZhzPsqKFWtpMgJHDfM7Q";

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
      <div id="map" className="w-screen mt-20 h-[25vh] bg-[#ebebeb] absolute top-0 left-0" />

      {/* Content */}
      <div className="absolute top-0 left-0 mt-20 py-[25vh] h-auto">
        <p>haha</p>
      </div>
    </div>
  );
};

export default DetailPage;
