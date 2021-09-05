import React, { useState, useEffect } from "react";
import Dropdown from "../DropdownComponent/Dropdown";

import "./InputField.scss";

export default function InputField(props) {
  const [fieldValue, setFieldValue] = useState(props.message.value);
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputType, setInputType] = useState("");

  useEffect(() => {
    getInputType(props.message.key);
  })

  function getInputType(key) {
    if (key === "birthdate") {
      setInputType("date");
    } else if (key === "hourlyrate" || key === "postcode") {
      setInputType("number");
    } else if (key === "email") {
      setInputType("email");
    } else {
      setInputType("text");
    }
  }

  function handleChange(event) {
    setErrorState(false);
    setFieldValue(event.target.value);
  }

  function validateField(event) {
    switch (props.message.key) {
      case "email":
        if (!validateEmail(event.target.value)) {
          setErrorState(true);
          setErrorMessage("email address format is incorrect!");
        }
        break;
      case "abn":
        if (!validateAbn(event.target.value) && fieldValue !== "") {
          setErrorState(true);
          setErrorMessage("ABN number format is incorrect!");
        }
        break;
      case "phone":
        if (!validatePhone(event.target.value)) {
          setErrorState(true);
          setErrorMessage("phone format is incorrect!");
        }
        break;
      case "postcode":
        if (!validatePostcode(event.target.value)) {
          setErrorState(true);
          setErrorMessage("postcode format is incorrect!");
        }
        break;
      case "hourlyrate":
        setFieldValue(showTwoDigits(event.target.value));
        break;
      default:
        break;
    }

    checkEmpty();
  }

  function checkEmpty() {
    if (fieldValue === "" && props.message.required) {
      setErrorState(true);
      setErrorMessage("your " + props.message.key + " is required");
    }
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\D*0(\D*\d){9}\D*$/;
    return re.test(String(phone).toLowerCase());
  }

  function validateAbn(abn) {
    const re = /^(\d *?){11}/;
    return re.test(String(abn).toLowerCase());
  }

  function validatePostcode(number) {
    const re = /^[0-9]{4}$/;
    return re.test(String(number).toLowerCase());
  }

  function showTwoDigits(hourlyrate) {
    return parseFloat(hourlyrate).toFixed(2);
  }

  if (props.message.key === "state") {
    return <Dropdown active={props.enable} optioninfo={props.message} />;
  }

  return (
    <div className="InputField">
      <label>{props.message.title}</label>
      <input
        disabled={props.enable ? "" : "disabled"}
        className={`${errorState ? "error-input" : ""}`}
        type={inputType}
        value={fieldValue}
        onChange={handleChange}
        onBlur={validateField}
      />
      {errorState ? (
        <span className="error-message">{errorMessage}</span>
      ) : null}
    </div>
  );
}
