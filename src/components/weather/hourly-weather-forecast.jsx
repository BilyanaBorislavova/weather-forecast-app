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

const HourlyWeatherForecast = ({ hours, hourlyTemperature }) => {
    const forecastData = {
        labels: hours,
        datasets: [
            {
                label: '123',
                data: hourlyTemperature,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    return (
        <Line
          data={forecastData}
          options={options}
        />
    )
};

export default HourlyWeatherForecast;
