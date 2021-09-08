import { render, screen } from '@testing-library/react';
import MainPanel from './MainPanel';

test('renders MainPanel', () => {
  const accountData = [
    {
        key: "firstname",
        title: "First Name",
        value: "Bruce",
        required: true
    },
    {
        key: "lastname",
        title: "Last Name",
        value: "Banner",
        required: true
    }
  ];
  render(<MainPanel editable={true} data={accountData}/>);
  const linkElement = screen.getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});
