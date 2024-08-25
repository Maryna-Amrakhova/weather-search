function apdateWeather(response) {
    let currentTemperature = document.querySelector("#temp");
    currentTemperature.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "btf3a0c41c82o04bde5657e178c809b4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(apdateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#main-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
