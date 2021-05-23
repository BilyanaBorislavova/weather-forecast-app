import * as React from 'react';
import { WEATHER_TYPES } from '../../constants/constants';
import { SunnyIcon, StormyIcon, RainyIcon, CloudyIcon } from '../icons/icons';

interface WeatherTodayProps {
    location: string,
    degrees: number,
    weatherType: string,
}

const { SUNNY, STORMY, RAINY, CLOUDY } = WEATHER_TYPES;

const WeatherToday: React.FC<WeatherTodayProps> = ({ location, degrees, weatherType }) => {
    const icon = {
        [SUNNY]: <SunnyIcon />,
        [STORMY]: <StormyIcon />,
        [RAINY]: <RainyIcon />,
        [CLOUDY]: <CloudyIcon />,
    };

    const mappedIcon = icon[weatherType];

    return (
        <section className="weather-today">
            <h3 className="weather-today-title">
                {location}
            </h3>
            <article className="weather-today-content">
                {mappedIcon}
                {degrees}
                {weatherType}
            </article>
        </section>
    )
};

export default WeatherToday;