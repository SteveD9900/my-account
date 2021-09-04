import React from "react";
import { Container } from 'react-bootstrap';
import AvatarField from "../AvatarFieldComponent/AvatarField";
import InputField from "../InputFieldComponent/InputField";
import { accountData } from "../../constant/AccountData/index";
import { accountImg } from "../../constant/AccountImage/index";
import accountHelper from "../../utils/helper.js";

import "./MainPanel.scss";

export default function MainPanel(props) {
  var fullName = accountHelper.getFullName(accountData);
  var defaultUrl = accountHelper.getImageUrl(accountImg);

  function handleSubmit() {}

  return (
    <Container>
        <AvatarField imgUrl={defaultUrl} enable={props.editable} content={fullName}/>
        <form onSubmit={handleSubmit}>
          <div className="flex-container">
              {accountData.map((detail, i)=> 
                <div key={i} className={detail.key}>
                  <InputField enable={props.editable} message={detail} />
                </div>
              )}
          </div>
        </form>
    </Container>
  );
}
