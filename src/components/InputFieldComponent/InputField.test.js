import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from './InputField';

test('renders InputField', () => {
  var detail = {
    key: "lastname",
    title: "Last Name",
    value: "Banner"
  };
  render(<InputField enable={true} message={detail}/>);
});
