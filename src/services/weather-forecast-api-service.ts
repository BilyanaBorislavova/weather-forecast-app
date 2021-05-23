class WeatherForecastService {
    weatherForecastApi: string;
    weatherForecastApiKey: string;

    constructor() {
        this.weatherForecastApi = 'https://api.openweathermap.org/data/2.5/';
        this.weatherForecastApiKey = '9084ddbf903402f623057097382452e4';
    }

    constructApiFromLatAndLon = (lat: string, lon: string) =>
        `${this.weatherForecastApi}?lat=${lat}&lon=${lon}&appid=${this.weatherForecastApiKey}`;
    
    constructApiFromCityName = (cityName: string) => 
        `${this.weatherForecastApi}?q=${cityName}&appid=${this.weatherForecastApiKey};`
}

export default WeatherForecastService;
