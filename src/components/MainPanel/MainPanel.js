import React, { useRef, forwardRef, useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import AvatarField from "../AvatarFieldComponent/AvatarField";
import InputField from "../InputFieldComponent/InputField";
import { accountImg } from "../../constant/AccountImage/index";
import accountHelper from "../../utils/helper.js";

import "./MainPanel.scss";

const MainPanel = forwardRef((props, ref) => {
  const [fullName, setFullName] = useState(accountHelper.getFullName(props.panelData));
  const defaultUrl = accountHelper.getImageUrl(accountImg);
  const myFormRef = useRef();

  useEffect(() => {
    setFullName(accountHelper.getFullName(props.panelData));
  }, [props.panelData]);

  function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(myFormRef.current);
    props.onSumbitChange(formData);
  }

  return (
    <Container>
        <AvatarField imgUrl={defaultUrl} enable={props.editable} content={fullName}/>
        <form method="post" ref={myFormRef} onSubmit={handleSubmit}>
          <div className="flex-container">
              {props.panelData.map((detail, i)=> 
                <div key={i} className={detail.key}>
                  <InputField enable={props.editable} message={detail} />
                </div>
              )}
          </div>
          <input ref={ref} style={{display:'none'}} type="submit" value="Submit" />
        </form>
    </Container>
  );
});

export default MainPanel;
