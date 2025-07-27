import { use, useEffect } from 'react'
import './App.css'
const apiKey = import.meta.env.VITE_API_KEY;
console.log('Loaded API Key:', import.meta.env.VITE_API_KEY);

function App() {

  useEffect(() => {
    fetchWeatherData()  
  }, [])

  const fetchWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}`)
    const data = await response.json()
  }

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default App
