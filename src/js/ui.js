class UI {
  constructor() {
    this.today = document.querySelector(".today");
    this.date = document.querySelector(".date");
    this.location = document.querySelector(".w-location");
    this.main = document.querySelector(".w-main");
    this.icon = document.querySelector(".w-icon");
    this.temp = document.querySelector(".w-temp");
    this.pressure = document.querySelector(".w-pressure");
    this.humidity = document.querySelector(".w-humidity");
    this.wind_speed = document.querySelector(".w-wind_speed");
  }

  paint(weather, location, today, newdate) {
    this.today.textContent = today;
    this.date.textContent = newdate;
    this.location.textContent = location;
    this.main.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.temp.textContent = weather.main.temp + " F";
    this.pressure.textContent = weather.main.pressure;
    this.humidity.textContent = weather.main.humidity;
    this.wind_speed.textContent = weather.wind.speed;
  }
}
