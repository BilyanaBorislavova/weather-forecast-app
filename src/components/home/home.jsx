import './home.scss';

import * as React from 'react';
import useGeoLocation from '../../hooks/use-geo-location';
import useWeatherForecastApi from '../../hooks/use-weather-forecast-api';
import WeatherForecastAPIService from '../../services/weather-forecast-api-service';
import DailyWeatherCards from '../weather/daily-weather-cards';
import CurrentWeather from '../weather/current-weather';
import useWeatherData from '../../hooks/use-weather-data';
import useGeocode from '../../hooks/use-geo-code';
import CityContext from '../../context/city-context';

const Home = () => {
    const weatherApiService = new WeatherForecastAPIService();
    const { city } = React.useContext(CityContext);

    // get user current location
    const { isLoading, coordinates, hasError, error } = useGeoLocation();
    const { latitude, longitude } = coordinates;
    const { code, message } = error;

    // get city from user input
    const { latitude: cityLatitude, longitude: cityLongitude } = useGeocode(city);

    const weatherApiParams = !city ? [ latitude, longitude ] : [ cityLatitude, cityLongitude ];
    const {
        currentWeather,
        dailyWeatherWithDate,
        hourlyWeather,
        location
    } = useWeatherData(weatherApiService, weatherApiParams);

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
                  location={location}
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
