import { render, screen } from '@testing-library/react';
import InputField from './InputField';

test('renders InputField', () => {
  var detail = {
    key: "lastname",
    title: "Last Name",
    value: "Banner"
  };
  render(<InputField message={detail}/>);
});
