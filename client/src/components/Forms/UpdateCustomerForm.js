import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import axios from 'axios'

const UpdateCustomerForm = (props) => {
  const [data, setData] = useState({
    cname: '',
    clname: '',
    id: 0
  })
  function fetchData() {
    const port = 'http://localhost:4000/api/customer/update'

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
          <Form.Label>Enter the Customer ID of the Customer You Want to Update</Form.Label>
          <Form.Control placeholder="ID" name='id' value={data.id} onChange={(e) => setData({ ...data, id: parseInt(e.target.value) })} />
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
          <Form.Control placeholder="Last Name" name='cname' value={data.cname} onChange={(e) => setData({ ...data, cname: e.target.value })} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>ID</Form.Label>
          <Form.Control placeholder="ID" name='clname' value={data.clname} onChange={(e) => setData({ ...data, clname: e.target.value })} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { UpdateCustomerForm };

