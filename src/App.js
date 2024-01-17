import { useEffect, useState } from "react";
import "./assets/styles/index.scss";
import { useSelector } from "react-redux";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  // eslint-disable-next-line
  const [lat, setLat] = useState(50.7595);
  // eslint-disable-next-line
  const [long, setLong] = useState(25.3054);

  const [data, setData] = useState(null);
  const [forecastData, setForecast] = useState(null);
  /*   const [measurement, setMeasurement] = useState(false);*/
  const [airData, setAirData] = useState();
  const measurement = useSelector((state) => state.measurement.measurement);

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
            });
        } else if (measurement) {
          await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              setData(result);
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
          });
      } catch (err) {
        console.log("ERROR!");
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    data &&
    forecastData &&
    airData && (
      <main className="container_horizontal main">
        {forecastData && (
          <Content weatherData={data} forecastData={forecastData} />
        )}
        <Sidebar weatherData={data} airData={airData} />
      </main>
    )
  );
};

export default App;
