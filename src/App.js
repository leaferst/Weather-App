import { Route, Routes } from 'react-router-dom';
import { useReducer, useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar.js';
import ChooseLocation from './components/ChooseLocation.js';
import Map from './components/Map.js';
import './App.css';
import {WeatherProvider} from './store/WeatherContext.js';
import WeatherReducer from './store/WeatherReducer.js';
import useGetLocationAndWeather from './hooks/useGetLocationAndWeather.js.js';

function App() {

  const [address, setAddress] = useState('110 400 W, Salt Lake City, UT 84101');
  const [isForCustom, setIsForCustom] = useState(false);
  const [app,dispatch] = useReducer(WeatherReducer, {weatherData: null});
  useGetLocationAndWeather(dispatch, address, isForCustom);

  return (
    <WeatherProvider app={app} setApp={dispatch}>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={ <Home setIsForCustom={setIsForCustom} /> } />
            <Route path='/ChooseLocation' element={ <ChooseLocation setIsForCustom={setIsForCustom} setAddress={setAddress}/> } />
            <Route path='/Map' element={ <Map /> } />
          </Routes>
      </div>
    </WeatherProvider>
  );
}

export default App;

// I want to:


// 1. Go through the weather options and assign a photo, background color, and note to each one that displays on the screen
// 2. Have address suggestions pop up as the user is typing in the input for a custom location
// 3. Get the World Map page to work.