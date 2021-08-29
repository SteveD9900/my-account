import React from "react";

import NavBar from "../../components/NavBarComponent/NavBar";
import MainPanel from "../../components/MainPanel/MainPanel";

import "./Account.scss";


export default function Accounts() {

  return (
    <div className="Account" data-test='component-safe'>
      <NavBar />
      <MainPanel />
    </div>
  );
}
