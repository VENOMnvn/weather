import axios from 'axios';
import { useRef} from 'react';
import { useState } from 'react';
import WeatherScreen from './WeatherScreen';

const apiKey = "0d7dace9bc88448963f73ee11a0c24be";

const HomeScreenLocation = ()=>{
const inputField = useRef();
const [weather,setWeather] = useState(null);
const [isError,setError] = useState(false);
const [isLoad,setLoad] = useState(false);

const handleSearch = async ()=>{
    setError(false);
    try{
        if(inputField.current.value === "" || inputField.current.value.length<2){
            setError("Value is Too Small to search")
            return;
        }
        setLoad(true);
        const urlByName = `http://api.openweathermap.org/geo/1.0/direct?q=${inputField.current.value}&limit=5&appid=${apiKey}`;
        const result = await axios.get(urlByName);
        console.log("result",result);
        if(result.data.length === 0){
            setError("Location is inValid or not found , Please Enter correct details")
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${result.data[0].lat}&lon=${result.data[0].lon}&appid=${apiKey}`;
        const weatherData = await axios.get(url);
        console.log(weatherData);
        setLoad(false);
        setWeather(weatherData);
    }catch(err){
        setLoad(false);
        setError("Network Error ! Please refresh or try again some time");
    }

};

return <div>
{ !weather ?
<div className="homescreenLocation">
 <div className="Modal">
<div className="modal-title location">Search by location</div>
<input type="text" className="textinput" placeholder="Enter location" ref={inputField}></input>
<div className="button" onClick={handleSearch}>  {isLoad?<span class="loader"></span>:"Search"}</div>
{isError?<div className='error'>{isError}</div>:""}
</div> </div>: <WeatherScreen data={weather}></WeatherScreen>}
</div>
}
export default HomeScreenLocation;