
import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box'
import Search from './components/Search'

function App() {
  const[inp, setInp] = useState('');
  const[btn, setBtn] = useState(false);
  const[weatherData, setWeatherData] = useState('');

  const fetchWeather = async() => {
    try {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
      .then((res) => res.json())
      .then((res) => setWeatherData(res))
      
    } catch (error) {
      console.log("error found");
      
    }
  }
  const handleSearch = () => {
    setBtn(true);
    inp.slice(0, 1).toUpperCase();
    fetchWeather();
    setBtn(false)
  }
  console.log(weatherData && weatherData);
  

  return (
    <>
    <div className="flex justify-center mt-9">
      <div className="main rounded">
        <div className="img">

          <Search inp={inp} setInp={setInp} handleSearch={handleSearch} setBtn={setBtn}/>
          
          { weatherData ? 
          (
            <div className='text-center'>
              <p className='font-bold text-3xl'>{weatherData.weather[0].description}</p>
              <p className='text-3xl'>{weatherData.name}</p>
              <p className='text-5xl font-extrabold'>{weatherData.main.temp}<sup>o</sup></p>
            </div>
          ) : 
          (
            <div className='text-center'>
              <p className='font-bold text-3xl'>cloudy</p>
              <p className='text-3xl'>Karachi</p>
              <p className='text-5xl font-extrabold'>24.6<sup>o</sup></p>
            </div> 
          )
          }
        </div>

          <Box />
      </div>
    </div>
    </>
  )
}

export default App

