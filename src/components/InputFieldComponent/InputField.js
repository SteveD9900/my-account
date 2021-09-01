import React, { useState } from "react";
import Dropdown from "../DropdownComponent/Dropdown";

import "./InputField.scss";

export default function InputField(props) {
  const [fieldValue, setFieldValue] = useState(props.message.value);
  const [emptyField, setEmptyField] = useState(false);

  function handleChange(event) {
    setEmptyField(false);
    setFieldValue(event.target.value);
  }

  function validateField() {
    if (props.message.key !== "companyname" && props.message.key !== "abn") {
      if (fieldValue === "") {
        setEmptyField(true);
      } else {
        setEmptyField(false);
      }
    }
  }

  if (props.message.key === "state") {
    return <Dropdown active={props.enable} optioninfo={props.message} />;
  }

  return (
    <div className="InputField">
      <label>{props.message.title}</label>
      <input
        disabled={props.enable ? "" : "disabled"}
        className={`${emptyField ? "error-input" : ""}`}
        type="text"
        value={fieldValue}
        onChange={handleChange}
        onBlur={validateField}
      />
      {emptyField ? (
        <span className="error-message">
          your {props.message.key} is required
        </span>
      ) : null}
    </div>
  );
}
