"use client";
import React, { useState } from "react";
import TodayWeatherCard from "./components/TodayWeatherCard";
import SearchInput from "./components/SearchInput";
import WeatherForecastList from "./components/WeatherForecastList";
import WeatherDetails from "./components/WeatherDetails";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    try {
      const response = await fetch(`/api/weather?location=${location}`);
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.error) {
          setError("City not found");
          setData({});
        } else {
          setData(responseData);
          setError("");
        }
      } else {
        throw new Error();
      }
    } catch (error) {
      setError("City not found");
      setData({});
    }
  };

  console.log("location: " + location);

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 h-fit">

      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <SearchInput handleSearch={handleSearch} setLocation={setLocation} />
        </div>
        {Object.keys(data).length > 0 ? (
          <>
            <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
              <TodayWeatherCard data={data} />
              <WeatherForecastList data={data} />
            </div>
            <div>
              <WeatherDetails data={data} />
            </div>
          </>
        ) : (
          <div className="text-white text-center h-fit mb-[2rem]">
            <h2 className="text-3xl font-semibold mb-4">
              {error ? "City not found" : "Welcome to the Weather Forecast App"}
            </h2>
            <p className="text-xl">
              {error ? "Please enter a valid city name" : "Discover the weather in your city"}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}