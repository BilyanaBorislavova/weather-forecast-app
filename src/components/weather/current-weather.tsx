import './current-weather.scss';

import * as React from 'react';
import { WEATHER_TYPES } from '../../constants/constants';
import { SunnyIcon, StormyIcon, RainyIcon, CloudyIcon, ClearIcon } from '../icons/icons';

interface CurrentWeatherProps {
    location: string,
    degrees: number,
    weatherType: string,
    feelsLikeDegrees: number,
    humidity: number,
}

const { SUNNY, STORMY, RAINY, CLOUDY, CLEAR } = WEATHER_TYPES;

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ location, degrees, feelsLikeDegrees, weatherType, humidity }) => {
    const icon = {
        [SUNNY]: <SunnyIcon />,
        [STORMY]: <StormyIcon />,
        [RAINY]: <RainyIcon />,
        [CLOUDY]: <CloudyIcon />,
        [CLEAR]: <ClearIcon />
    };

    const sanitizedWeatherType = weatherType.toLowerCase();
    const mappedIcon = icon[sanitizedWeatherType];

    return (
        <section className="current-weather">
            <h3 className="current-weather-title">
                Current weather for {location} is:
            </h3>
            <article className="current-weather-content">
                {mappedIcon}
                {weatherType}
                <p className="current-weather-content-temp">
                    Temperature: {degrees} Celcius
                </p>
                <p className="current-weather-content-feels-like-temp">
                    Feels like: {feelsLikeDegrees} Celcius
                </p>
                <p className="current-weather-content-humidity">
                    Humidity: {humidity}%
                </p>
            </article>
        </section>
    )
};

export default CurrentWeather;
