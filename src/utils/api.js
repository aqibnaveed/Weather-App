import { API_KEY } from "../constants";

export const WeatherAPI = async (lat, long) => {
  try {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${API_KEY}`,
      {
        method: 'GET'
      },
    ).then(
      res => {return res.json()}
    ).then(
      res => {return res}
    )
  } catch (error) {}
};
