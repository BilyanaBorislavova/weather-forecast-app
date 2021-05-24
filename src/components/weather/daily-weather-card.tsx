import './daily-weather-card.scss';

import * as React from 'react';
import { WEATHER_TYPES } from '../../constants/constants';
import { SunnyIcon, StormyIcon, RainyIcon, CloudyIcon, ClearIcon } from '../icons/icons';

interface DailyWeatherCardProps {
    date: number | string,
    weatherType: any,
    maxDegrees: number | string,
    minDegrees: number | string,
};

const { SUNNY, STORMY, RAINY, CLOUDY, CLEAR } = WEATHER_TYPES;

const DailyWeatherCard: React.FC<DailyWeatherCardProps> = ({ date, weatherType, maxDegrees, minDegrees }) => {
    const icon = {
        [SUNNY]: <SunnyIcon />,
        [STORMY]: <StormyIcon />,
        [RAINY]: <RainyIcon />,
        [CLOUDY]: <CloudyIcon />,
        [CLEAR]: <ClearIcon />
    };
    const { main, description } = weatherType;
    const sanitizedWeatherType = main.toLowerCase();
    const mappedIcon = icon[sanitizedWeatherType];
    
    const formattedMaxDegrees = Math.round(Number(maxDegrees));
    const formattedMinDegrees = Math.round(Number(minDegrees));

    return (
        <section className="daily-weather-card">
            <span className="daily-weather-card-date">
                {date}
            </span>
            {mappedIcon}
            <article className="daily-weather-card-degrees">
                <p className="daily-weather-card-degrees-max">
                    Max degress: {formattedMaxDegrees} Celcius
                </p>
                <p className="daily-weather-card-degrees-min">
                    Min degrees: {formattedMinDegrees} Celcius
                </p>
            </article>
            <p className="daily-weather-card-weather-type">
                {description}
            </p>
        </section>
    );
};

export default DailyWeatherCard;
