
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const DeleteStationForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter Station Number of the Station You Want to Delete</Form.Label>
            <Form.Control placeholder="Station Number"/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { DeleteStationForm };