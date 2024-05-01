import { useEffect, useState } from "react";
import "./assets/styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
//import { testAirData, testForecastData, testWeatherData } from "./testData";
import Cookies from "js-cookie";
import { changeUnits } from "./store/unitsSlice";
import { changeLocation } from "./store/locationSlice";
import { fetchAirData, fetchForecastData, fetchWeatherData } from "./api";

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
    //console.log("u " + units);
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
    fetchWeatherData(location, units, setWeatherData);
    fetchForecastData(location, units, setForecast);
  }, [location, units]);

  useEffect(() => {
    fetchAirData(location, units, setAirData)
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
