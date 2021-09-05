import React, { useState } from "react";

import NavBar from "../../components/NavBarComponent/NavBar";
import MainPanel from "../../components/MainPanel/MainPanel";

import "./Account.scss";


export default function Accounts() {
  const [enableEdit, setEnableEdit] = useState();

  function toggleEditBtn(editableValue) {
    setEnableEdit(editableValue);
  }

  return (
    <div className="Account" data-test="component-safe">
      <NavBar onEditStatus={toggleEditBtn}/>
      <MainPanel editable={enableEdit} />
    </div>
  );
}
