import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const DashBoard = ({ apiData }) => {
  const [tempType, setTempType] = useState("metric");
  const rise = new Date(parseInt(apiData.sys.sunrise) * 1000);
  const set = new Date(parseInt(apiData.sys.sunset) * 1000);

  function tempControlFunction(temp, tempType) {
    if (tempType === "metric") {
      return (
        <span className="fs-1">
          {(apiData.main.temp - 273.15).toFixed(0)}&#8451;
        </span>
      );
    } else {
      return (
        <span className="fs-1">
          {(((apiData.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}&#8457;
        </span>
      );
    }
  }

  function handleTempChange(event) {
    setTempType(event.target.value);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">The weather in {apiData.name}</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="mb-3">Temperture</h2>
          {/* <div className="d-flex flex-column align-items-center"> */}
          <select onChange={handleTempChange}>
            <option value="metric">&#8451;</option>
            <option value="imperial">&#8457;</option>
          </select>
          {tempControlFunction(apiData.main.temp, tempType)}
          {/* </div> */}
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="">Weather</h2>
          <span>{apiData.weather[0].description}</span>
          <img
            src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
            alt="weather symbol"
          />
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2>Wind</h2>
          <p>{(apiData.wind.speed * 2.237).toFixed(0)} mph</p>
          <span className="ps-1">N</span>
          <div className="d-flex align-items-center">
            <span className="me-2">W</span>
            <div
              className="border border-3 rounded-circle d-flex justify-content-center align-items-center"
              style={{
                transform: `rotate(${apiData.wind.deg}deg)`,
                height: "4rem",
                width: "4rem",
              }}
            >
              <BsArrowUp size={30} />
            </div>
            <span className="ms-2">E</span>
          </div>

          <span className="ps-1">S</span>
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="">Pressure</h2>
          <p>{apiData.main.pressure} hPa</p>
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="">Sunrise & Sunset</h2>
          <span>
            sunrise - {rise.getHours()}:{rise.getMinutes()}{" "}
            {rise.getHours() < 12 ? "am" : "pm"}
          </span>
          <span>
            sunset - {set.getHours()}:{set.getMinutes()}{" "}
            {set.getHours() < 12 ? "am" : "pm"}
          </span>
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="">Humdity</h2>
          <p>{apiData.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
