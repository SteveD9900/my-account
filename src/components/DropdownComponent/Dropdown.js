import React from "react";
import { Form } from "react-bootstrap";

import "./Dropdown.scss";

export default function Dropdown(props) {
  const options = [
    { key: 1, text: "NSW", value: "NSW" },
    { key: 2, text: "VIC", value: "VIC" },
    { key: 3, text: "ACT", value: "ACT" },
    { key: 4, text: "QLD", value: "QLD" },
    { key: 5, text: "SA", value: "SA" },
    { key: 6, text: "NT", value: "NT" },
  ];

  return (
    <div className="Dropdown">
      <label>{props.optioninfo.key}</label>
      <Form.Select
        disabled={ !props.active }
        className="state-selector"
        aria-label="Default select example"
      >
        <option>Select State</option>
        {options.map((state) => (
          <option key={state.key} value={state.value}>
            {state.text}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
