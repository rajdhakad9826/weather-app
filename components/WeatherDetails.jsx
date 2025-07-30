import React from 'react'
import './WeatherDetails.css';
import { MdOutlineVisibility } from "react-icons/md";
import { FiThermometer, FiDroplet } from "react-icons/fi";
import { WiStrongWind } from 'react-icons/wi';


const WeatherDetailBox = ({ label, value, icon }) => {
  return (
    <div className="weather-detail-box">
          <div className="icon-weather-details">
            {icon}
          </div>
          <div className="Details">
              <h1 className="label">{label}</h1>
              <h1 className="value">{value}</h1>
        </div>
    </div>
  )
}

const WeatherDetails = ({ humidity, windSpeed, feelsLike, visibility }) => {
  return (
    <div className="weather-details">
      <WeatherDetailBox label="Humidity" value={`${Math.round(humidity)}%`} icon={<FiDroplet />} />
      <WeatherDetailBox label="Wind Speed" value={`${Math.round(windSpeed)} km/h`} icon={<WiStrongWind />} />
      <WeatherDetailBox label="Visibility" value={`${Math.round(visibility)} km`} icon={<MdOutlineVisibility />} />
      <WeatherDetailBox label="Feels Like" value={`${Math.round(feelsLike)}°C`} icon={<FiThermometer />} />
    </div>
  )
}

export default WeatherDetails