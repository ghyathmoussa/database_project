import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const UpdateDriverForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter the Driver ID of the Driver You Want to Update</Form.Label>
            <Form.Control placeholder="ID"/>
          </Form.Group>
        </Row>

        <h2>New Information</h2>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name"/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder="Age"/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>ID</Form.Label>
            <Form.Control placeholder="ID"/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Plate Number of His Car</Form.Label>
            <Form.Control placeholder="Plate Number" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { UpdateDriverForm };

