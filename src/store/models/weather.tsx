export interface Sys {
    country: string,
    sunrise: number,
    sunset: number
}
export interface Coord {
    lat: number,
    lon: number
}
export interface Weather {
    description: string,
    main: string,
    icon: string
}
export interface Wind {
    deg: number,
    gust: number,
    speed: number
}
export interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}
export interface Response {
    base: string,
    coord: Coord,
    dt: number,
    main: Main,
    name: string,
    sys: Sys,
    timezone: number,
    visibility: number,
    weather: Weather[],
    wind: Wind
}
export interface IWeather {
    response: Response | null,
    error: string | null,
    success: string | null,
    loading: boolean,
}

export interface IWeatherAction {
    response: Response | null,
    type: string,
    error: string | null,
    success: string | null,
}