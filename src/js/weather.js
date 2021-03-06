class Weather {
  constructor(city) {
    // this.apiKey = "86b0bd9b76517148d71f0967cc7de574";
    this.apiKey = "3d52d804e3c7443eadd123827220504&q";
    this.city = city;
  }

  async getWeather() {
    // const response = await fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    // );
    const response = await fetch(
      // `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}=${this.city}&aqi=no`
      `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}=${this.city}&days=4&aqi=yes&alerts=no`
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw Error(response.status);
    }
  }

  changeLocation(city) {
    this.city = city;
  }

  get location() {
    return this.city;
  }
}
