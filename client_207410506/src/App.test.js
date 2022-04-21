import { render, screen } from '@testing-library/react';
import App_06 from './App_06';

test('renders learn react link', () => {
  render(<App_06 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
