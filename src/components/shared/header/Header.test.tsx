import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
beforeEach(()=>{
    
})
test("Header displays app name", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const appNameElement = screen.getByTestId("appname")
    expect(appNameElement.textContent).toBe("Weather APP")
})
test("Header has Random nav tab",()=>{
    render(<BrowserRouter><Header /></BrowserRouter>)
    const randomElement = screen.getByTestId("random")
    expect(randomElement.textContent).toBe("Random")
})
test("Header has Search nav tab",()=>{
    render(<BrowserRouter><Header /></BrowserRouter>)
    const searchElement = screen.getByTestId("search")
    expect(searchElement.textContent).toBe("Search")
})
test("Search nav element redirects to search screen",()=>{
    render(<BrowserRouter><Header /></BrowserRouter>)
    const searchElement = screen.getByTestId("search")
    expect(searchElement.textContent).toBe("Search")
})
test("Random nav element redirects to random screen",()=>{
    render(<BrowserRouter><Header /></BrowserRouter>)
    const randomElement = screen.getByTestId("search")
    expect(randomElement.textContent).toBe("Search")
})