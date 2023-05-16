import chalk from "chalk";

export const printError = (message) => {
  console.log(
    chalk.red(
      `Error: 
          ${message}`
    )
  );
};

export const printWeather = (response) => {
  console.log(
    chalk.white(
      `Weather:          
          Погода ${response.name}: ${response.weather[0].description}
          Температура: ${Math.floor(
            response.main.temp
          )} (ощущается как ${Math.floor(response.main.feels_like)})`
    )
  );
};
