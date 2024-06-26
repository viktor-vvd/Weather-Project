import { useEffect } from "react";
import "./assets/styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
//import { testAirData, testForecastData, testWeatherData } from "./testData";
import Cookies from "js-cookie";
import { setUnits } from "./store/unitsSlice";
import { setLocation } from "./store/locationSlice";
import {
  fetchAirData,
  fetchForecastData,
  fetchWeatherData,
} from "./services/api";
import useLocalizeDocumentAttributes from "./localization/useLocalizeDocumentAttributes";
import { setAirData, setForecastData, setWeatherData } from "./store/dataSlice";
import MetaTags from "./seo/MetaTags";

const App = () => {
  // eslint-disable-next-line
  //const [lat, setLat] = useState(50.7595);
  // eslint-disable-next-line
  //const [long, setLong] = useState(25.3054);

  useLocalizeDocumentAttributes();

  const location = useSelector((state) => state.location.location);
  const units = useSelector((state) => state.units.units);

  const dispatch = useDispatch();

  const { weatherData, forecastData, airData } = useSelector(
    (state) => state.data
  );

  // const [weatherData, setWeatherData] =
  //   useState(/* {
  //   data: testWeatherData,
  //   imperial: units,
  // } */);
  // const [forecastData, setForecast] =
  //   useState(/* {
  //   data: testForecastData,
  //   imperial: units,
  // } */);
  // /*   const [units, setUnits] = useState(false);*/
  // const [airData, setAirData] =
  //   useState(/* {
  //   data: testAirData,
  //   imperial: units,
  // } */);

  useEffect(() => {
    dispatch(setUnits(Cookies.get("units") === "true"));
    if (Cookies.get("location") !== undefined) {
      dispatch(setLocation(JSON.parse(Cookies.get("location"))));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchWeatherData(location, units, (data) => {
      dispatch(setWeatherData(data));
    });
    fetchForecastData(location, units, (data) => {
      dispatch(setForecastData(data));
    });
    fetchAirData(location, units, (data) => {
      dispatch(setAirData(data));
    });
    // eslint-disable-next-line
  }, [location, units]);

  return (
    <main className="container_horizontal main">
      <MetaTags />
      {weatherData && forecastData && airData && (
        <>
          <Content />
          <Sidebar />
        </>
      )}
    </main>
  );
};

export default App;
