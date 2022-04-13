const dumbyData = {
  dumby: true,
  coord: {
    lon: -122.3321,
    lat: 47.6062,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 283.5,
    feels_like: 282.55,
    temp_min: 280.11,
    temp_max: 287.35,
    pressure: 1022,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 7.2,
    deg: 210,
    gust: 12.86,
  },
  clouds: {
    all: 100,
  },
  dt: 1648680448,
  sys: {
    type: 2,
    id: 2004026,
    country: "US",
    sunrise: 1648648296,
    sunset: 1648694135,
  },
  timezone: -25200,
  id: 5809844,
  name: "Seattle",
  cod: 200,
};

module.exports = { dumbyData };
