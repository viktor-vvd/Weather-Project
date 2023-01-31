import { useEffect, useState } from "react";
import "./App.css";
import "./style/LeftColumn.css";
import "./style/RightColumn.css";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";

const App = () => {
  const [lat, setLat] = useState(50.7595);
  const [long, setLong] = useState(25.3054);
  const [data, setData] = useState([]);
  const [forecastData, setForecast] = useState(null);
  const [measurement, setMeasurement] = useState(false);
  const [airData, setAirData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      /*navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/
      try {
        if (!measurement) {
          await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setData(result);
              console.log(result);
            });
        } else if (measurement) {
          await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setData(result);
              console.log(result);
            });
        }
      } catch (err) {
        console.log("ERROR!");
      }
    };
    fetchData();
  }, [lat, long, measurement]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!measurement) {
          await fetch(
            `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=8&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setForecast(result.list);
            });
        } else if (measurement) {
          await fetch(
            `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=8&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setForecast(result.list);
            });
        }
      } catch (err) {
        console.log("ERROR!");
      }
    };
    fetchData();
  }, [lat, long, measurement]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `${process.env.REACT_APP_API_URL}/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setAirData(result.list);
            /* console.log(result.list[0].main.aqi); */
          });
      } catch (err) {
        console.log("ERROR!");
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <div className="App-content">
          <LeftColumn
            weatherData={data}
            forecastData={forecastData}
            measurement={measurement}
            setMeasurement={setMeasurement}
          />
          <RightColumn
            weatherData={data}
            airData={airData}
            measurement={measurement}
          />
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </div>
  );
};

export default App;
