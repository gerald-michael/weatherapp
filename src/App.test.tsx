import { render, screen, fireEvent } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import App from './App';

test('search nav bar redirects to search page', () => {
  render(<SnackbarProvider><App /></SnackbarProvider>);
  const searchElement = screen.getByTestId("search");
  fireEvent.click(searchElement)
  expect(window.location.pathname).toBe("/search")
});
test('random nav bar redirects to random page', () => {
  render(<SnackbarProvider><App /></SnackbarProvider>);
  const randomElement = screen.getByTestId("random");
  fireEvent.click(randomElement)
  expect(window.location.pathname).toBe("/")
});
