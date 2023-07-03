"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import "./invest.css";
import { BASE_URL } from "@/config/Url";
import "mapbox-gl/dist/mapbox-gl.css";

const Invest = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(BASE_URL + "/bussinesses");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const filterData = () => {
    const filtered = data.filter((item) =>
      item.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="pt-20 max-w-[1450px] mx-auto flex flex-col justify-between min-h-screen text-center">
      <div>
        <h1 className="font-bold text-[60px] leading-relaxed">Invest Mate</h1>
        <div className="w-full px-3">
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-left">
                <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>

                <input
                  type="text"
                  className="searchbar-input"
                  maxLength="2048"
                  name="q"
                  autoCapitalize="off"
                  autoComplete="off"
                  title="Search"
                  // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                  role="combobox"
                  placeholder="Search Business Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-y-4 justify-between my-4">
          {filteredData.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;
