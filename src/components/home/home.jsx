import React, { useEffect } from 'react';
import useGeoLocation from '../../hooks/use-geo-location';
import useWeatherForecastApi from '../../hooks/use-weather-forecast-api';
import WeatherForecastAPIService from '../../services/weather-forecast-api-service';
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
    console.log(currentWeather)

    // const { feels_like, humidity, temp, weather } = currentWeather;

    if (isLoading) {
        return <h1>Page is Loading!</h1>
    }

    if (!isLoading && hasError) {
        return <h1>{message}</h1>
    }

    return (
        <section className="home">
            {/* <CurrentWeather
              location={timezone}
              degrees={temp}
              feelsLikeDegrees={feels_like}
            //   weatherType={main}
              humidity={humidity}
            /> */}
            {/* <DailyWeatherCards dailyWeather={dailyWeather} /> */}
        </section>
    );
};

export default Home;
