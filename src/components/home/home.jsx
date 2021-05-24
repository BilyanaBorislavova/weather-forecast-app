import React, { useEffect } from 'react';
import useGeoLocation from '../../hooks/use-geo-location';
import useWeatherForecastApi from '../../hooks/use-weather-forecast-api';
import WeatherForecastAPIService from '../../services/weather-forecast-api-service';
import { getNthDaysFromNow } from '../../utils/data-utils';
import DailyWeatherCards from '../weather/daily-weather-cards';
import CurrentWeather from '../weather/current-weather';

const Home = () => {
    const weatherApiService = new WeatherForecastAPIService();
    const { isLoading, coordinates, hasError, error } = useGeoLocation();
    const { latitude, longitude } = coordinates;
    const { code, message } = error;

    const { data: weatherData, isLoading: isLoadingData } = useWeatherForecastApi(weatherApiService, [latitude, longitude]);
    const {
        current: currentWeather,
        daily: dailyWeather,
        hourly: hourlyWeather,
        timezone,
    } = weatherData;

    let daysCounter = -1; // used to start from the first day
    const dailyWeatherWithDate = dailyWeather && dailyWeather.map(weather => {
        daysCounter += 1;

        return ({
            ...weather,
            date: getNthDaysFromNow(daysCounter)
        })
    })

    if (isLoading) {
        return <h1>Page is Loading!</h1>
    }

    if (!isLoading && hasError) {
        return <h1>{message}</h1>
    }

    return (
        <section className="home">
            {currentWeather && (
                <CurrentWeather
                  location={timezone}
                  degrees={currentWeather.temp}
                  feelsLikeDegrees={currentWeather.feels_like}
                  weatherType={currentWeather.weather[0].main}
                  humidity={currentWeather.humidity}
                />
            )}
            <DailyWeatherCards dailyWeather={dailyWeatherWithDate} />
        </section>
    );
};

export default Home;
