import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import WeatherForecastAPIService from '../services/weather-forecast-api-service';

const useWeatherForecastApi = (service: WeatherForecastAPIService, options: Array<string>) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ endpoint, setEndpoint ] = useState<string>('');
    const [ data, setData ] = useState<any>([]);

    const getAndSetEndpoint = () => {
        if (options.length === 1) {
            setIsLoading(false);
            setEndpoint(service.getWeatherForecastByCityName(options[0]));
        } else {
            setIsLoading(false);
            setEndpoint(service.getWeatherForecastByLatAndLon(options[0], options[1]));
        }
    };

    useEffect(() => {
        getAndSetEndpoint();
    }, [ options ]);

    useEffect(() => {
        if (!isLoading && endpoint.length) {
            fetch(endpoint)
                .then(res => res.json())
                .then(res => setData(res))
        }
    }, [ isLoading, endpoint ])

    return data;
};

export default useWeatherForecastApi;
