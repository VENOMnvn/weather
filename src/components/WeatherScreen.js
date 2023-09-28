import "./WeatherScreen.css";

const WeatherScreen = (params) => {
const data = params.data.data;
const units = params.units;

  return (
    <div className="weather-screen">
      <div className="weather-window">
        <div className="left">
          <div className="top">
            {data.name} , {data?.sys?.country}
          </div>
          <div className="bottom">
            <p className="subHead"><span>Main</span> <span>{data.weather[0].main}</span> </p>
            <p>
              <span>Humidity</span>
              <span>{data.main.humidity}%</span>
            </p>
            <p>
              <span>Winds </span>
              <span>{ units ? (data.wind.speed*36/10).toFixed(2) + " KM/H " : (data.wind.speed*2.2369).toFixed(2) + " MPH "}</span>
            </p>
            <p>
              {" "}
              <span>Latitude </span> <span>{data.coord.lat}</span>
            </p>
            <p>
              <span>Longitude</span> <span>{data.coord.lat}</span>
            </p>
            <p>
              {" "}
              <span>Base</span> <span>{data.base}</span>
            </p>
          </div>
        </div>
        <div className="right">
          <p>Current Weather</p>
          <p className="subHead">{data.weather[0].description}</p>
          <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="ImageURL"
          />
          
          <p className="temp"> {units ? <div>{(data.main.temp-273).toFixed(1)} <span>{"°C"}</span></div>: <div>{(((data.main.temp - 273.15)*9/5)+32).toFixed(1)} <span>{"°F"}</span></div> }</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
