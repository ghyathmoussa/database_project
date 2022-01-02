import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import axios from 'axios'

const InsertStationForm = (props) => {
  const [data, setData] = useState({
    sname: '',
    city: '',
    snumber: 0
  })
  function fetchData() {
    const port = 'http://localhost:4000/api/taxi/create'

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
          <Form.Label>Staion Name</Form.Label>
          <Form.Control placeholder="Staion Number" name='sname' value={data.sname} onChange={(e) => setData({...data,sname:e.target.value})} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" name='city' value={data.city} onChange={(e) => setData({...data,city:e.target.value})} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Staion Number</Form.Label>
          <Form.Control placeholder="Staion Number" name='snumber' value={data.snumber} onChange={(e) => setData({...data,snumber:parseInt(e.target.value)})} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { InsertStationForm };

