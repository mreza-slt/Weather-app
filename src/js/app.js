const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document
  .querySelector("#w-change-btn")
  .addEventListener("click", changeLocation);

function changeLocation(e) {
  const city = document.getElementById("city").value;
  e.preventDefault();
  if (city === "") {
    document.querySelector(".city").innerHTML = "City must not be empty";
    document.querySelector(".city").style.color = "red";
  } else {
    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
  }
}

function getWeather() {
  // get days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const today = days[d.getDay()];

  // get full years
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + " / " + monthNames[month] + " / " + day;

  weather
    .getWeather()
    .then((result) => {
      ui.paint(result, weather.location, today, newdate);
    })
    .catch((err) => console.log(err.message));
}
