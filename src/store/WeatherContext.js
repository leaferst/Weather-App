import React, { createContext, useReducer } from 'react'
import WeatherReducer, { defaultApp } from './WeatherReducer.js';

const WeatherContext = createContext(null);

function WeatherProvider({ children, app, setApp }) {

  const [state, dispatch] = useReducer(WeatherReducer, defaultApp);

  return (
    <WeatherContext.Provider value={{app, setApp}}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherProvider, WeatherContext }