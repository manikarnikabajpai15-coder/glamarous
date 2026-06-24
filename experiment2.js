import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] =
    useState(null);

  const getWeather = async () => {
    const apiKey = "YOUR_API_KEY";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      <button onClick={getWeather}>
        Search
      </button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>
            Temperature:
            {weather.main.temp}°C
          </p>
        </div>
      )}
    </div>
  );
}

export default App;