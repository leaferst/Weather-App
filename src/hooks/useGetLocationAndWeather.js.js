import axios from 'axios';
import { useEffect } from 'react'

function useGetLocationAndWeather(dispatch, address, isForCustom) {

    // console.log(isForCustom);
    // console.log('custom address is currently: ' + address);
    // console.log('isForCustom is currently: ' + isForCustom)

    useEffect(() => {
        // console.log('UseEffect is running')
        // Honestly, I spent hours trying to clean this up and it just kept breaking.

        navigator.geolocation.getCurrentPosition(async (position) => {
            let resGoogleAPI = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${'AIzaSyDiNUPv29KZG48JNppcdGkNhoJ9S9oz80o'}`);

            let custom = resGoogleAPI.data.results[0].geometry.location;

            let coord = {};
            if (isForCustom) {
                coord.latitude = custom.lat;
                coord.longitude = custom.lng;
            } else {
                coord.latitude = position.coords.latitude;
                coord.longitude = position.coords.longitude;
            }

            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=c5b35a4dcb10fd03b2abf2d08724de5f`);

            let x = res.data;
            x.main.temp = Number(((x.main.temp - 273.15) * (9/5) + 32).toFixed(1));
            let payload = {location: coord, weatherData: x};
            dispatch({type: 'loadLocationAndWeather', payload});
        });
    

    }, [isForCustom, address])
}
export default useGetLocationAndWeather;