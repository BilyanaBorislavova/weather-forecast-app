class WeatherForecastAPIService {
    weatherForecastApi: string;
    weatherForecastApiKey: string;

    constructor() {
        this.weatherForecastApi = 'https://api.openweathermap.org/data/2.5/';
        this.weatherForecastApiKey = '4448b0a0fb2bb13aa9d24de7dd358fc3';
    }

    getWeatherForecastByLatAndLon = (lat: string, lon: string) =>
        `${this.weatherForecastApi}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${this.weatherForecastApiKey}`;
}

export default WeatherForecastAPIService;
