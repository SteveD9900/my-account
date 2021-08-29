import { render, screen } from '@testing-library/react';
import MainPanel from './MainPanel';

test('renders MainPanel', () => {
  render(<MainPanel />);
  const linkElement = screen.getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});
