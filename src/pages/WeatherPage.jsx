import { useEffect, useState } from "react";
import classNames from "classnames";
import ModalComp from "../components/Modal";

const WeatherPage = () => {
  const [city, setCity] = useState(localStorage.getItem("city") || "tehran");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const apiKey = "3d52d804e3c7443eadd123827220504&q";

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}=${city}&days=4&aqi=yes&alerts=no`
    );
    if (response.ok) {
      const responseData = await response.json();
      return setData(responseData);
    } else {
      throw Error(response.status);
    }
  };

  useEffect(() => {
    getWeather();
    localStorage.setItem("city", city);
  }, [city]);

  // day list
  const date = new Date();

  // get name string day
  const todayName = new Date().toLocaleString("en-us", { weekday: "long" });

  // get full years format 2022/april/07
  const month1 = date.toLocaleString("default", { month: "long" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const newdate = year + " / " + month1 + " / " + day;

  // 1:get tomarrow and week days
  const days = (item) => {
    const tomorrow = new Date(date);
    tomorrow.setDate(
      tomorrow.getDate() + data.forecast.forecastday.indexOf(item) + 1
    );
    return tomorrow.toDateString().split(" ")[0];
  };

  const changeLocation = (e) => {
    e.preventDefault();

    if (value === "") {
      setError(true);
    } else {
      setError(false);
      setCity(value);
      setIsShow(false);
    }
  };

  const handlerClose = () => {
    setIsShow(false);
    setError(false);
  };

  return (
    <>
      {data ? (
        <main
          className={classNames(
            "flex flex-col w-full rounded-3xl bg-black-800 text-white shadow-[0_0_70px_-10px_rgba(0,0,0,0.2)] sm:flex-row sm:h-96 sm:w-[630px]",
            {
              "pointer-events-none": isShow,
            }
          )}
        >
          <section className="section relative h-60 sm:h-full w-full sm:w-[45%] rounded-3xl shadow-[0_0_20px_-10px_rgba(0,0,0,0.2)]">
            <div className="gradiant w-full h-full rounded-3xl opacity-80"></div>
            <div className="absolute w-full h-full left-0 top-0  px-6 pt-4">
              <div className="flex justify-between">
                <div>
                  <h1 className="prose-2xl font-bold leading-loose">
                    {todayName}
                  </h1>
                  <span className="block font-bold">{newdate}</span>
                  {/* location icon  */}
                  <div className="flex items-center mt-4">
                    <i className="fa-solid fa-location-dot mr-2 text-xl"></i>
                    <span className="inline-block  font-bold">
                      {data.location.country + "," + data.location.name}
                    </span>
                  </div>
                </div>

                <img
                  src={`http:${data.current.condition.icon}`}
                  className=" w-24 m-0 h-24"
                ></img>
              </div>
              {/* weather icon  */}

              <div className="mt-6">
                <h1 className="font-bold text-3xl mt-3">
                  {data.current.temp_c + " C"}
                </h1>
                <h3 className="font-bold mt-3 text-2xl">
                  {data.current.condition.text}
                </h3>
              </div>
            </div>
          </section>

          <section className="relative w-full sm:w-[55%] h-full pt-8">
            {/* today-info-container  */}
            <div className="px-8 pb-3 rounded-xl">
              <div className="mb-3">
                <span className="font-bold">PRECIPITATION</span>
                <span className="float-right">
                  {data.current.pressure_in} %
                </span>
                <div className="clear-both"></div>
              </div>
              <div className="mb-3">
                <span className="font-bold">HUMIDITY</span>
                <span className="float-right w-humidity">
                  {data.current.humidity} %
                </span>
                <div className="clear-both"></div>
              </div>
              <div className="mb-3">
                <span className="font-bold">WIND</span>
                <span className="float-right">
                  {data.current.wind_kph} km/h
                </span>
                <div className="clear-both"></div>
              </div>
            </div>

            {/* icon Weather */}
            <div className="mt-6">
              <ul className="grid grid-cols-4 list-none my-3 mx-8 shadow-[0_0_50px_-5px_rgba(0,0,0,0.25)] rounded-[10px] bg-white">
                <li className="cursor-pointer py-2 transition-all ease-linear duration-200 text-[#222831] rounded-[10px] bg-white shadow-[0_0_40px_-5px_rgba(0,0,0,0.2)] hover:scale-110">
                  <img
                    src={`http:${data.current.condition.icon}`}
                    className="w-16 h-16 mt-[-9px] mb-[-20px] mx-auto"
                    alt="img_1"
                  />
                  <span className="block mt-[20px] text-center">Today</span>
                  <span className="block text-center font-bold mt-[10px]">
                    {data.current.temp_c} C
                  </span>
                </li>
                {data.forecast.forecastday.map((i) => (
                  <li
                    key={i.date}
                    className="cursor-pointer py-2 transition-all ease-linear duration-200 text-[#222831] rounded-[10px] bg-white hover:shadow-[0_0_40px_-5px_rgba(0,0,0,0.2)] hover:scale-110"
                  >
                    <img
                      src={`http:${i.day.condition.icon}`}
                      className="w-16 h-16 mt-[-9px] mb-[-20px] mx-auto"
                      alt="img"
                    />
                    <span className="block mt-[20px] text-center">
                      {days(i)}
                    </span>
                    <span className="block text-center font-bold mt-[10px]">
                      {i.day.maxtemp_c} C
                    </span>
                  </li>
                ))}

                <div className="clear-both"></div>
              </ul>
            </div>

            {/* change-location  */}
            <div className="py-6 px-9 mt-6">
              <button
                onClick={() => setIsShow(true)}
                className="gradiant flex justify-center outline-none w-full box-border border-0 rounded-[25px] p-[10px] text-white font-bold shadow-[0_0_30px_-5px_rgba(0,0,0,0.25)] transition-all ease-linear duration-200 hover:scale-95"
              >
                <i className="fa-solid fa-location-dot mr-2 "></i>
                <span>Change location</span>
              </button>
            </div>
          </section>
        </main>
      ) : (
        <div>
          <h1 className="text-white text-4xl">loading...</h1>
        </div>
      )}

      {/* modal */}
      <ModalComp
        setValue={setValue}
        isShow={isShow}
        error={error}
        changeLocation={changeLocation}
        handlerClose={handlerClose}
      />
    </>
  );
};

export default WeatherPage;
