import axios from 'axios';
import { useRef} from 'react';
import { useState } from 'react';
import WeatherScreen from './WeatherScreen';

const apiKey = "0d7dace9bc88448963f73ee11a0c24be";


// const urlByName = `http://api.openweathermap.org/geo/1.0/direct?q=hbhb&limit=5&appid=${apiKey}`;

const HomeScreen = ()=>{
const inputField = useRef();
const [weather,setWeather] = useState(null);

const handleSearch = async ()=>{
    try{
        if(inputField.current.value === "" || inputField.current.value.length>6 || isNaN(inputField.current.value)){
            console.log("error");
            return;
        }
        const urlByPinCode = `http://api.openweathermap.org/geo/1.0/zip?zip=${inputField.current.value},IN&appid=${apiKey}`;
        const result = await axios.get(urlByPinCode);

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${result.data.lat}&lon=${result.data.lon}&appid=${apiKey}`;
        const weatherData = await axios.get(url);
        console.log(weatherData);
        setWeather(weatherData);

    }catch(err){

    }
    
};

return <div className="homescreen">
{ !weather ? <div className="Modal">
<div className="modal-title">Search by PINCODE</div>
<input type="text" className="textinput" placeholder="Enter PINCODE" ref={inputField}></input>
<div className="button" onClick={handleSearch}>Search</div>
</div> : <WeatherScreen data={weather}></WeatherScreen>}

</div>
}
export default HomeScreen;