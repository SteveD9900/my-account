import React, { useState, useRef } from "react";

import NavBar from "../../components/NavBarComponent/NavBar";
import MainPanel from "../../components/MainPanel/MainPanel";
import { accountData } from "../../constant/AccountData/index";

import "./Account.scss";

export default function Accounts() {
  const [formData, setFormData] = useState(accountData);
  const submitRef = useRef(null);
  const [enableEdit, setEnableEdit] = useState(false);

  function toggleEditBtn(editableValue) {
    setEnableEdit(editableValue);
  }

  function triggerSubmit() {
    submitRef.current.click();
  }

  function updateFormData(newRawData) {
    const newFormData = {};
    for (var [key, value] of newRawData.entries()) {
      const newFieldData = { ...formData[key], value: value };
      newFormData[key] = newFieldData;
    }
    setFormData(newFormData);
  }
  const content = Object.values(formData);
  return (
    <div className="Account" data-test="component-safe">
      <NavBar onEditStatus={toggleEditBtn} onSaveChanges={triggerSubmit} />
      <MainPanel
        onSumbitChange={updateFormData}
        panelData={content}
        ref={submitRef}
        editable={enableEdit}
      />
    </div>
  );
}
