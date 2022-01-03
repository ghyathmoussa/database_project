import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col,Alert } from "react-bootstrap";
import axios from 'axios'

const UpdateDriverForm = (props) => {
  const [data, setData] = useState({
    id: 0,
    name: '',
    surname: '',
    plate: '',
    date: new Date()
  })
  const [alert, setAlert] = useState(false)

  function fetchData() {
    const port = 'http://localhost:4000/api/taxi-driver/update'

    axios.put(port, data).then(res => {
      console.log(res.data.rows)
      if (res.data.rows.length == 0)
        setAlert(true)
      else
        setAlert(false)
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
          <Form.Label>Enter the Driver ID of the Driver You Want to Update</Form.Label>
          <Form.Control placeholder="ID" name='id' onChange={(e) => setData({ ...data, id: parseInt(e.target.value) })} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter a correct ID
          </Alert>}
        </Form.Group>
      </Row>

      <h2>New Information</h2>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First Name" name='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.name })} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" name='surname' value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })} />
        </Form.Group>
      </Row>
      {/* 
        * there is no age feild in database
        * no need to change the ID of Drivers
      */}
      {/* <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="Age" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>ID</Form.Label>
          <Form.Control placeholder="ID" />
        </Form.Group>
      </Row> */}

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Plate Number of His Car</Form.Label>
          <Form.Control placeholder="Plate Number" name='plate' value={data.plate} onChange={(e) => setData({ ...data, plate: e.target.value })} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { UpdateDriverForm };

