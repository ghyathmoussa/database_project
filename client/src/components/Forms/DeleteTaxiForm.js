
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const DeleteTaxiForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter the Plate Number of the Taxi You Want to Delete</Form.Label>
            <Form.Control placeholder="Plate Number"/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { DeleteTaxiForm };