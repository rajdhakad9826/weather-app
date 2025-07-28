import React from "react";
import "./WeatherCard.css";
import { IoIosSunny } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiSprinkle,
  WiDust,
  WiTornado,
} from "react-icons/wi";

const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return <WiDaySunny/>;
    case "Clouds":
      return <WiCloud/>;
    case "Rain":
      return <WiRain/>;
    case "Drizzle":
      return <WiSprinkle/>;
    case "Thunderstorm":
      return <WiThunderstorm/>;
    case "Snow":
      return <WiSnow/>;
    case "Mist":
    case "Haze":
    case "Fog":
      return <WiFog/>;
    case "Dust":
    case "Sand":
      return <WiDust/>;
    case "Tornado":
      return <WiTornado/>;
    default:
      return <WiDaySunny/>;
  }
};

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
          {getWeatherIcon(weatherData?.weather[0]?.main)}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
