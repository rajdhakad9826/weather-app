import React from 'react';

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

const GetWeatherIcon = ({weather}) => {
  switch (weather) {
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

export default GetWeatherIcon;