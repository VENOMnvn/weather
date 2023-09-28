import "./WeatherScreen.css";

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
            <p className="subHead"><span>Main</span> <span>{data.weather[0].main}</span> </p>
            <p>
              <span>Humidity</span>
              <span>{data.main.humidity} </span>
            </p>
            <p>
              <span>Winds {data.wind.speed}</span>
              <span>at {data.wind.deg} Degree </span>
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
          <p className="temp">{Math.floor(data.main.temp)} <span>{"K"}</span></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
