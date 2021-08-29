import React, { useState } from "react";
import { Form } from 'react-bootstrap';

import "./InputField.scss";

export default function InputField(props) {
  const [fieldValue, setFieldValue] = useState(props.message.value);
  const options = [
    { key: 1, text: "NSW", value: "NSW" },
    { key: 2, text: "VIC", value: "VIC" },
    { key: 3, text: "ACT", value: "ACT" },
    { key: 4, text: "QLD", value: "QLD" },
    { key: 5, text: "SA", value: "SA" },
    { key: 6, text: "NT", value: "NT" },
  ]
  
  const DropDown = () => (
    <div className="InputField">
        <label>{props.message.key}</label>
        <Form.Select className="state-selector" aria-label="Default select example">
            <option>Select State</option>
            {options.map(state=> 
                <option key={state.key} value={state.value}>{state.text}</option>
            )}
        </Form.Select>
    </div>
  )

  function handleChange(event) {
    setFieldValue(event.target.value);
  }

  if (props.message.key === "State") {
    return (
        <DropDown />
    );
  }

  return (
    <div className="InputField">
        <label>{props.message.key}</label>
        <input type="text" value={fieldValue} onChange={handleChange}/>
    </div>
  );
}
