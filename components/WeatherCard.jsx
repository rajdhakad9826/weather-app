import React from "react";
import "./WeatherCard.css";
import { FaLocationDot } from "react-icons/fa6";
import GetWeatherIcon from "./GetWeatherIcon";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weatherCard myevent">
      <div className="location">
        <FaLocationDot />
        <span>
          {weatherData?.name ?? 'Unknown City'}, {weatherData?.sys?.country ?? 'Unknown Country'}
        </span>
      </div>
      <div className="weather">
        <div className="temperature">
          <h1>{Math.round(weatherData?.main?.temp ?? 0)}&deg;</h1>
          <p className="description">{weatherData?.weather[0]?.description ?? 'Unknown Weather'}</p>
          <p className="feels-like">
            Feels like {Math.round(weatherData?.main?.feels_like ?? 0)}&deg;
          </p>
        </div>
        <div className="icon">
          {<GetWeatherIcon weather={weatherData?.weather[0]?.main} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
