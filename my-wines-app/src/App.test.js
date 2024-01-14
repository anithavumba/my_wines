// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders My Wines App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Wines App/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders add wine form and updates wine list', () => {
  render(<App />);

  // Check if the form and initial wine list are rendered
  const formElement = screen.getByLabelText(/Wine Name/i);
  const wineListElement = screen.getByText(/List of Wines/i);

  expect(formElement).toBeInTheDocument();
  expect(wineListElement).toBeInTheDocument();

  // Add a new wine to the list
  fireEvent.change(formElement, { target: { value: 'Merlot' } });
  fireEvent.submit(formElement);

  // Check if the new wine is added to the list
  const newWineElement = screen.getByText(/Merlot/i);
  expect(newWineElement).toBeInTheDocument();
});

// Add more tests as needed based on your app's functionality
