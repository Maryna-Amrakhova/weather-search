function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#main-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
