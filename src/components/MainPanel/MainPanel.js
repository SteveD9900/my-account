import React, { useRef } from "react";
import { Container } from 'react-bootstrap';
import AvatarField from "../AvatarFieldComponent/AvatarField";
import InputField from "../InputFieldComponent/InputField";
import { accountData } from "../../constant/AccountData/index";
import { accountImg } from "../../constant/AccountImage/index";
import accountHelper from "../../utils/helper.js";

import "./MainPanel.scss";

export default function MainPanel(props) {
  const fullName = accountHelper.getFullName(accountData);
  const defaultUrl = accountHelper.getImageUrl(accountImg);
  const myFormRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    // save the form changes
    var formData = new FormData(myFormRef.current);
    for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
    }
  }

  return (
    <Container>
        <AvatarField imgUrl={defaultUrl} enable={props.editable} content={fullName}/>
        <form method="post" ref={myFormRef} onSubmit={handleSubmit}>
          <div className="flex-container">
              {accountData.map((detail, i)=> 
                <div key={i} className={detail.key}>
                  <InputField enable={props.editable} message={detail} />
                </div>
              )}
          </div>
          <input style={{display:'none'}} type="submit" value="Submit" />
        </form>
    </Container>
  );
}
