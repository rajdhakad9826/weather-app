import { use, useEffect, useState } from 'react'
import './App.css'
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import ForecastList from '../components/ForecastList';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Delhi')
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    if (!city) return;
    const timer = setTimeout(() => {
      fetchWeatherData()
    }, 800) 
    return () => clearTimeout(timer)
  }, [city])

  const fetchWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    if (!response.ok || !forecastResponse.ok) {
      console.error('Error fetching weather data');
      return;
    }
    const data = await response.json()
    const forecastData = await forecastResponse.json()
    console.log(data)
    console.log(forecastData)
    if (data.cod != '200') {
      console.error(`Error fetching weather data: ${data.message}`);
      return;
    }
    if (data.cod === '404') {
      console.error('City not found');
      return;
    }
    setWeatherData(data);
    filterForecastData(forecastData);
  }

  const filterForecastData = (data) => {
    const filtered = data.list.filter((item) => {
      const date = new Date(item.dt * 1000);
      return date.getHours() === 23; // Keep only 11 PM forecasts
    });
    setForecastData(filtered);
    console.log(filtered,'<filtered_forecast_data>');
  }

  return (
    <div className="app">
      <SearchBar city={city} setCity={setCity} />
      {weatherData && (
  <>
    <WeatherCard weatherData={weatherData} />
    <WeatherDetails
      humidity={weatherData.main.humidity}
      windSpeed={weatherData.wind.speed * 3.6}
      feelsLike={weatherData.main.feels_like}
      visibility={weatherData.visibility / 1000}
    />
  </>
)}
      {forecastData && (
        <ForecastList forecastData={forecastData} />
      )}
    </div>
  )
}

export default App
