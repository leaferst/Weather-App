import React, { useEffect } from 'react';
import { useContext } from 'react';
import {WeatherContext} from '../store/WeatherContext';
import styles from './WeatherInfo.module.css';


// use this to grab weather info from the object to prepare for displayment
function WeatherInfo() {
  const { app } = useContext(WeatherContext);
  const {weatherData, location} = app;
  
  if (!app.weatherData) {
    // console.log('currently no data');
    return null;
  }
  
  const {name,main,weather,icon} = weatherData;
    console.log(icon);

  return (
    <div className={styles.weatherContainer}> 
        <h2>{name}</h2>
        <h2>{main.temp}° F</h2>
        <h2>{weather[0].main}</h2>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
    </div>
  );
}

export default WeatherInfo