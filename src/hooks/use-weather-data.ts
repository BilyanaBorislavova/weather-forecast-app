import WeatherForecastAPIService from "../services/weather-forecast-api-service";
import { getNthDaysFromNow } from "../utils/data-utils";
import useWeatherForecastApi from "./use-weather-forecast-api";

const useWeatherData = (weatherApiService: WeatherForecastAPIService, params: Array<string>) => {
    const { data: weatherData, isLoading: isLoadingWeatherData } = useWeatherForecastApi(weatherApiService, params);
    const {
        current: currentWeather,
        daily: dailyWeather,
        hourly: hourlyWeather,
        timezone: location,
    } = weatherData;

    let daysCounter = -1; // used to start from the first day
    const dailyWeatherWithDate = dailyWeather && dailyWeather.map((weather: any) => {
        daysCounter += 1;

        return ({
            ...weather,
            date: getNthDaysFromNow(daysCounter),
        })
    });

    return {
        isLoadingWeatherData,
        currentWeather,
        dailyWeatherWithDate,
        hourlyWeather,
        location,
    }
};

export default useWeatherData;
