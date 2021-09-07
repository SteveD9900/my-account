import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./NavBar.scss";

export default function NavBar(props) {
  const [editable, setEdit] = useState(false);

  useEffect(() => {
    props.onEditStatus(editable);
  });

  function enableEdit() {
    setEdit(true);
  }

  function resetUpdate() {
    setEdit(false);
    // reverse changes
  }

  const saveChanges = () => {
    // setEdit(false);
    //trigger form submit
  };

  return (
    <Navbar className="NavBar">
      <Container fluid>
        {editable === true ? (
          <ArrowBackIosIcon onClick={resetUpdate} />
        ) : null}
        <Navbar.Brand className="title-font">My Account</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {editable === false ? (
              <button onClick={enableEdit} className="edit-btn">
                Edit
              </button>
            ) : (
              <button onClick={saveChanges} className="edit-btn">
                Save
              </button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
