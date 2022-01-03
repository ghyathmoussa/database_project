import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const InsertDriverForm = (props) => {

  const [data, setData] = useState({
    id: 0,
    name: '',
    surname: '',
    plate: '',
    age: 0,
    date: new Date()
  })
  const [alert, setAlert] = useState({
    alert1: false,
    alert2: false,
    alert3: false
  })

  const checkForm = () => {
    if (data.age < 0)
      setAlert({ ...alert, alert1: true })
    else if (data.id < 0)
      setAlert({ ...alert, alert2: true })
    else if (parseInt(data.plate) < 0)
      setAlert({ ...alert, alert3: true })
    else
      fetchData()
  }

  function fetchData() {
    const port = 'http://localhost:4000/api/taxi-driver/create'

    axios.post(port, data).then(res => {
      console.log(res.data)
    })
      .catch(err => console.log(err))
  }
  return (

    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
        checkForm()
      }}
    >

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First Name" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" name='surname' value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="Age" name='age' onChange={(e) => setData({ ...data, age: parseInt(e.target.value) })} />
          {alert.alert1 && <Alert key={data.id} variant='danger'>
            please enter a positive number
          </Alert>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>ID</Form.Label>
          <Form.Control placeholder="ID" name='id' onChange={(e) => setData({...data,id:parseInt(e.target.value)})} />
          {alert.alert2 && <Alert key={data.id} variant='danger'>
            please enter a positive number
          </Alert>}
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Plate Number of His Car</Form.Label>
          <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({ ...data, plate: e.target.value })} />
          {alert.alert3 && <Alert key={data.id} variant='danger'>
            please enter a positive number
          </Alert>}
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { InsertDriverForm };

