import { useState, useEffect } from 'react';
import WeatherForecastAPIService from '../services/weather-forecast-api-service';

const useWeatherForecastApi = (service: WeatherForecastAPIService, options: Array<string>) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ endpoint, setEndpoint ] = useState<string>('');
    const [ data, setData ] = useState<any>([]);

    const getAndSetEndpoint = () => {
        setIsLoading(false);
        setEndpoint(service.getWeatherForecastByLatAndLon(options[0], options[1]));
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
    }, [ isLoading, endpoint ]);

    return {
        data,
        isLoading,
    };
};

export default useWeatherForecastApi;
