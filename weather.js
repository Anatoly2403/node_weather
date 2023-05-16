#!/usr/bin/env node
import { getWeather } from "./services/api.service.js";
import { printError, printWeather } from "./services/log.service.js";
import { config } from "dotenv";

config();

const { WEATHER_TOKEN, WEATHER_CITY } = process.env;

const getForecast = async () => {
  try {
    const weather = await getWeather(WEATHER_TOKEN, WEATHER_CITY);
    printWeather(weather);
  } catch (error) {
    printError(error.message);
  }
};

getForecast();
