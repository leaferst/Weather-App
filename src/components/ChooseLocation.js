import React, { useEffect } from 'react'
import AddressInput from './AddressInput'
import WeatherInfo from './WeatherInfo'

function ChooseLocation({setAddress, setIsForCustom}) {

  return (
    <div>
      <AddressInput setAddress={setAddress} setIsForCustom={setIsForCustom}/>
      <WeatherInfo />
    </div>
  )
}

export default ChooseLocation