const apiKey = "98df89ab6167f1807ca550c8f7e412fe";

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherInfo = document.getElementById("weather-info");

  if (city === "") {
    weatherInfo.innerHTML =
      "<p class='text-red-500'>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherInfo.innerHTML = "<p class='text-red-500'>City not found.</p>";
    } else {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherInfo.innerHTML = `
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-2">${data.name}</h2>
          <p class="text-lg font-semibold mb-4">${
            description.charAt(0).toUpperCase() + description.slice(1)
          }</p>
          <div class="flex justify-center items-center">
            <div class="bg-blue-500 text-white rounded-full h-15 w-35 flex items-center justify-center text-2xl font-bold mr-4">
              ${temp}°C
            </div>
            <div class="text-left">
              <p class="mb-2"><span class="font-semibold">Humidity:</span> ${humidity}%</p>
              <p><span class="font-semibold">Wind Speed:</span> ${windSpeed} m/s</p>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    weatherInfo.innerHTML =
      "<p class='text-red-500'>Error fetching weather data.</p>";
    console.error(error);
  }
}
