import React from "react";
import { Form, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import InputField from "../../components/InputFieldComponent/InputField";
// import { useSelector } from "react-redux";

import "./MainPanel.scss";

export default function MainPanel() {

  return (
    <Container>
        <InputField/>
        <Form>
            <Row className="mb-1">
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
            </Row>
            <Row className="mb-1">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>
        </Form>
    </Container>
  );
}
