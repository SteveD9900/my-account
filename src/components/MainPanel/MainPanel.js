import React from "react";
import { Container } from 'react-bootstrap';
import AvatarField from "../AvatarFieldComponent/AvatarField";
import InputField from "../InputFieldComponent/InputField";
import { accountData } from "../../container/AccountData/index";

import "./MainPanel.scss";

export default function MainPanel() {

  return (
    <Container>
        <AvatarField/>
        <div className="flex-container">
            {accountData.map((detail, i)=> 
              <div key={i}>
                <InputField message={detail} />
              </div>
            )}
        </div>
    </Container>
  );
}
