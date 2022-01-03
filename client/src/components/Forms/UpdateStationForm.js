import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col,Alert } from "react-bootstrap";
import axios from 'axios'

const UpdateStationForm = (props) => {
  const [data, setData] = useState({
    snumber: 0,
    sname: '',
    city: '',
  })
  const [alert, setAlert] = useState(false)
  function fetchData() {
    const port = 'http://localhost:4000/api/station/update'

    axios.put(port, data).then(res => {
      console.log(res.data.rows)
      if (res.data.rows.length == 0)
        setAlert(true)

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
          <Form.Label>Enter the Station Number of the Station You Want to Update</Form.Label>
          <Form.Control placeholder="Station Number" name='snumber' onChange={(e) => setData({ ...data, snumber: parseInt(e.target.value) })} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter a correct ID
          </Alert>}
        </Form.Group>
      </Row>

      <h2>New Information</h2>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Staion Name</Form.Label>
          <Form.Control placeholder="Staion Name" name='sname' value={data.sname} onChange={(e) => setData({ ...data, sname: e.target.value })} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" name='city' value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} />
        </Form.Group>
      </Row>
      {/* 
        * no need to change ID of Station
      */}
      {/* <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Staion Number</Form.Label>
          <Form.Control placeholder="Staion Number" />
        </Form.Group>
      </Row> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { UpdateStationForm };

