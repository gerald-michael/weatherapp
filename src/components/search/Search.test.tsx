import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import WeatherContextProvider from '../../store/context/weather'
import Search from './Search'

test("Search button has correct name", () => {
    render(<WeatherContextProvider><SnackbarProvider><Search /></SnackbarProvider></WeatherContextProvider>)
    const searchBtnElement = screen.getByTestId("srchbtn")
    expect(searchBtnElement.textContent).toBe("Search")
})