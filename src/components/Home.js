import React, { useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import styles from './Home.module.css';

function Home( {setIsForCustom} ) {

  useEffect(() => {
    setIsForCustom(false);
  }, [])

  return (
    <div>
        <WeatherInfo />
    </div>
  );
}

export default Home;