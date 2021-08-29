import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import "./NavBar.scss";

export default function NavBar(props) {

  return (
    <Navbar className="NavBar">
        <Container fluid>
            <Navbar.Brand className="title-font">My Account</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <button className="edit-btn">Edit</button>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
