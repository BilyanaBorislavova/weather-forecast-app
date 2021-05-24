import * as React from 'react';
import DailyWeatherCard from './daily-weather-card';

interface DailyWeatherCardsProps {
    dailyWeather: Array<any>
}

const DailyWeatherCards: React.FC<DailyWeatherCardsProps> = ({ dailyWeather }) => (
    <section className="daily-weather-cards">
        <h4 className="daily-weather-cards-title">
            Daily Weather Forecast
        </h4>
        <ul className="daily-weather-cards-list">
            {
                dailyWeather && dailyWeather.map(weatherData => {
                    const { dt, date, weather, temp: { max, min } } = weatherData;
                    const [ weatherType ] = weather;

                    return (
                        <li id={dt} className="daily-weather-cards-list-item">
                            <DailyWeatherCard
                              date={date}
                              weatherType={weatherType}
                              maxDegrees={max}
                              minDegrees={min}
                              {...weatherData}
                            />
                    </li>
                    )
                })
            }
        </ul>
    </section>
);

export default DailyWeatherCards;
