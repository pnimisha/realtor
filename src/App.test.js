import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Earthquake Zen Garden/i);
  expect(linkElement).toBeInTheDocument();
});

