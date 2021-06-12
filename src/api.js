import axios from "axios";

export const getCurrentWeather = (location) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_APP_ID}&units=imperial`);
}

export const getForecast = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHER_APP_ID}&cnt=5&units=imperial`);
}

