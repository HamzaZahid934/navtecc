const apiKey = "98df89ab6167f1807ca550c8f7e412fe";

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherInfo = document.getElementById("weather-info");

  if (city === "") {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherInfo.innerHTML = "City not found.";
    } else {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Weather: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
    }
  } catch (error) {
    weatherInfo.innerHTML = "Error fetching weather data.";
    console.error(error);
  }
}
