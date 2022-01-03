import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const InsertCustomerForm = (props) => {
  const [data, setData] = useState({
    cname: '',
    clname: '',
  })
  function fetchData() {
    const port = 'http://localhost:4000/api/customer/create'

    axios.post(port, data).then(res => {
      console.log(res.data)

    })
      .catch(err => console.log(err.message))
  }
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
        fetchData()
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First Name" name='cname' value={data.cname} onChange={(e) => setData({ ...data, cname: e.target.value })} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" name='lname' value={data.clname} onChange={(e) => setData({ ...data, clname: e.target.value })} />
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

