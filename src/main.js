function apdateWeather(response) {
  let currentTemperature = document.querySelector("#temp");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let currentDescription = document.querySelector("#description");
  currentDescription.innerHTML = response.data.condition.description;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  let currentSpeedWind = document.querySelector("#wind-speed");
  currentSpeedWind.innerHTML = `${response.data.wind.speed}km/h`;
  let currentDay = document.querySelector("#day");
  let date = new Date(response.data.time * 1000);
  currentDay.innerHTML = formatDate(date);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes},`;
}

function searchCity(city) {
  let apiKey = "btf3a0c41c82o04bde5657e178c809b4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(apdateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#main-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Kyiv");
