import React from "react";
import { useState, useRef, useEffect } from "react";

import "./AvatarField.scss";

export default function AvatarField(props) {
  const [userName, setUserName] = useState(props.content);
  const [file, setFile] = useState(props.imgUrl);
  const reference = useRef("inputReference");
     
  const handleChange = (e) =>{
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  useEffect(() => {
    setUserName(props.content);
  }, [props.content]);

  function fileUploadAction() {
    reference.current.click();
  }

  return (
    <div className="AvatarField">
        <div>
          <img className="display-image" alt="avator" src={file}/>
          <div className="image-info">
            <div>{userName}</div>
            <a href="/" className="view-link">View Resume</a>
          </div>
          

          <button onClick={fileUploadAction} className="upload-btn">Upload Avatar</button>
          <input
            style={{display:'none'}}
            type={"file"}
            ref={reference}
            onChange={handleChange}
            accept="image/*"
          />
          <br/>
        </div>
    </div>
  );
}
