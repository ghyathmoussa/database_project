
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import http from '../../httpRequest'
import axios from 'axios'

const InsertTaxiForm = (props) => {

  const [data, setData] = useState({
    plate: '',
    model: '',
    snumber: 0
  })
  function fetchData() {
    const port = 'http://localhost:4000/api/taxi/create'

    axios.post(port,data).then(res =>{
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
        <Form.Group as={Col} name='plate'>
          <Form.Label>Plate Number</Form.Label>
          <Form.Control placeholder="Plate Number" name='plate' value={data.plate} onChange={(e) => setData({ ...data, plate: e.target.value })} />
        </Form.Group>

        <Form.Group as={Col} name='model'>
          <Form.Label>Car Model</Form.Label>
          <Form.Control placeholder="Car Model" name='model' value={data.model} onChange={(e) => setData({ ...data, model: e.target.value })} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} name='snumber'>
          <Form.Label>Station Number</Form.Label>
          <Form.Control placeholder="Station Number" name='staion' value={data.dnumebr} onChange={(e) => setData({ ...data, snumber: parseInt(e.target.value) })} />
        </Form.Group>
      </Row>
      <Button
        variant="primary"
        type="submit"
      // onClick={}
      >
        Submit
      </Button>
    </Form>
  );
}
export { InsertTaxiForm };

