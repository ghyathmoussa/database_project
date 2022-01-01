import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const UpdateStationForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter the Station Number of the Station You Want to Update</Form.Label>
            <Form.Control placeholder="Station Number"/>
          </Form.Group>
        </Row>

        <h2>New Information</h2>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Staion Name</Form.Label>
            <Form.Control placeholder="Staion Name"/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="City" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Staion Number</Form.Label>
            <Form.Control placeholder="Staion Number" />
           </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { UpdateStationForm };

