import React, {
  useState,
  useEffect
} from "react";
import Dropdown from "../DropdownComponent/Dropdown";
import inputValidation from "../../utils/InputValidation.js";

import "./InputField.scss";

export default function InputField(props) {
  const [fieldValue, setFieldValue] = useState(props.message.value);
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputType, setInputType] = useState("");

  useEffect(() => {
    !props.enable && setFieldValue(props.message.value);
    setErrorState(false);
  }, [props.message.value, props.enable]);

  useEffect(() => {
    getInputType(props.message.key);
  }, [props.message.key]);

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
        if (!inputValidation.validateEmail(event.target.value)) {
          setErrorState(true);
          setErrorMessage("email address format is incorrect!");
        }
        break;
      case "abn":
        if (
          !inputValidation.validateAbn(event.target.value) &&
          fieldValue !== ""
        ) {
          setErrorState(true);
          setErrorMessage("ABN number format is incorrect!");
        }
        break;
      case "phone":
        if (!inputValidation.validatePhone(event.target.value)) {
          setErrorState(true);
          setErrorMessage("phone format is incorrect!");
        }
        break;
      case "postcode":
        if (!inputValidation.validatePostcode(event.target.value)) {
          setErrorState(true);
          setErrorMessage("postcode format is incorrect!");
        }
        break;
      case "hourlyrate":
        setFieldValue(inputValidation.showTwoDigits(event.target.value));
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

  function setStateOption(value) {
    setFieldValue(value);
  }

  if (props.message.key === "state") {
    return <Dropdown setStateValue={setStateOption} active={props.enable} optionInfo={props.message} />;
  }

  return (
    <div className="InputField">
      <label>{props.message.title}</label>
      <input
        disabled={props.enable ? "" : "disabled"}
        className={`${errorState ? "error-input" : ""}`}
        name={props.message.key}
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