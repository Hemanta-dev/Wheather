import { useState, useEffect } from "react";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kathmandu");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0252751ffd25703479c78dabbdddcf58`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);

      setCity(resJson.main);
    };

    if (search && search.trim() !== "") {
      fetchApi();
    }
  }, [search]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  let imageSrc;

  if (city && city.temp > 30) {
    imageSrc =
      "https://www.freepnglogos.com/uploads/sun-png/sun-png-image-qvcc-11.png";
  } else if (city && city.temp <= 30 && city.temp >= 15) {
    imageSrc =
      "https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png";
  } else if (city && city.temp < 15) {
    imageSrc =
      "https://static.vecteezy.com/system/resources/previews/011/338/288/original/snowy-cold-weather-day-png.png";
  }

  return (
    <>
      <div className="box">
        <div className="Header-content">
          <h1>Current Weather</h1>
          <input
            type="search"
            className="inputField"
            placeholder="Find your city weather.."
            onKeyPress={handleKeyPress}
          />
          <h1>{time.toLocaleTimeString()}</h1>
        </div>
        <div className="Header-body">
          <div className="container">
            {!city ? (
              <h1>No data found</h1>
            ) : (
              <div className="info">
                <div className="row">
                  <div class="col-md-6 text-center">
                    <h2 className="location">{search}</h2>
                  </div>
                  <div class="col-md-6 text-center Header-body-second">
                    <div className="Header-body-image">
                      <img src={imageSrc} alt="weather-icon" />
                      <div className="temp-descrip">
                        <h4 className="Temp">{city.temp}°C </h4>
                        <h3>
                          Min Temperature: <span>{city.temp_min}°C</span>
                        </h3>
                        <h3>
                          Max Temperature:
                          <span>{city.temp_max}°C</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
