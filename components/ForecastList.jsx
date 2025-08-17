import React from 'react'
import './ForecastList.css'
import GetWeatherIcon from './GetWeatherIcon';

const Card = ({ weatherData, weatherIcon }) => {

const makeDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString('en-US', { weekday: 'short' })}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`;
};

  return (
    <div className="forecast-card">
      <h3>{makeDate(weatherData.dt * 1000)}</h3>
      <div className="icon">
        {weatherIcon}
      </div>
      <p className='description'>{weatherData.weather[0].description}</p>
      <p className='temperature'>{Math.round(weatherData.main.temp)}°C</p>
    </div>
  )   
}

const ForecastList = ({ forecastData }) => {
  return (
    <div className="forecast-list">
      <h2>Forecast</h2>
      <div className="forecast-box">
          {forecastData.map((item, index) => (
            <Card key={index} weatherData={item} weatherIcon={<GetWeatherIcon weather={item.weather[0].main} />} />
          ))}
      </div>
    </div>
    
  )
}

export default ForecastList