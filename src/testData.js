 
    const testWeatherData={
      "coord": {
          "lon": 25.3054,
          "lat": 50.7595
      },
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 3.39,
          "feels_like": -0.13,
          "temp_min": 3.39,
          "temp_max": 3.39,
          "pressure": 1036,
          "humidity": 77
      },
      "visibility": 10000,
      "wind": {
          "speed": 4.02,
          "deg": 259,
          "gust": 4.47
      },
      "clouds": {
          "all": 99
      },
      "dt": 1706696457,
      "sys": {
          "type": 2,
          "id": 2011559,
          "country": "UA",
          "sunrise": 1706680635,
          "sunset": 1706713609
      },
      "timezone": 7200,
      "id": 702569,
      "name": "Lutsk",
      "cod": 200
  };
  
  const testForecastData=[
    {
        "dt": 1706702400,
        "main": {
            "temp": 3.53,
            "feels_like": -0.49,
            "temp_min": 3.53,
            "temp_max": 3.82,
            "pressure": 1034,
            "sea_level": 1034,
            "grnd_level": 1008,
            "humidity": 74,
            "temp_kf": -0.29
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 4.98,
            "deg": 253,
            "gust": 10.5
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-01-31 12:00:00"
    },
    {
        "dt": 1706713200,
        "main": {
            "temp": 2.79,
            "feels_like": -1.02,
            "temp_min": 2.49,
            "temp_max": 2.79,
            "pressure": 1032,
            "sea_level": 1032,
            "grnd_level": 1007,
            "humidity": 77,
            "temp_kf": 0.3
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.26,
            "deg": 248,
            "gust": 9.69
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-01-31 15:00:00"
    },
    {
        "dt": 1706724000,
        "main": {
            "temp": 2.03,
            "feels_like": -1.98,
            "temp_min": 2.03,
            "temp_max": 2.03,
            "pressure": 1029,
            "sea_level": 1029,
            "grnd_level": 1007,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.31,
            "deg": 250,
            "gust": 10.16
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-01-31 18:00:00"
    },
    {
        "dt": 1706734800,
        "main": {
            "temp": 1.83,
            "feels_like": -2.29,
            "temp_min": 1.83,
            "temp_max": 1.83,
            "pressure": 1028,
            "sea_level": 1028,
            "grnd_level": 1006,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.41,
            "deg": 248,
            "gust": 10.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-01-31 21:00:00"
    },
    {
        "dt": 1706745600,
        "main": {
            "temp": 1.22,
            "feels_like": -2.94,
            "temp_min": 1.22,
            "temp_max": 1.22,
            "pressure": 1027,
            "sea_level": 1027,
            "grnd_level": 1004,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 91
        },
        "wind": {
            "speed": 4.24,
            "deg": 244,
            "gust": 10.54
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-02-01 00:00:00"
    },
    {
        "dt": 1706756400,
        "main": {
            "temp": 0.63,
            "feels_like": -3.55,
            "temp_min": 0.63,
            "temp_max": 0.63,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 1002,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 32
        },
        "wind": {
            "speed": 4.06,
            "deg": 229,
            "gust": 10.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-02-01 03:00:00"
    },
    {
        "dt": 1706767200,
        "main": {
            "temp": 0.88,
            "feels_like": -3.97,
            "temp_min": 0.88,
            "temp_max": 0.88,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 999,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 63
        },
        "wind": {
            "speed": 5.29,
            "deg": 232,
            "gust": 13.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-02-01 06:00:00"
    },
    {
        "dt": 1706778000,
        "main": {
            "temp": 2.7,
            "feels_like": -2.62,
            "temp_min": 2.7,
            "temp_max": 2.7,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 997,
            "humidity": 73,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 7.45,
            "deg": 234,
            "gust": 16.47
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-02-01 09:00:00"
    }
  ];
  
  const testAirData=[
    {
        "main": {
            "aqi": 1
        },
        "components": {
            "co": 283.72,
            "no": 0.31,
            "no2": 2.06,
            "o3": 57.94,
            "so2": 1.67,
            "pm2_5": 7.15,
            "pm10": 7.95,
            "nh3": 1.38
        },
        "dt": 1706696457
    }
  ];

  const testLocations=[
    {
        "name": "Town of Denmark",
        "local_names": {
            "en": "Town of Denmark"
        },
        "lat": 43.899871,
        "lon": -75.582504,
        "country": "US",
        "state": "New York"
    },
    {
        "name": "Denmark",
        "lat": 43.9707277,
        "lon": -70.8035298,
        "country": "US",
        "state": "Maine"
    },
    {
        "name": "Denmark",
        "lat": 33.3226546,
        "lon": -81.1423236,
        "country": "US",
        "state": "South Carolina"
    },
    {
        "name": "Shire Of Denmark",
        "local_names": {
            "en": "Shire Of Denmark"
        },
        "lat": -34.936026999999996,
        "lon": 117.1316105871886,
        "country": "AU",
        "state": "Western Australia"
    },
    {
        "name": "Denmark",
        "lat": -34.9604365,
        "lon": 117.3551157,
        "country": "AU",
        "state": "Western Australia"
    }
];

  export {testAirData, testForecastData, testWeatherData, testLocations};