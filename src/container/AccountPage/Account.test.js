import Account from "./Account";
import { render, screen } from '@testing-library/react';

test('renders Account Component', () => {
  render(<Account />);
  const linkElement = screen.getByText(/My Account/i);
  expect(linkElement).toBeInTheDocument();
});
