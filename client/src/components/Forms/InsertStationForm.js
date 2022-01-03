import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const InsertStationForm = (props) => {
  const [data, setData] = useState({
    sname: '',
    city: '',
    snumber: 0
  })
  const [alert,setAlert] = useState(false)
  function fetchData() {
    const port = 'http://localhost:4000/api/station/create'

    axios.post(port, data).then(res => {
      console.log(res.data)

    })
      .catch(err => console.log(err.message))
  }
  const checkForm = () => {
    if(data.snumber < 0)
      setAlert(true)
    else
      fetchData()
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
          <Form.Control placeholder="Staion Number" name='snumber' onChange={(e) => setData({...data,snumber:parseInt(e.target.value)})} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter positive number
          </Alert>}
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { InsertStationForm };

