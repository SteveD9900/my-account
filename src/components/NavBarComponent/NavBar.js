import React, { useState } from "react";
import { Navbar, Container } from 'react-bootstrap';
import "./NavBar.scss";

export default function NavBar(props) {
  const [editable, setEdit] = useState("false");
  const [btnText, setBtnText] = useState("Edit");

  const toggleEditBtn = () => {
    setEdit(!editable);
    if (editable) {
      setBtnText("Save");
    } else {
      setBtnText("Edit");
    }
    props.onEditStatus(editable);
  }

  return (
    <Navbar className="NavBar">
        <Container fluid>
            <Navbar.Brand className="title-font">My Account</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <button onClick={toggleEditBtn} className="edit-btn">{btnText}</button>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
