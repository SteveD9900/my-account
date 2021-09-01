import React from "react";
import { Container } from 'react-bootstrap';
import AvatarField from "../AvatarFieldComponent/AvatarField";
import InputField from "../InputFieldComponent/InputField";
import { accountData } from "../../constant/AccountData/index";
import accountHelper from "../../utils/helper.js";

import "./MainPanel.scss";

export default function MainPanel(props) {
  var fullName = accountHelper.getFullName(accountData);

  function handleSubmit() {}

  return (
    <Container>
        <AvatarField enable={props.editable} content={fullName}/>
        <form onSubmit={handleSubmit}>
          <div className="flex-container">
              {accountData.map((detail, i)=> 
                <div key={i}>
                  <InputField enable={props.editable} message={detail} />
                </div>
              )}
          </div>
        </form>
    </Container>
  );
}
