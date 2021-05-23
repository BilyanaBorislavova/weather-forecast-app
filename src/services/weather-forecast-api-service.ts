class WeatherForecastAPIService {
    weatherForecastApi: string;
    weatherForecastApiKey: string;

    constructor() {
        this.weatherForecastApi = 'https://api.openweathermap.org/data/2.5/onecall';
        this.weatherForecastApiKey = '4448b0a0fb2bb13aa9d24de7dd358fc3';
    }

    getWeatherForecastByLatAndLon = (lat: string, lon: string) =>
        `${this.weatherForecastApi}?lat=${lat}&lon=${lon}&units=metric&appid=${this.weatherForecastApiKey}`;
    
    getWeatherForecastByCityName = (cityName: string) => 
        `${this.weatherForecastApi}?q=${cityName}&appid=${this.weatherForecastApiKey};`
}

export default WeatherForecastAPIService;
