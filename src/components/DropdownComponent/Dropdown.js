import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import "./Dropdown.scss";

export default function Dropdown(props) {
  const [selectedState, setSelectedState] = useState(props.optionInfo.value);
  useEffect(() => {
    !props.active && setSelectedState(props.optionInfo.value);
  }, [props.optionInfo.value, props.active]);

  const options = [
    { key: 1, text: "NSW", value: "NSW" },
    { key: 2, text: "VIC", value: "VIC" },
    { key: 3, text: "ACT", value: "ACT" },
    { key: 4, text: "QLD", value: "QLD" },
    { key: 5, text: "SA", value: "SA" },
    { key: 6, text: "NT", value: "NT" },
  ];

  function handleChange(e) {
    setSelectedState(e.target.value);
    props.setStateValue(e.target.value);
  }

  return (
    <div className="Dropdown">
      <label>{props.optionInfo.title}</label>
      <Form.Select
        name={props.optionInfo.key}
        disabled={ !props.active }
        className="state-selector"
        aria-label="Default select example"
        value={selectedState}
        onChange={handleChange}
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
