import { useState, useEffect } from 'react';
import useFetch from 'use-http';
import WeatherForecastAPIService from '../services/weather-forecast-api-service';

const useWeatherForecastApi = (service: WeatherForecastAPIService, options: Array<string>) => {
    const [ endpoint, setEndpoint ] = useState<string>('');

    const getAndSetEndpoint = () => {
        if (options.length === 1) {
            setEndpoint(service.getWeatherForecastByCityName(options[0]))
        } else {
            setEndpoint(service.getWeatherForecastByLatAndLon(options[0], options[1]))
        }
    };

    useEffect(() => {
        getAndSetEndpoint();
    }, [ options ]);

    return endpoint;
};

export default useWeatherForecastApi;
