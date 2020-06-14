import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders FJN link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Site da FJN/i);
  expect(linkElement).toBeInTheDocument();
});
