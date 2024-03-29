import { useEffect, useState } from "react";
import "./assets/styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
//import { testAirData, testForecastData, testWeatherData } from "./testData";
import Cookies from "js-cookie";
import { changeUnits } from "./store/unitsSlice";
import { changeLocation } from "./store/locationSlice";

const App = () => {
  // eslint-disable-next-line
  //const [lat, setLat] = useState(50.7595);
  // eslint-disable-next-line
  //const [long, setLong] = useState(25.3054);

  const location = useSelector((state) => state.location.location);
  const units = useSelector((state) => state.units.units);

  const dispatch = useDispatch();

  const [weatherData, setWeatherData] =
    useState(/* {
    data: testWeatherData,
    imperial: units,
  } */);
  const [forecastData, setForecast] =
    useState(/* {
    data: testForecastData,
    imperial: units,
  } */);
  /*   const [units, setUnits] = useState(false);*/
  const [airData, setAirData] =
    useState(/* {
    data: testAirData,
    imperial: units,
  } */);

  useEffect(() => {
    dispatch(changeUnits(Cookies.get("units") === "true"));
    console.log("u " + units);
    if (Cookies.get("location") !== undefined) {
      dispatch(changeLocation(JSON.parse(Cookies.get("location"))));
    } else {
      dispatch(
        changeLocation({
          lat: 50.7450733,
          lon: 25.320078,
        })
      );
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      /*navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/
      if (units !== null && location !== null) {
        try {
          await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${
              location.lat
            }&lon=${location.lon}&units=${
              units ? "imperial" : "metric"
            }&APPID=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setWeatherData({ data: result, imperial: units });
              console.log({ data: result, imperial: units });
            });
        } catch (err) {
          console.log("ERROR!");
        }
      }
    };
    location && fetchData();
  }, [location, units]);

  useEffect(() => {
    const fetchData = async () => {
      if (units !== null && location !== null) {
        try {
          await fetch(
            `${process.env.REACT_APP_API_URL}/forecast?lat=${
              location.lat
            }&lon=${location.lon}&cnt=8&units=${
              units ? "imperial" : "metric"
            }&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setForecast({ data: result.list, imperial: units });
              console.log(result.list);
            });
        } catch (err) {
          console.log("ERROR!");
        }
      }
    };
    location && fetchData();
  }, [location, units]);

  useEffect(() => {
    const fetchData = async () => {
      if (location !== null) {
        try {
          await fetch(
            `${process.env.REACT_APP_API_URL}/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setAirData({ data: result.list, imperial: units });
              console.log(result.list);
            });
        } catch (err) {
          console.log("ERROR!");
        }
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
        <Content weatherData={weatherData} forecastData={forecastData} />
        <Sidebar weatherData={weatherData} airData={airData} />
      </main>
    )
  );
};

export default App;
