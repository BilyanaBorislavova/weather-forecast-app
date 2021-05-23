import * as React from 'react';
import { WEATHER_TYPES } from '../../constants/constants';
import { SunnyIcon, StormyIcon, RainyIcon, CloudyIcon } from '../icons/icons';

interface DailyWeatherCardProps {
    day: string,
    date: number | string,
    weatherType: string,
    maxDegrees: number | string,
    minDegrees: number | string,
};

const { SUNNY, STORMY, RAINY, CLOUDY } = WEATHER_TYPES;

const DailyWeatherCard: React.FC<DailyWeatherCardProps> = ({ day, date, weatherType, maxDegrees, minDegrees }) => {
    const icon = {
        [SUNNY]: <SunnyIcon />,
        [STORMY]: <StormyIcon />,
        [RAINY]: <RainyIcon />,
        [CLOUDY]: <CloudyIcon />,
    };

    const mappedIcon = icon[weatherType];
    
    return (
        <section className="daily-weather-card">
            <span className="daily-weather-card-day-and-date">
                `${day} ${date}`
            </span>
            {mappedIcon}
            <article className="daily-weather-card-degrees">
                <p className="daily-weather-card-degrees-max">
                    {maxDegrees}
                </p>
                <p className="daily-weather-card-degrees-min">
                    {minDegrees}
                </p>
            </article>
            <p className="daily-weather-card-weather-type">
                {weatherType}
            </p>
        </section>
    );
};

export default DailyWeatherCard;
