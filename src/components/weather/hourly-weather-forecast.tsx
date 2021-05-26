import * as React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

interface HourlyWeatherForecastProps {
    hours: Array<number>,
    hourlyTemperature: Array<number>,
}

const HourlyWeatherForecast: React.FC<HourlyWeatherForecastProps> = ({ hours, hourlyTemperature }) => {
    const forecastData = {
        labels: hours,
        datasets: [
            {
                label: 'Degrees in Celcius',
                data: hourlyTemperature,
                fill: false,
                backgroundColor: '#ffffff',
                borderColor: '#03a9f4',
            },
        ],
    };

    return (
        <Line
          type="line"
          data={forecastData}
          options={options}
        />
    )
};

export default HourlyWeatherForecast;
