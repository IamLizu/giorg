import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('name added', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/giorg/i);
  expect(linkElement).toBeInTheDocument();
});
