import { render, screen } from '@testing-library/react'
import WeatherCard from './WeatherCard'
import { Response, Coord, Weather, Wind, Main, Sys } from '../../../store/models/weather'

var coord: Coord = {
    lat: 32.5822,
    lon: 0.3163
}
var main: Main = {
    feels_like: 299.78,
    temp: 300.81,
    humidity: 24,
    pressure: 1010,
    temp_max: 300.81,
    temp_min: 300.81
}
var sys: Sys = {
    country: "UG",
    sunrise: 1642046099,
    sunset: 1642089667
}
var wind: Wind = {
    deg: 146,
    gust: 4.04,
    speed: 3.52
}
var weather: Weather = {
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
}
var resp: Response = {
    base: "stations",
    coord: coord,
    dt: 1642067206,
    main: main,
    name: "Kampala",
    sys: sys,
    timezone: 10800,
    visibility: 10000,
    weather: [weather],
    wind: wind
}
test("Card displays location", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("location").textContent).toBe("Location")
    expect(screen.getByTestId("location-info").textContent).toBe("UG,Kampala")

})
test("Card displays coordinates", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("cordinates").textContent).toBe("Cordinates")
    expect(screen.getByTestId("cordinates-info").textContent).toBe("long: 0.3163 lat: 32.5822")

})
test("Card displays sunset", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("sunset").textContent).toBe("Sunset")
    expect(screen.getByTestId("sunset-info").textContent).toBe(new Date(resp.sys.sunset * 1000).toUTCString())

})
test("Card displays type", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("type").textContent).toBe("Type")
    expect(screen.getByTestId("type-info").textContent).toBe("Clouds")

})
test("Card displays sunrise", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("sunrise").textContent).toBe("Sunrise")
    expect(screen.getByTestId("sunrise-info").textContent).toBe(new Date(resp.sys.sunrise * 1000).toUTCString())

})
test("Card displays description", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("description").textContent).toBe("Description")
    expect(screen.getByTestId("description-info").textContent).toBe("overcast clouds")

})
test("Card displays temperature", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("temperature").textContent).toBe("Temperature")
    expect(screen.getByTestId("temperature-info").textContent).toBe("300.81 Kelvin")

})
test("Card displays pressure", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("pressure").textContent).toBe("Pressure")
    expect(screen.getByTestId("pressure-info").textContent).toBe("1010 hPa")

})
test("Card displays humidity", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("humidity").textContent).toBe("Humidity")
    expect(screen.getByTestId("humidity-info").textContent).toBe("24%")

})
test("Card displays wind", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("wind").textContent).toBe("Wind Speed")
    expect(screen.getByTestId("wind-info").textContent).toBe("3.52 m/sec")

})
test("Card displays direction", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("direction").textContent).toBe("Direction")
    expect(screen.getByTestId("direction-info").textContent).toBe("146°")

})
test("Card displays gust", () => {
    render(<WeatherCard response={resp} />)
    expect(screen.getByTestId("gust").textContent).toBe("Gust")
    expect(screen.getByTestId("gust-info").textContent).toBe("4.04 m/sec")

})
