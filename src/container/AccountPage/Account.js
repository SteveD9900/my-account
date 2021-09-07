import React, { useState, useRef } from "react";

import NavBar from "../../components/NavBarComponent/NavBar";
import MainPanel from "../../components/MainPanel/MainPanel";

import "./Account.scss";

export default function Accounts() {
  const submitRef = useRef();
  const [enableEdit, setEnableEdit] = useState();

  function toggleEditBtn(editableValue) {
    setEnableEdit(editableValue);
  }

  function triggerSubmit() {
    submitRef.current.click();
  }

  function triggerReset() {
    console.log("reverse changes");
  }

  return (
    <div className="Account" data-test="component-safe">
      <NavBar
        onEditStatus={toggleEditBtn}
        onSaveChanges={triggerSubmit}
        onCancelUpdates={triggerReset}
      />
      <MainPanel ref={submitRef} editable={enableEdit} />
    </div>
  );
}
