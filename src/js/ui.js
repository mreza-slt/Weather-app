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

    // get image tag
    this.img_0 = document.getElementById("img_0");
    this.img_1 = document.getElementById("img_1");
    this.img_2 = document.getElementById("img_2");
    this.img_3 = document.getElementById("img_3");

    // get day element
    this.day_0 = document.querySelector(".day_0");
    this.day_1 = document.querySelector(".day_1");
    this.day_2 = document.querySelector(".day_2");
    this.day_3 = document.querySelector(".day_3");

    // get temp elment
    this.temp_0 = document.querySelector(".temp_0");
    this.temp_1 = document.querySelector(".temp_1");
    this.temp_2 = document.querySelector(".temp_2");
    this.temp_3 = document.querySelector(".temp_3");
  }

  paint(weather, location, today, newdate, to_1, to_2, to_3) {
    this.today.textContent = today;
    this.date.textContent = newdate;
    this.location.textContent = weather.location.country + "," + location;
    this.main.textContent = weather.current.condition.text;
    this.icon.setAttribute("src", `http:${weather.current.condition.icon}`);
    this.temp.textContent = weather.current.temp_c + " C";
    this.pressure.textContent = weather.current.pressure_in + " %";
    this.humidity.textContent = weather.current.humidity + " %";
    this.wind_speed.textContent = weather.current.wind_kph + " km/h";

    this.img_0.setAttribute("src", `http:${weather.current.condition.icon}`);
    this.img_1.setAttribute(
      "src",
      `http:${weather.forecast.forecastday[0].day.condition.icon}`
    );
    this.img_2.setAttribute(
      "src",
      `http:${weather.forecast.forecastday[1].day.condition.icon}`
    );
    this.img_3.setAttribute(
      "src",
      `http:${weather.forecast.forecastday[2].day.condition.icon}`
    );

    this.day_0.textContent = today;
    this.day_1.textContent = to_1;
    this.day_2.textContent = to_2;
    this.day_3.textContent = to_3;

    this.temp_0.textContent = weather.current.temp_c + " C";
    this.temp_1.textContent =
      weather.forecast.forecastday[0].day.maxtemp_c + " C";
    this.temp_2.textContent =
      weather.forecast.forecastday[1].day.maxtemp_c + " C";
    this.temp_3.textContent =
      weather.forecast.forecastday[2].day.maxtemp_c + " C";
  }
}
