import WeatherForecastAPIService from "../services/weather-forecast-api-service";
import { getNthHoursFromCurrentTime, getNthDaysFromNow } from "../utils/data-utils";
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

    let startingHour = 0;
    const hourlyWeatherWithHours = hourlyWeather && hourlyWeather.map((weather: any) => {
        const hour = getNthHoursFromCurrentTime(startingHour);
        startingHour += 1;
        
        return {
            ...weather,
            hour: hour
        }
    })

    return {
        isLoadingWeatherData,
        currentWeather,
        dailyWeatherWithDate,
        hourlyWeatherWithHours,
        location,
    }
};

export default useWeatherData;
