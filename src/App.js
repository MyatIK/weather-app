import {useState,useEffect} from 'react';
import './App.css';


function App() {

  
  const [city,setCity]=useState('London');
  const [info,setInfo]=useState([{
    temperature: 16,
    humidity: 60,
    windspeed: 15,
    description: "clear skys",
    visibility: 1000,
    feelsLike: 12
  }]);
  

    const getWeather =(e)=>{
    if (e.key === "Enter"){
      return setCity(e.target.value);
      
    }
  }

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEYWEATHER}&units=metric`)
    .then (response => response.json())
    .then (data => setInfo({temperature: data.main.temp, humidity: data.main.humidity, windspeed: data.wind.speed, visibility: data.visibility, feelsLike: data.main.feels_like ,description: data.weather[0].description}))

    },[city]);
  


  return (
    <div>
      <div className="searchbar">
        <input 
          onKeyDown={getWeather}
          type="text" id="search" 
          placeholder="Search"/>
      </div>
      <div className="space"></div>
      <div className="contentArea">
        <div className="row">
          <div className="col-12 col-sm-6">
          <h1 id="cityName" style={{color: "white"}}>{city}</h1>
          </div>
          <div className="col-12 col-sm-6">
            <p id="condition" style={{color: "white"}}>{info.description}</p>
          </div>
        </div>
        <div className="row"> 
          <div className="col">
          < p id="temp" style={{color: "white"}}>{Math.round(info.temperature)} ℃</p>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 card">
                <div className="card-body">
                  <h5 className="card-title">Feels Like</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
                    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
                    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                  </svg>
                  
                  <p id="humidity" className="card-text">{info.feelsLike} ℃</p>
                </div>
            </div>
            <div className="col-12 col-sm-3 card">
              <div className="card-body">
                <h5 className='card-title'>Visibility</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                <p id="visibility" className="card-text">{info.visibility} m</p>
              </div>
        
            </div>
            <div className="col-12 col-sm-3 card">
              <div className="card-body">
                <h5 className="card-title">Humidity</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
                  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
                </svg>
                <p id="humidity" className="card-text">{info.humidity}</p>
              </div>
            </div>
            <div className="col-12 col-sm-3  card">
              <div className="card-body">
                <h5 className="card-title">Wind Speed</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                
                <p id="windspeed" className="card-text">{info.windspeed} km/h</p>
              </div>
              
            </div>
          </div>

        </div>
        
      
      </div>
     
        
    

      
       
      
      
    </div>
  );
}

export default App;
