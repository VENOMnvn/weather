import './WeatherScreen.css';

const WeatherScreen = (params) => {
  const data = params.data.data;

  return (
    <div className="weather-screen">
      <div className="weather-window">
        <div className="left">
            <div className="top">
             {data.name} , {data?.sys?.country}
            </div>
            <div className="bottom">
            <p className='subHead'>Main : {data.weather[0].main} </p>
            <p className='subHead'>Description : {data.weather[0].description}</p>
            <p>Temprature :  {data.main.temp - 273} C</p>
            <p>Humidity :  {data.main.humidity } </p>
            <p>Winds : {data.wind.speed} at {data.wind.deg} Degree </p>
            <p>Latitude :  {data.coord.lat}</p>
            <p>Longitude : {data.coord.lat}</p>
            <p>Base :  {data.base}</p>
            </div>
        </div>
        <div className="right">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt='ImageURL'/>
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
