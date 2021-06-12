import axios from "axios";

export const getCurrentWeather = (location) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6bcaf83a8d0df87b51db369041aaccec&units=imperial`);
}

export const getFutureWeather = (location) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=1&appid=6bcaf83a8d0df87b51db369041aaccec&units=imperial`);
}

