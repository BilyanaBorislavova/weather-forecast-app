import './home.scss';

import * as React from 'react';
import useGeoLocation from '../../hooks/use-geo-location';
import WeatherForecastAPIService from '../../services/weather-forecast-api-service';
import DailyWeatherCards from '../weather/daily-weather-cards';
import CurrentWeather from '../weather/current-weather';
import useWeatherData from '../../hooks/use-weather-data';
import useGeocode from '../../hooks/use-geo-code';
import CityContext from '../../context/city-context';
import HourlyWeatherForecast from '../weather/hourly-weather-forecast';
import { formatHour } from '../../utils/data-utils';
import LoadingWithTitle from '../loading/loading-with-title';
import { LOADING_TYPES } from '../../constants/constants';
import ErrorMessage from '../error/error-message';
import ErrorMessageWithIcon from '../error/error-message-with-icon';
import { StormyIcon } from '../icons/icons';

const { SPIN } = LOADING_TYPES;

const Home = () => {
    const weatherApiService = new WeatherForecastAPIService();
    const { city } = React.useContext(CityContext);

    // get user current location
    const { isLoading, coordinates, hasError, error } = useGeoLocation();
    const { latitude, longitude } = coordinates;
    const { code, message } = error;

    // get city from user input
    const { latitude: cityLatitude, longitude: cityLongitude, error: cityError } = useGeocode(city);

    const weatherApiParams = !city ? [ latitude, longitude ] : [ cityLatitude, cityLongitude ];
    const {
        currentWeather,
        dailyWeatherWithDate,
        hourlyWeatherWithHours,
        location
    } = useWeatherData(weatherApiService, weatherApiParams);

    const hours = hourlyWeatherWithHours && hourlyWeatherWithHours.map(({ hour }) => formatHour(hour)).flat();
    const hourlyTemperature = hourlyWeatherWithHours && hourlyWeatherWithHours.map(({ temp }) => Math.round(temp)).flat();

    if (isLoading) {
        return (
            <LoadingWithTitle
              type={SPIN}
              color="#03a9f4"
              title="Weather Forecast is Loading..."
            />
        )
    }

    if (!isLoading && hasError) {
        return (
            <ErrorMessageWithIcon
              message={message}
              icon={<StormyIcon />}
            />
        );
    }

    if (cityError) {
        return (
            <ErrorMessageWithIcon
              message="An error has occured"
              icon={<StormyIcon />}
            />
        );
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
            <HourlyWeatherForecast
              hours={hours}
              hourlyTemperature={hourlyTemperature}
            />
        </section>
    );
};

export default Home;
