import { use, useEffect, useState } from 'react'
import './App.css'
import SearchBar from '../components/SearchBar';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Delhi')

  useEffect(() => {
    if (!city) return;
    const timer = setTimeout(() => {
      fetchWeatherData()
    }, 800) 
    return () => clearTimeout(timer)
  }, [city])

  const fetchWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = await response.json()
    console.log(`Fetching weather data for ${city}...`)
    console.log(data)
    if (data.cod !== 200) {
      console.error(`Error fetching weather data: ${data.message}`);
      return;
    }
    if (data.cod === '404') {
      console.error('City not found');
      return;
    }
    setWeatherData(data);
  }

  return (
    <div className="app">
      <SearchBar city={city} setCity={setCity} />
      <h1>{weatherData ? weatherData.sys.country : 'Loading...'}</h1>
    </div>
  )
}

export default App
