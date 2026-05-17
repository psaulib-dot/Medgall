import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home hero and navigation links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('img', { name: /Medhal Logo/i })).toBeInTheDocument();
  expect(screen.getByText(/مدهال مرشدك السياحي الذكي|Medhal, Your Smart Tourism Guide/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /حول المنصة|About/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /دخول|Login/i })).toBeInTheDocument();
});
