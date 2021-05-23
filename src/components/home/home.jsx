import React, { useEffect } from 'react';
import useFetch from 'use-http';
import useGeoLocation from '../../hooks/use-geo-location';
import useWeatherForecastApi from '../../hooks/use-weather-forecast-api';
import WeatherForecastAPIService from '../../services/weather-forecast-api-service';

const Home = () => {
    const weatherApiService = new WeatherForecastAPIService();
    const { isLoading, coordinates, hasError, error } = useGeoLocation();
    const { latitude, longitude } = coordinates;
    const { code, message } = error;

    const weatherData = useWeatherForecastApi(weatherApiService, [latitude, longitude]);
    console.log(weatherData)

    if (isLoading) {
        return <h1>Page is Loading!</h1>
    }

    if (!isLoading && hasError) {
        return <h1>{message}</h1>
    }

    return (
        <section className="home">
            <h1 className="home-title">
                Your current location is
            </h1>
        </section>
    );
};

export default Home;
