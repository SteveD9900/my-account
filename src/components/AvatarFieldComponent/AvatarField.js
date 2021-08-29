import React from "react";
import {useState } from "react";
import { useRef } from 'react';

import "./AvatarField.scss";

export default function AvatarField() {
  const [file,  setFile] = useState("");
  const reference = useRef("inputReference");
     
  const handleChange = (e) =>{
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  function fileUploadAction() {
    reference.current.click();
  }

  return (
    <div className="AvatarField">
        <div>
          <img className="display-image" alt="avator" src={file}/>
          <div className="image-info">
            <div>User Name</div>
            <a href="/" className="view-link">View Resume</a>
          </div>
          

          <button onClick={fileUploadAction} className="upload-btn">Upload Resume</button>
          <input
            style={{display:'none'}}
            type={"file"}
            ref={reference}
            onChange={handleChange}
          />
          <br/>
        </div>
    </div>
  );
}
