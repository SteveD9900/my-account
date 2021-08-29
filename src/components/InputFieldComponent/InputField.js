import React, { useState } from "react";

import "./InputField.scss";

export default function InputField(props) {
  const [fieldValue, setValue] = useState(props.message.value);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="InputField">
        <label>{props.message.key}</label>
        <input type="text" value={fieldValue} onChange={handleChange}/>
    </div>
  );
}
