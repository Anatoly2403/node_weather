import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (token, city) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: token,
      lang: "ru",
      units: "metric",
    },
  });
  return data;
};
