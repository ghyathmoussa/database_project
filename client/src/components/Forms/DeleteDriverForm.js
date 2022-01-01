
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const DeleteDriverForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter ID of the Driver You Want to Delete</Form.Label>
            <Form.Control placeholder="ID"/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { DeleteDriverForm };