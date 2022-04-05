class Weather {
  constructor(city) {
    this.apiKey = "86b0bd9b76517148d71f0967cc7de574";
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw Error(response.status);
    }
  }

  changeLocation(city, state) {
    this.city = city;
  }

  get location() {
    return this.city;
  }
}
