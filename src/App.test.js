import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/CREATED BY YANINA CHIOLO/i);
  expect(linkElement).toBeInTheDocument();
});
