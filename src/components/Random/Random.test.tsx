import { render, screen, fireEvent } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import WeatherContextProvider from '../../store/context/weather'
import Random from './Random'

test("Random button has correct name", () => {
    render(<WeatherContextProvider><SnackbarProvider><Random /></SnackbarProvider></WeatherContextProvider>)
    const randomBtnElement = screen.getByTestId("randbtn")
    expect(randomBtnElement.textContent).toBe("Random")
})

test("Random button has gets random data from api", () => {
    render(<WeatherContextProvider><SnackbarProvider><Random /></SnackbarProvider></WeatherContextProvider>)
    const randomBtnElement = screen.getByTestId("randbtn")
    fireEvent.click(randomBtnElement)
})