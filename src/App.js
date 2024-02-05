import { useEffect, useState } from "react";
import "./assets/styles/index.scss";
import { useSelector } from "react-redux";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import { testAirData, testForecastData, testWeatherData } from "./testData";

const App = () => {
  // eslint-disable-next-line
  //const [lat, setLat] = useState(50.7595);
  // eslint-disable-next-line
  //const [long, setLong] = useState(25.3054);

  const location = useSelector((state) => state.location.location);

  const measurement = useSelector((state) => state.measurement.measurement);
  const [weatherData, setWeatherData] = useState({
    data: testWeatherData,
    imperial: measurement,
  });
  const [forecastData, setForecast] = useState({
    data: testForecastData,
    imperial: measurement,
  });
  /*   const [measurement, setMeasurement] = useState(false);*/
  const [airData, setAirData] = useState({
    data: testAirData,
    imperial: measurement,
  });

  useEffect(() => {
    const fetchData = async () => {
      /*navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/
      try {
        await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${location.lat}&lon=${
            location.lon
          }&units=${measurement ? "imperial" : "metric"}&APPID=${
            process.env.REACT_APP_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherData({ data: result, imperial: measurement });
            console.log({ data: result, imperial: measurement });
          });
      } catch (err) {
        console.log("ERROR!");
      }
    };
    location && fetchData();
  }, [location, measurement]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `${process.env.REACT_APP_API_URL}/forecast?lat=${location.lat}&lon=${
            location.lon
          }&cnt=8&units=${measurement ? "imperial" : "metric"}&appid=${
            process.env.REACT_APP_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((result) => {
            setForecast({ data: result.list, imperial: measurement });
            console.log(result.list);
          });
      } catch (err) {
        console.log("ERROR!");
      }
    };
    location && fetchData();
  }, [location, measurement]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `${process.env.REACT_APP_API_URL}/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setAirData({ data: result.list, imperial: measurement });
            console.log(result.list);
          });
      } catch (err) {
        console.log("ERROR!");
      }
    };
    location && fetchData();
    // eslint-disable-next-line
  }, [location]);

  return (
    weatherData &&
    forecastData &&
    airData && (
      <main className="container_horizontal main">
        {forecastData && (
          <Content weatherData={weatherData} forecastData={forecastData} />
        )}
        <Sidebar weatherData={weatherData} airData={airData} />
      </main>
    )
  );
};

export default App;
