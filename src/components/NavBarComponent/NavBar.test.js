import NavBar from "./NavBar";
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  const toggleEditBtn = () => {}
  render(<NavBar onEditStatus={toggleEditBtn}/>);
  const linkElement = screen.getByText(/My Account/i);
  expect(linkElement).toBeInTheDocument();
});