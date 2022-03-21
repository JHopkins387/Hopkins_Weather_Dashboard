let userFormEl = document.querySelector("#user-form");
let stateEl = document.querySelector("#state");
let cityInput = document.querySelector("#cityInput");
let weatherSectionEl = document.querySelector("#weather-section");
let cityHeaderEl = document.querySelector("#city-header");
let futureWeatherEl = document.querySelector("#future-weather");
let futureDataEl = document.querySelector("#future-data");

let formSubmitHandler = function (event) {
    event.preventDefault();
    let searchEntry = cityInput.value.trim();
    if (searchEntry) {
        getStates(searchEntry);
    } else {
        alert("Please enter a city.");
    }
}