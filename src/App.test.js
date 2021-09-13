import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ACA Team Social', () => {
  render(<App />);
  const linkElement = screen.getByText(/ACA Team Social/i);
  expect(linkElement).toBeInTheDocument();
});
