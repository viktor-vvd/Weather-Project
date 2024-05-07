const fetchWeatherData = async (location, units, setWeatherData) => {
  /*navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });*/
  if (units !== null && location !== null) {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${location.lat}&lon=${
          location.lon
        }&units=${units ? "imperial" : "metric"}&APPID=${
          process.env.REACT_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherData({ data: result, imperial: units });
          //console.log({ data: result, imperial: units });
        });
    } catch (err) {
      console.log("ERROR!");
    }
  }
};

const fetchForecastData = async (location, units, setForecastData) => {
  if (units !== null && location !== null) {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${location.lat}&lon=${
          location.lon
        }&cnt=8&units=${units ? "imperial" : "metric"}&appid=${
          process.env.REACT_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setForecastData({ data: result.list, imperial: units });
          //console.log(result.list);
        });
    } catch (err) {
      console.log("ERROR!");
    }
  }
};

const fetchAirData = async (location, units, setAirData) => {
  if (location !== null) {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setAirData({ data: result.list, imperial: units });
          //console.log(result.list);
        });
    } catch (err) {
      console.log("ERROR!");
    }
  }
};
const fetchGeocodingData = async (value, setMatches) => {
  try {
    await fetch(
      `${
        process.env.REACT_APP_API_GEOCODING_URL
      }/direct?q=${value}&limit=${5}&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setMatches(result);
        //console.log(result);
      });
  } catch (err) {
    console.log(err);
  }
};

export { fetchAirData, fetchForecastData, fetchWeatherData, fetchGeocodingData };
