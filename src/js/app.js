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
    toggleModal();

    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
  }
}

function getWeather() {
  // get days
  const days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const d = new Date();
  const today = days[d.getDay()]; //1 today
  const to_1 = days[d.getDay() + 1]; //2 tomarrow
  const to_2 = days[d.getDay() + 2]; //3 ...
  const to_3 = days[d.getDay() + 3]; //4 ...

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
      console.log(result.forecast.forecastday[0]);
      ui.paint(result, weather.location, today, newdate, to_1, to_2, to_3);
    })
    .catch((err) => console.log(err.message));
}

// modal
var openmodal = document.querySelectorAll(".modal-open");
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal();
  });
}
function toggleModal() {
  document.querySelector(".city").innerHTML = "City";
  document.querySelector(".city").style.color = "black";
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  body.classList.toggle("modal-active");
}
