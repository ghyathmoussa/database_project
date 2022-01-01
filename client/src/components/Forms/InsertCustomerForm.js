import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const InsertCustomerForm = (props) =>  {
  return (
    
    <Form>

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

        {/* <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>ID</Form.Label>
            <Form.Control placeholder="ID"/>
          </Form.Group>
        </Row> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { InsertCustomerForm };

