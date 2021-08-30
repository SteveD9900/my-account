import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders Dropdown', () => {
  var info = {
    key: "state",
    title: "State",
    value: "NSW"
  };
  render(<Dropdown optioninfo={info}/>);
});
